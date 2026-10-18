// Services stage 3D: flat, cel-shaded cobalt props tumbling past the camera as the cards travel.
// One prop per service (laptop, phone, gear, cloud, magnifier, megaphone) plus an orbit-ring
// sculpture, big scribbled paper sheets that sweep past right in front of the camera, small
// papers, and a few white flakes.
// Two canvases share one scene: props far from the camera draw behind the cards, props close
// to it (z > FRONT_Z) draw on a second canvas above the cards and the title.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, TorusGeometry, TorusKnotGeometry, SphereGeometry,
  PlaneGeometry, CylinderGeometry, ConeGeometry, ExtrudeGeometry, Shape, Path, BufferGeometry,
  Float32BufferAttribute, ShaderMaterial, MeshBasicMaterial, CanvasTexture, InstancedMesh, Object3D,
  Vector3, DoubleSide, FrontSide,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const FRONT_Z = 1.2;
const LIGHT = new Vector3(-3, 5, 6).normalize(); // upper-left key light (the camera never rotates)

// flat tones picked by the light angle (rim, lit, mid, shade): no gradients, no outlines. Faces
// toward the camera land on the lit tone; only faces turned up-left toward the light catch the rim.
// Colours are passed straight through (sRGB in, sRGB out).
const VERT = `
varying vec3 vN;
varying vec2 vUv;
void main() {
  vUv = uv;
  vN = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;
const FRAG = `
uniform vec3 uRim;
uniform vec3 uLit;
uniform vec3 uMid;
uniform vec3 uShade;
uniform vec3 uLight;
uniform vec3 uCut;
#ifdef USE_SCRIBBLE
uniform sampler2D uMap;
#endif
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec3 n = normalize(vN);
  if (!gl_FrontFacing) n = -n;
  float d = dot(n, uLight);
  vec3 c = d > uCut.x ? uRim : (d > uCut.y ? uLit : (d > uCut.z ? uMid : uShade));
#ifdef USE_SCRIBBLE
  c *= texture2D(uMap, vUv).rgb;
