// Services stage 3D: flat, cel-shaded blue props tumbling past the camera as the cards travel.
// One prop per service (laptop + phone, gear, cloud, magnifier, megaphone) around a large
// orbit sculpture, plus crumpled scribbled papers and white specks.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, TorusGeometry, TorusKnotGeometry, SphereGeometry,
  PlaneGeometry, BoxGeometry, CylinderGeometry, ConeGeometry, ExtrudeGeometry, Shape, Path,
  MeshToonMaterial, MeshBasicMaterial, DataTexture, RedFormat, NearestFilter, CanvasTexture, SRGBColorSpace,
  DirectionalLight, AmbientLight, BufferGeometry, Float32BufferAttribute, Points, PointsMaterial,
  DoubleSide, Color, MathUtils,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const BLUE = '#2a62c8';
const LIGHT_BLUE = '#3c86e6';

function toonRamp() {
  const t = new DataTexture(new Uint8Array([70, 150, 255]), 3, 1, RedFormat);
  t.minFilter = t.magFilter = NearestFilter;
  t.needsUpdate = true;
  return t;
}

function scribbleTexture(seed) {
  const c = document.createElement('canvas');
  c.width = 192; c.height = 256;
  const x = c.getContext('2d');
  x.fillStyle = '#f3f0e9';
  x.fillRect(0, 0, 192, 256);
  x.strokeStyle = 'rgba(40,40,48,0.75)';
  x.lineWidth = 2;
  let r = seed * 9301 + 49297;
  const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
  for (let row = 0; row < 11; row++) {
    const y = 26 + row * 20;
    let px = 18;
    x.beginPath();
    x.moveTo(px, y);
    const end = 120 + rnd() * 54;
    while (px < end) { px += 6 + rnd() * 8; x.lineTo(px, y + (rnd() - 0.5) * 7); }
    x.stroke();
  }
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}

// crumpled sheet: a plane with random folds
function crumpledSheet() {
  const g = new PlaneGeometry(0.62, 0.82, 10, 12);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    p.setZ(i, Math.sin(x * 9 + y * 4) * 0.025 + Math.sin(y * 13 - x * 3) * 0.02 + (Math.random() - 0.5) * 0.018);
  }
  g.computeVertexNormals();
  return g;
}

