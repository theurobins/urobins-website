// Floating metallic sculpture for the services stage: nested gimbal rings around a
// torus-knot core, with white panels and specks drifting through the scene.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, TorusGeometry, TorusKnotGeometry,
  SphereGeometry, PlaneGeometry, BoxGeometry, MeshStandardMaterial,
  DirectionalLight, PMREMGenerator, BufferGeometry, Float32BufferAttribute, Points,
  PointsMaterial, DoubleSide, ACESFilmicToneMapping, SRGBColorSpace, Color, MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export class Sculpture {
  constructor(canvas) {
    this.canvas = canvas;
    this.progress = 0;
    this.visible = false;
    try {
      this.renderer = new WebGLRenderer({ canvas, antialias: (window.devicePixelRatio || 1) < 1.5, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
      console.warn('[services] WebGL unavailable', e);
      this.failed = true;
      return;
    }
    const r = this.renderer;
    r.setClearColor(0x000000, 0);
    r.toneMapping = ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    r.outputColorSpace = SRGBColorSpace;

    const scene = (this.scene = new Scene());
    const pm = new PMREMGenerator(r);
    scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    pm.dispose();

    this.camera = new PerspectiveCamera(34, 1, 0.1, 100);
    this.camera.position.set(0, 0, 9);

    const metal = new MeshStandardMaterial({ color: new Color('#2d66cf'), metalness: 1, roughness: 0.3 });
    const metalBright = new MeshStandardMaterial({ color: new Color('#4f8cf0'), metalness: 1, roughness: 0.18 });

    const rig = (this.rig = new Group());
    const g1 = new Group(), g2 = new Group(), g3 = new Group();
    const ring1 = new Mesh(new TorusGeometry(1.75, 0.085, 20, 160), metal);
    const ring2 = new Mesh(new TorusGeometry(1.42, 0.07, 18, 140), metal);
    const ring3 = new Mesh(new TorusGeometry(1.12, 0.06, 16, 120), metal);
    g1.add(ring1); g2.add(ring2); g3.add(ring3);
    // pivot pins where each ring hangs in the next
    const pin = new SphereGeometry(0.12, 32, 24);
    for (const [g, rr] of [[g1, 1.75], [g2, 1.42], [g3, 1.12]]) {
      for (const sgn of [-1, 1]) {
        const m = new Mesh(pin, metalBright);
        m.position.set(sgn * rr, 0, 0);
        g.add(m);
      }
    }
    const core = new Mesh(new TorusKnotGeometry(0.5, 0.17, 180, 24, 2, 3), metalBright);
    g3.add(core);
    g2.add(g3); g1.add(g2); rig.add(g1);
    this.g1 = g1; this.g2 = g2; this.g3 = g3; this.core = core;

    // a long arm, echoing a balance beam
    const arm = new Mesh(new BoxGeometry(5.6, 0.07, 0.07), metal);
    arm.position.y = -0.02;
    this.arm = new Group();
    this.arm.add(arm);
    for (const sgn of [-1, 1]) {
      const end = new Mesh(new SphereGeometry(0.2, 40, 30), metalBright);
      end.position.set(sgn * 2.8, 0, 0);
      this.arm.add(end);
    }
    rig.add(this.arm);
    scene.add(rig);

    // white panels drifting like loose sheets of spec
    const panelMat = new MeshStandardMaterial({ color: new Color('#f3f1ea'), roughness: 0.85, metalness: 0, side: DoubleSide, emissive: new Color('#1a1a1a') });
    const panelGeo = new PlaneGeometry(0.5, 0.66, 1, 1);
    this.panels = Array.from({ length: 9 }, (_, i) => {
      const m = new Mesh(panelGeo, panelMat);
      m.userData = {
        seed: i * 1.618,
        lane: (i / 9) * 2 - 1,
        speed: 0.6 + (i % 3) * 0.25,
        spin: { r: 0.4 + Math.random(), g: 0.4 + Math.random(), b: 0.4 + Math.random() },
      };
      const sc = 0.55 + ((i * 37) % 10) / 14;
      m.scale.setScalar(sc);
      scene.add(m);
      return m;
    });

    // specks
    const n = 260;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    const pg = new BufferGeometry();
    pg.setAttribute('position', new Float32BufferAttribute(pos, 3));
    this.specks = new Points(pg, new PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.75, depthWrite: false }));
    scene.add(this.specks);

    const key = new DirectionalLight(0xdbe8ff, 2.2);
    key.position.set(-4, 6, 6);
    const rim = new DirectionalLight(0x7fe0ff, 1.6);
    rim.position.set(5, -2, -6);
    scene.add(key, rim);

    this.resize();
  }

  resize() {
    if (this.failed) return;
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.narrow = w / h < 0.9;
  }

  setProgress(p) { this.progress = p; }

  render(time) {
    if (this.failed || !this.visible) return;
    const p = this.progress;
    const t = time;
    const narrow = this.narrow;

    // the rig drifts across the stage as the cards travel
    const x = MathUtils.lerp(narrow ? 1.2 : 2.6, narrow ? -0.8 : -2.1, p) + Math.sin(t * 0.35) * 0.12;
    const y = MathUtils.lerp(1.5, -0.9, p) + Math.sin(t * 0.5) * 0.1;
    const z = MathUtils.lerp(-1.2, 0.4, Math.sin(p * Math.PI));
    this.rig.position.set(x, y, z);
    this.rig.rotation.set(0.35 + p * 0.9, -0.6 + p * 2.6 + t * 0.05, -0.25 + p * 0.5);
    const sc = narrow ? 0.72 : 1;
    this.rig.scale.setScalar(sc);

    this.g1.rotation.y = p * Math.PI * 1.6 + t * 0.18;
    this.g2.rotation.x = p * Math.PI * 2.2 + t * 0.23;
    this.g3.rotation.y = -p * Math.PI * 2.8 - t * 0.3;
    this.core.rotation.z = t * 0.4 + p * 4.0;
    this.arm.rotation.z = Math.sin(t * 0.6 + p * 6.0) * 0.18 + p * 0.9;
    this.arm.rotation.y = p * 1.4;

    // panels flow from lower right to upper left
    for (const m of this.panels) {
      const d = m.userData;
      const k = ((p * 1.8 * d.speed + t * 0.03 * d.speed + d.seed) % 1.4) - 0.2;
      m.position.set(
        MathUtils.lerp(7.5, -7.5, k) + Math.sin(d.seed * 3.0) * 1.2,
        MathUtils.lerp(-4.2, 4.4, k) + d.lane * 1.6 + Math.sin(t * 0.7 + d.seed) * 0.25,
        -1.5 + d.lane * 2.2
      );
      m.rotation.set(t * 0.6 * d.spin.r + k * 6.0, t * 0.5 * d.spin.g + k * 4.0, t * 0.4 * d.spin.b + d.seed);
    }
    this.specks.rotation.y = t * 0.02 + p * 0.6;
    this.specks.position.y = -p * 1.5;

    this.renderer.render(this.scene, this.camera);
  }
}