#endif
  gl_FragColor = vec4(c, 1.0);
}`;

// raw sRGB triplets: no colour management on these, the values go to the screen as written
const hex = (h) => new Vector3(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
function celMaterial({ rim, lit, mid, shade, cut = [0.9, 0.5, 0.1], map = null, side = FrontSide }) {
  return new ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    defines: map ? { USE_SCRIBBLE: '' } : {},
    uniforms: {
      uRim: { value: hex(rim) }, uLit: { value: hex(lit) }, uMid: { value: hex(mid) }, uShade: { value: hex(shade) },
      uLight: { value: LIGHT }, uCut: { value: new Vector3(...cut) }, uMap: { value: map },
    },
    side,
  });
}

// white sheet with black hand scribbles and a small doodle box
function scribbleTexture(seed) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 340;
  const x = c.getContext('2d');
  x.fillStyle = '#fff';
  x.fillRect(0, 0, 256, 340);
  let r = seed * 9301 + 49297;
  const rnd = () => { r = (r * 9301 + 49297) % 233280; return r / 233280; };
  x.strokeStyle = 'rgba(20,20,24,0.85)';
  x.lineWidth = 2.5;
  x.lineCap = x.lineJoin = 'round';
  const rows = 9 + Math.floor(rnd() * 4);
  for (let row = 0; row < rows; row++) {
    const y = 34 + row * 24;
    let px = 22 + rnd() * 10;
    x.beginPath();
    x.moveTo(px, y);
    const end = 150 + rnd() * 80;
    while (px < end) { px += 5 + rnd() * 9; x.lineTo(px, y + (rnd() - 0.5) * 9); }
    x.stroke();
  }
  const bx = 40 + rnd() * 130, by = 60 + rnd() * 200;
  x.strokeRect(bx, by, 34 + rnd() * 26, 26 + rnd() * 18);
  return new CanvasTexture(c);
}

// crumpled sheet: a plane with random folds
function crumpledSheet(w, h) {
  const g = new PlaneGeometry(w, h, 10, 12);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const px = p.getX(i), py = p.getY(i);
    p.setZ(i, Math.sin(px * 9 + py * 4) * 0.025 + Math.sin(py * 13 - px * 3) * 0.02 + (Math.random() - 0.5) * 0.018);
  }
  g.computeVertexNormals();
  return g;
}

function gearGeometry() {
  const s = new Shape();
  const teeth = 10, r1 = 0.62, r2 = 0.78;
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (i / (teeth * 2)) * Math.PI * 2, a1 = ((i + 1) / (teeth * 2)) * Math.PI * 2;
    const rr = i % 2 ? r1 : r2;
    if (i === 0) s.moveTo(Math.cos(a0) * rr, Math.sin(a0) * rr);
    s.lineTo(Math.cos(a0 + 0.04) * rr, Math.sin(a0 + 0.04) * rr);
    s.lineTo(Math.cos(a1 - 0.04) * rr, Math.sin(a1 - 0.04) * rr);
  }
  const hole = new Path();
  hole.absarc(0, 0, 0.24, 0, Math.PI * 2, true);
  s.holes.push(hole);
  return new ExtrudeGeometry(s, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2, curveSegments: 6 }).center();
}

// irregular white chip: a jittered quad
function flakeGeometry() {
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute([-0.5, -0.4, 0, 0.55, -0.5, 0, 0.35, 0.5, 0, -0.45, 0.3, 0], 3));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}

const setLayer = (obj, n) => obj.traverse((o) => o.layers.set(n));

export class Sculpture {
  constructor(back, front) {
    this.canvas = back;
    this.progress = 0;
    this.visible = false;
    const make = (canvas) => {
      const r = new WebGLRenderer({ canvas, antialias: (window.devicePixelRatio || 1) < 1.5, alpha: true, powerPreference: 'high-performance' });
      // don't stall the main thread on a synchronous link-status check for every program
      r.debug.checkShaderErrors = false;
      r.setClearColor(0x000000, 0);
      return r;
    };
    try {
      this.renderer = make(back);
      this.front = front ? make(front) : null;
    } catch (e) {
      console.warn('[services] WebGL unavailable', e);
      this.failed = true;
      return;
    }

    const scene = (this.scene = new Scene());
    this.camera = new PerspectiveCamera(34, 1, 0.1, 100);
    this.camera.position.set(0, 0, 9);

    const COBALT = { rim: '#62c1d4', lit: '#1b67a5', mid: '#134a7c', shade: '#0a335e' };
    const blue = celMaterial(COBALT);
    const blueTwoSided = celMaterial({ ...COBALT, side: DoubleSide });
    const deep = celMaterial({ rim: '#155284', lit: '#124472', mid: '#0e3a66', shade: '#082848' });
    const bright = celMaterial({ rim: '#62c1d4', lit: '#2f86b8', mid: '#1b67a5', shade: '#124472', cut: [0.8, 0.4, 0.0] });
    const screenMat = new MeshBasicMaterial({ color: 0x082848 });

    // ---- props: each travels from -> via -> to while the deck runs from c0 to c1 ----
    const props = [];
    const add = (obj, cfg) => {
      scene.add(obj);
      obj.visible = false;
      props.push({ obj, layer: 0, ...cfg });
      return obj;
    };

    // orbit sculpture: nested rings around a knot; swings right past the camera mid-section
    const orbit = new Group();
    const g1 = new Group(), g2 = new Group(), g3 = new Group();
    g1.add(new Mesh(new TorusGeometry(1.75, 0.09, 12, 120), blue));
    g2.add(new Mesh(new TorusGeometry(1.4, 0.075, 12, 100), blue));
    g3.add(new Mesh(new TorusGeometry(1.08, 0.065, 12, 90), blue));
    const knot = new Mesh(new TorusKnotGeometry(0.46, 0.15, 140, 18, 2, 3), blue);
    g3.add(knot); g2.add(g3); g1.add(g2); orbit.add(g1);
    const beam = new Mesh(new CylinderGeometry(0.05, 0.05, 5.4, 10), deep);
    beam.rotation.z = Math.PI / 2;
    orbit.add(beam);
    for (const sgn of [-1, 1]) {
      const end = new Mesh(new SphereGeometry(0.2, 20, 14), blue);
      end.position.x = sgn * 2.7;
      orbit.add(end);
    }
    this.rings = [g1, g2, g3, knot];
    add(orbit, { c0: 0.5, c1: 0.86, from: [-5.5, 3.2, -2], via: [0.4, 0.2, 3.0], to: [5.8, -3.0, -1], scale: 0.9, spin: [0.5, 1.6, 0.4], base: [0.4, -0.5, 0.2] });

    // phone: the small first arrival, drifting down from beside the title
    const phone = new Group();
    phone.add(new Mesh(new RoundedBoxGeometry(0.62, 1.22, 0.08, 3, 0.08), bright));
    const ps = new Mesh(new PlaneGeometry(0.52, 1.08), screenMat);
    ps.position.z = 0.045;
    phone.add(ps);
    add(phone, { c0: 0.18, c1: 0.55, from: [-0.9, 2.9, 0.5], to: [2.2, -0.6, 0.8], scale: 0.55, spin: [0.4, 1.5, 0.5], base: [0.3, 0.2, 0.6] });

    // laptop (web)
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
    add(laptop, { c0: 0.4, c1: 0.7, from: [5.6, -3.4, -1.5], to: [-5.0, 2.8, -2.5], scale: 0.85, spin: [0.9, 1.3, 0.4], base: [0.5, 0.6, 0] });

    // gear (CRM workflows)
    add(new Mesh(gearGeometry(), blue), { c0: 0.48, c1: 0.78, from: [-6.0, -1.0, -2.0], to: [5.6, 2.4, 0.0], scale: 0.8, spin: [0.4, 0.8, 2.2], base: [0.6, 0.4, 0] });

    // cloud (infrastructure)
    const cloud = new Group();
    for (const [x, y, rr] of [[-0.55, -0.05, 0.42], [0, 0.18, 0.58], [0.55, -0.02, 0.45], [0.22, -0.18, 0.4], [-0.25, -0.2, 0.38]]) {
      const m = new Mesh(new SphereGeometry(rr, 20, 14), blue);
      m.position.set(x, y, 0);
      m.scale.z = 0.7;
      cloud.add(m);
    }
    add(cloud, { c0: 0.58, c1: 0.88, from: [5.8, 2.6, -2.5], to: [-5.6, -2.8, -1.0], scale: 0.95, spin: [0.2, 0.9, 0.3], base: [0, 0, 0] });

    // magnifier (SEO)
    const mag = new Group();
    mag.add(new Mesh(new TorusGeometry(0.42, 0.08, 10, 40), blue));
    const lens = new Mesh(new CylinderGeometry(0.38, 0.38, 0.03, 32), new MeshBasicMaterial({ color: 0x62c1d4, transparent: true, opacity: 0.3 }));
    lens.rotation.x = Math.PI / 2;
    mag.add(lens);
    const handle = new Mesh(new CylinderGeometry(0.07, 0.09, 0.9, 12), deep);
    handle.position.set(0.52, -0.52, 0);
    handle.rotation.z = Math.PI / 4;
    mag.add(handle);
    add(mag, { c0: 0.66, c1: 0.96, from: [-4.8, -3.8, 0.3], to: [3.8, 3.8, -1.2], scale: 0.9, spin: [1.1, 0.7, 1.4], base: [0.2, 0.5, 0.3] });

    // megaphone (performance marketing)
    const mega = new Group();
    const horn = new Mesh(new ConeGeometry(0.5, 1.1, 24, 1, true), blueTwoSided);
    horn.rotation.z = -Math.PI / 2;
    mega.add(horn);
    const grip = new Mesh(new CylinderGeometry(0.08, 0.08, 0.45, 10), deep);
    grip.position.set(-0.25, -0.3, 0);
    mega.add(grip);
    add(mega, { c0: 0.74, c1: 1.04, from: [6.0, 0.8, -1.0], to: [-4.0, -4.4, 0.5], scale: 0.85, spin: [0.8, 1.5, 0.6], base: [0.3, 0.8, 0] });

    // papers: two big sheets sweep past right in front of the camera, a few small ones further back
    const paperMat = (i) => celMaterial({ rim: '#efede6', lit: '#efede6', mid: '#efede6', shade: '#cfccc4', cut: [0.9, 0.5, 0.2], map: scribbleTexture(i), side: DoubleSide });
    const big = crumpledSheet(0.62, 0.82);
    add(new Mesh(big, paperMat(1)), {
      c0: 0.3, c1: 0.44, from: [-4.2, -2.6, 3.5], via: [-0.2, -0.4, 4.8], to: [3.8, 1.4, 3.0], scale: 1.2, spin: [1.6, 2.2, 0.9], base: [0.3, 0.6, 0.2], paper: true,
    });
    add(new Mesh(big, paperMat(2)), {
      c0: 0.46, c1: 0.58, from: [4.6, 3.6, 2.5], via: [2.8, 2.6, 4.0], to: [1.4, 2.2, 4.6], scale: 1.1, spin: [1.2, 1.8, 1.4], base: [1.2, 0.2, 0.8], paper: true,
    });
    const small = crumpledSheet(0.62, 0.82);
    for (let i = 0; i < 5; i++) {
      const c0 = 0.35 + i * 0.12;
      const lane = (i / 4) * 2 - 1;
      add(new Mesh(small, paperMat(i + 3)), {
        c0, c1: c0 + 0.3,
        from: [6.2 - (i % 3), -4.2 + lane * 1.2, -2 + (i % 3) * 1.0],
        to: [-6.2 + (i % 2) * 2, 4.0 + lane * 1.0, -1.5 + (i % 3) * 0.9],
        scale: 0.5 + (i % 3) * 0.1, spin: [2.4 + i * 0.2, 1.8, 2.9 - i * 0.15], base: [i, i * 2, i * 0.5], paper: true,
      });
    }
    this.props = props;

    // white flakes: irregular chips tumbling slowly through the stage
    const FLAKES = 40;
    const flakes = new InstancedMesh(flakeGeometry(), new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide }), FLAKES);
    let seed = 11;
    const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    this.flakeData = Array.from({ length: FLAKES }, () => ({
      x: (rnd() - 0.5) * 13, y: (rnd() - 0.5) * 7.6, z: rnd() * 5 - 3,
      s: 0.035 + rnd() * 0.05, sy: 0.35 + rnd() * 0.9,
      axis: new Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(),
      spin: 0.6 + rnd() * 1.6, phase: rnd() * 6.28,
    }));
    this.flakes = flakes;
    this.dummy = new Object3D();
    scene.add(flakes);

    this.frontUsed = false;
    this.resize();
  }

  resize() {
    if (this.failed) return;
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
    for (const r of [this.renderer, this.front]) {
      if (!r) continue;
      r.setPixelRatio(dpr);
      r.setSize(w, h, false);
    }
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.narrow = w / h < 0.9;
  }

  setProgress(p) { this.progress = p; }

  // upload textures and compile every program off the scroll path (parallel compile where supported),
  // then draw one hidden frame so the first visible one costs no more than any other
  warm() {
    if (this.failed) return Promise.resolve();
    const { scene, camera, props } = this;
    props.forEach((p) => { p.obj.visible = true; });
    camera.layers.enableAll();
    const jobs = [this.renderer, this.front].filter(Boolean).map((r) => {
      scene.traverse((o) => {
        const u = o.material && o.material.uniforms;
        if (u && u.uMap && u.uMap.value) r.initTexture(u.uMap.value);
      });
      return r.compileAsync(scene, camera).then(() => r.render(scene, camera), () => r.render(scene, camera));
    });
    const done = () => {
      props.forEach((p) => { p.obj.visible = false; });
      camera.layers.set(0);
      for (const r of [this.renderer, this.front]) if (r) r.clear();
    };
    return Promise.all(jobs).then(done, done);
  }

  render(time) {
    if (this.failed || !this.visible) return;
    const p = this.progress;
    const xs = this.narrow ? 0.55 : 1;
    let anyFront = false;
    for (const pr of this.props) {
      const k = (p - pr.c0) / (pr.c1 - pr.c0);
      const on = k > -0.02 && k < 1.02;
      pr.obj.visible = on;
      if (!on) continue;
      // quadratic path through `via` (default: a gentle bow above the straight line), constant speed
      const a = pr.from, b = pr.to;
      const v0 = pr.via ? pr.via[0] : (a[0] + b[0]) / 2 + 0.7;
      const v1 = pr.via ? pr.via[1] : (a[1] + b[1]) / 2 + 0.5;
      const v2 = pr.via ? pr.via[2] : (a[2] + b[2]) / 2;
      const u = 1 - k;
      const x = u * u * a[0] + 2 * u * k * v0 + k * k * b[0];
      const y = u * u * a[1] + 2 * u * k * v1 + k * k * b[1] + Math.sin(time * 0.6 + pr.base[0]) * 0.05;
      const z = u * u * a[2] + 2 * u * k * v2 + k * k * b[2];
      pr.obj.position.set(x * xs, y, z);
      const tt = pr.paper ? time * 0.25 : time * 0.1;
      pr.obj.rotation.set(pr.base[0] + pr.spin[0] * (k + tt), pr.base[1] + pr.spin[1] * (k + tt), pr.base[2] + pr.spin[2] * (k + tt) * 0.6);
      pr.obj.scale.setScalar(pr.scale * (this.narrow ? 0.75 : 1));
      // close to the camera: draw above the cards and the title
      const layer = this.front && z > FRONT_Z ? 1 : 0;
      if (layer !== pr.layer) { pr.layer = layer; setLayer(pr.obj, layer); }
      if (layer) anyFront = true;
    }
    const [g1, g2, g3, knot] = this.rings;
    g1.rotation.y = p * Math.PI * 1.6 + time * 0.18;
    g2.rotation.x = p * Math.PI * 2.2 + time * 0.23;
    g3.rotation.y = -p * Math.PI * 2.8 - time * 0.3;
    knot.rotation.z = time * 0.4 + p * 4.0;

    const { flakes, flakeData, dummy } = this;
    for (let i = 0; i < flakeData.length; i++) {
      const f = flakeData[i];
      let fy = f.y - 0.12 * time - 1.2 * p;
      fy = ((fy + 3.8) % 7.6 + 7.6) % 7.6 - 3.8;
      dummy.position.set((f.x + Math.sin(time * 0.3 + f.phase) * 0.15) * xs, fy, f.z);
      dummy.quaternion.setFromAxisAngle(f.axis, f.phase + time * f.spin);
      dummy.scale.set(f.s, f.s * f.sy, f.s);
      dummy.updateMatrix();
      flakes.setMatrixAt(i, dummy.matrix);
    }
    flakes.instanceMatrix.needsUpdate = true;

    const { scene, camera } = this;
    camera.layers.set(0);
    this.renderer.render(scene, camera);
    if (this.front) {
      if (anyFront) {
        camera.layers.set(1);
        this.front.render(scene, camera);
        camera.layers.set(0);
        this.frontUsed = true;
      } else if (this.frontUsed) {
        this.front.clear();
        this.frontUsed = false;
      }
    }
  }
}