function gearGeometry() {
  const s = new Shape();
  const teeth = 10, r1 = 0.62, r2 = 0.78;
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (i / (teeth * 2)) * Math.PI * 2, a1 = ((i + 1) / (teeth * 2)) * Math.PI * 2;
    const r = i % 2 ? r1 : r2;
    if (i === 0) s.moveTo(Math.cos(a0) * r, Math.sin(a0) * r);
    s.lineTo(Math.cos(a0 + 0.04) * r, Math.sin(a0 + 0.04) * r);
    s.lineTo(Math.cos(a1 - 0.04) * r, Math.sin(a1 - 0.04) * r);
  }
  const hole = new Path();
  hole.absarc(0, 0, 0.24, 0, Math.PI * 2, true);
  s.holes.push(hole);
  return new ExtrudeGeometry(s, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2, curveSegments: 6 }).center();
}

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
    r.outputColorSpace = SRGBColorSpace;

    const scene = (this.scene = new Scene());
    this.camera = new PerspectiveCamera(34, 1, 0.1, 100);
    this.camera.position.set(0, 0, 9);

    const ramp = toonRamp();
    const blue = new MeshToonMaterial({ color: new Color(BLUE), gradientMap: ramp });
    const blueLight = new MeshToonMaterial({ color: new Color(LIGHT_BLUE), gradientMap: ramp });
    const dark = new MeshToonMaterial({ color: new Color('#173c86'), gradientMap: ramp });
    const screenMat = new MeshBasicMaterial({ color: new Color('#0d2348') });

    // ---- props ----
    const props = [];
    const add = (obj, cfg) => { scene.add(obj); props.push({ obj, ...cfg }); obj.visible = false; return obj; };

    // orbit sculpture: nested rings around a knot (the stage's centrepiece)
    const orbit = new Group();
    const g1 = new Group(), g2 = new Group(), g3 = new Group();
    g1.add(new Mesh(new TorusGeometry(1.75, 0.09, 12, 120), blue));
    g2.add(new Mesh(new TorusGeometry(1.4, 0.075, 12, 100), blue));
    g3.add(new Mesh(new TorusGeometry(1.08, 0.065, 12, 90), blueLight));
    const knot = new Mesh(new TorusKnotGeometry(0.46, 0.15, 140, 18, 2, 3), blueLight);
    g3.add(knot); g2.add(g3); g1.add(g2); orbit.add(g1);
    const beam = new Mesh(new CylinderGeometry(0.05, 0.05, 5.4, 10), dark);
    beam.rotation.z = Math.PI / 2;
    orbit.add(beam);
    for (const sgn of [-1, 1]) {
      const end = new Mesh(new SphereGeometry(0.2, 20, 14), blueLight);
      end.position.x = sgn * 2.7;
      orbit.add(end);
    }
    this.rings = [g1, g2, g3, knot];
    add(orbit, { c0: 0.22, c1: 0.95, from: [-6.5, 4.2, -3], to: [6.2, -3.4, 0.8], scale: 1.15, spin: [0.5, 1.6, 0.4], base: [0.4, -0.5, 0.2] });

    // laptop (web) and phone (mobile)
    const laptop = new Group();
    const lb = new Mesh(new RoundedBoxGeometry(1.5, 0.08, 1.0, 2, 0.03), blue);
    const lid = new Group();
    const ls = new Mesh(new RoundedBoxGeometry(1.5, 1.0, 0.07, 2, 0.03), blue);
    const lscreen = new Mesh(new PlaneGeometry(1.32, 0.84), screenMat);
    lscreen.position.z = 0.04;
    ls.position.y = 0.5; lscreen.position.y = 0.5;
    lid.add(ls, lscreen);
    lid.position.set(0, 0.04, -0.5);
    lid.rotation.x = -0.35;
    laptop.add(lb, lid);
    add(laptop, { c0: 0.0, c1: 0.42, from: [5.8, -4.2, -1.5], to: [-5.2, 3.8, -2.5], scale: 1.0, spin: [0.9, 1.3, 0.4], base: [0.5, 0.6, 0] });

    const phone = new Group();
    phone.add(new Mesh(new RoundedBoxGeometry(0.62, 1.22, 0.08, 3, 0.08), blueLight));
    const ps = new Mesh(new PlaneGeometry(0.52, 1.08), screenMat);
    ps.position.z = 0.045;
    phone.add(ps);
    add(phone, { c0: 0.1, c1: 0.55, from: [-5.6, -3.9, 0.5], to: [3.4, 4.6, -1.2], scale: 0.95, spin: [1.6, 1.1, 0.9], base: [0.3, 0.2, 0.6] });

    // gear (CRM workflows)
    const gear = new Mesh(gearGeometry(), blue);
    add(gear, { c0: 0.32, c1: 0.78, from: [6.4, 1.2, -2.5], to: [-6.4, -2.6, -0.5], scale: 1.0, spin: [0.4, 0.8, 2.2], base: [0.6, 0.4, 0] });

    // cloud (infrastructure)
    const cloud = new Group();
    for (const [x, y, rr] of [[-0.55, -0.05, 0.42], [0, 0.18, 0.58], [0.55, -0.02, 0.45], [0.22, -0.18, 0.4], [-0.25, -0.2, 0.38]]) {
      const m = new Mesh(new SphereGeometry(rr, 20, 14), blueLight);
      m.position.set(x, y, 0);
      m.scale.z = 0.7;
      cloud.add(m);
    }
    add(cloud, { c0: 0.52, c1: 1.0, from: [-6.5, -3.2, -2.5], to: [5.6, 3.4, -3.5], scale: 1.25, spin: [0.2, 0.9, 0.3], base: [0, 0, 0] });

    // magnifier (SEO)
    const mag = new Group();
    mag.add(new Mesh(new TorusGeometry(0.42, 0.08, 10, 40), blue));
    const lens = new Mesh(new CylinderGeometry(0.38, 0.38, 0.03, 32), new MeshToonMaterial({ color: new Color('#9fd3ff'), gradientMap: ramp, transparent: true, opacity: 0.35 }));
    lens.rotation.x = Math.PI / 2;
    mag.add(lens);
    const handle = new Mesh(new CylinderGeometry(0.07, 0.09, 0.9, 12), dark);
    handle.position.set(0.52, -0.52, 0);
    handle.rotation.z = Math.PI / 4;
    mag.add(handle);
    add(mag, { c0: 0.44, c1: 0.92, from: [4.6, -5.0, 0.2], to: [-3.6, 4.8, -1.4], scale: 1.1, spin: [1.1, 0.7, 1.4], base: [0.2, 0.5, 0.3] });

    // megaphone (performance marketing)
    const mega = new Group();
    const horn = new Mesh(new ConeGeometry(0.5, 1.1, 24, 1, true), blue);
    horn.material = blue.clone();
    horn.material.side = DoubleSide;
    horn.rotation.z = -Math.PI / 2;
    mega.add(horn);
    const grip = new Mesh(new CylinderGeometry(0.08, 0.08, 0.45, 10), dark);
    grip.position.set(-0.25, -0.3, 0);
    mega.add(grip);
    add(mega, { c0: 0.68, c1: 1.12, from: [6.2, 3.2, -1.2], to: [-2.6, -5.2, 1.0], scale: 1.0, spin: [0.8, 1.5, 0.6], base: [0.3, 0.8, 0] });

    // crumpled papers with scribbles
    const sheet = crumpledSheet();
    for (let i = 0; i < 8; i++) {
      const m = new Mesh(sheet, new MeshToonMaterial({ map: scribbleTexture(i + 1), gradientMap: ramp, side: DoubleSide }));
      const lane = (i / 7) * 2 - 1;
      const c0 = 0.04 + i * 0.11;
      add(m, {
        c0, c1: c0 + 0.38,
        from: [6.5 - (i % 3), -4.6 + lane * 1.4, -2 + (i % 4) * 1.1],
        to: [-6.5 + (i % 2) * 2, 4.4 + lane * 1.2, -1.5 + (i % 3) * 1.2],
        scale: 0.8 + (i % 3) * 0.35, spin: [2.4 + i * 0.2, 1.8, 2.9 - i * 0.15], base: [i, i * 2, i * 0.5], paper: true,
      });
    }
    this.props = props;

    // specks
    const n = 220;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    const pg = new BufferGeometry();
    pg.setAttribute('position', new Float32BufferAttribute(pos, 3));
    this.specks = new Points(pg, new PointsMaterial({ color: 0xffffff, size: 0.04, transparent: true, opacity: 0.8, depthWrite: false }));
    scene.add(this.specks);

    const key = new DirectionalLight(new Color('#d8f4ff'), 2.6);
    key.position.set(-3, 5, 6);
    const fill = new AmbientLight(new Color('#25427e'), 1.1);
    scene.add(key, fill);

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
    const xs = this.narrow ? 0.55 : 1;
    for (const pr of this.props) {
      const k = (p - pr.c0) / (pr.c1 - pr.c0);
      const on = k > -0.02 && k < 1.02;
      pr.obj.visible = on;
      if (!on) continue;
      // gently curved path: ease-in-out along the line, bowed sideways
      const e = k * k * (3 - 2 * k);
      const bow = Math.sin(k * Math.PI) * 0.9;
      pr.obj.position.set(
        (MathUtils.lerp(pr.from[0], pr.to[0], e) + bow * 0.4) * xs,
        MathUtils.lerp(pr.from[1], pr.to[1], e) + bow * 0.3 + Math.sin(time * 0.6 + pr.base[0]) * 0.05,
        MathUtils.lerp(pr.from[2], pr.to[2], e)
      );
      const tt = pr.paper ? time * 0.35 : time * 0.12;
      pr.obj.rotation.set(pr.base[0] + pr.spin[0] * (k + tt), pr.base[1] + pr.spin[1] * (k + tt), pr.base[2] + pr.spin[2] * (k + tt) * 0.6);
      pr.obj.scale.setScalar(pr.scale * (this.narrow ? 0.75 : 1));
    }
    const [g1, g2, g3, knot] = this.rings;
    g1.rotation.y = p * Math.PI * 1.6 + time * 0.18;
    g2.rotation.x = p * Math.PI * 2.2 + time * 0.23;
    g3.rotation.y = -p * Math.PI * 2.8 - time * 0.3;
    knot.rotation.z = time * 0.4 + p * 4.0;
    this.specks.rotation.y = time * 0.02 + p * 0.6;
    this.specks.position.y = -p * 1.5;
    this.renderer.render(this.scene, this.camera);
  }
}
