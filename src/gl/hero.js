import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/*
  Hero scene: the full stop from "asks before it acts." becomes a glass
  sphere with dispersion. It sits inside a chrome gate and refracts the
  name, which is drawn into the scene so the glass can bend it.
  Particles are proposals drifting toward the gate; near it they turn
  cobalt. The pointer moves the lens so you can read through it.
*/

const NIGHT = '#070b26';
const PAPER = '#e8eae4';
const MIST = '#9aa3c7';
const COBALT = '#5468ff';

export function createHero(canvas, { reduced = false, q } = {}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: q.aa, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
  const small = matchMedia('(max-width: 900px)').matches;
  let dprCap = Math.min(q.dpr, small ? 1.5 : 2);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
  // The glass refracts a copy of the scene; that copy can be cheaper.
  renderer.transmissionResolutionScale = q.transmission;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(NIGHT, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0, 12);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  /* ---------- Backdrop: the name, drawn on a canvas ---------- */
  const BACK_Z = -5;
  const OVERSCAN = 1.18;
  const textCanvas = document.createElement('canvas');
  const ctx = textCanvas.getContext('2d');
  const textTex = new THREE.CanvasTexture(textCanvas);
  textTex.colorSpace = THREE.SRGBColorSpace;
  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: textTex, toneMapped: false })
  );
  backdrop.position.z = BACK_Z;
  scene.add(backdrop);

  function drawName(w, h) {
    const dpr = Math.min(window.devicePixelRatio, 2);
    const cw = Math.min(3200, Math.round(w * OVERSCAN * dpr));
    const ch = Math.round(cw * (h / w));
    if (textCanvas.width !== cw || textCanvas.height !== ch) {
      textCanvas.width = cw;
      textCanvas.height = ch;
      textTex.dispose(); // reallocate the GPU texture at the new size
    }

    ctx.fillStyle = NIGHT;
    ctx.fillRect(0, 0, cw, ch);

    // A faint dot grid gives the glass something to bend.
    const step = Math.round(30 * dpr * OVERSCAN);
    ctx.fillStyle = 'rgba(154, 163, 199, 0.16)';
    for (let y = step / 2; y < ch; y += step) {
      for (let x = step / 2; x < cw; x += step) ctx.fillRect(x, y, Math.max(1, dpr), Math.max(1, dpr));
    }

    // The name, set huge and tight.
    const size = Math.min(cw * (small ? 0.18 : 0.2), ch * 0.3);
    ctx.fillStyle = PAPER;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.font = `800 ${size}px "Schibsted Grotesk Variable", "Schibsted Grotesk", system-ui, sans-serif`;
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${-size * 0.06}px`;
    const cx = cw / 2;
    const top = ch * (small ? 0.36 : 0.4);
    ctx.fillText('Atul', cx, top);
    ctx.fillText('Chahar', cx, top + size * 0.84);
    textTex.needsUpdate = true;
  }

  /* ---------- The lens and its gate ---------- */
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0,
    transmission: 1,
    thickness: 3.2,
    ior: 1.32,
    dispersion: q.dispersion,
    iridescence: q.coat ? 0.18 : 0,
    iridescenceIOR: 1.2,
    clearcoat: q.coat ? 0.6 : 0,
    clearcoatRoughness: 0.02,
    specularIntensity: 0.6,
    attenuationColor: new THREE.Color('#c3ccff'),
    attenuationDistance: 8,
    envMapIntensity: 0.35,
  });
  const lens = new THREE.Mesh(new THREE.SphereGeometry(1.3, Math.min(q.segments, small ? 64 : 128), Math.min(q.segments, small ? 64 : 128)), glass);
  scene.add(lens);

  const chrome = new THREE.MeshStandardMaterial({ color: new THREE.Color('#7f8cff'), metalness: 1, roughness: 0.18, envMapIntensity: 1.4 });
  const gate = new THREE.Group();
  const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.035, q.coat ? 24 : 12, q.coat ? 220 : 140), chrome);
  const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.018, q.coat ? 16 : 8, q.coat ? 220 : 140), chrome);
  ringB.rotation.x = Math.PI / 2.4;
  gate.add(ringA, ringB);
  scene.add(gate);

  const rim = new THREE.PointLight(COBALT, 30, 20, 1.6);
  rim.position.set(-3, 2, -1);
  scene.add(rim);

  /* ---------- Proposals: particles drifting toward the gate ---------- */
  const COUNT = Math.min(q.particles, small ? 700 : 1800);
  const positions = new Float32Array(COUNT * 3);
  const seeds = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    positions[i * 3] = (Math.random() * 2 - 1) * 11;
    positions[i * 3 + 1] = (Math.random() * 2 - 1) * 6;
    positions[i * 3 + 2] = Math.random() * 5 - 3.5;
    seeds[i] = Math.random();
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
  const pMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uLens: { value: new THREE.Vector3() },
      uPixel: { value: renderer.getPixelRatio() },
      uA: { value: new THREE.Color(MIST) },
      uB: { value: new THREE.Color(COBALT) },
      uIntro: { value: 0 },
    },
    vertexShader: /* glsl */ `
      attribute float aSeed;
      uniform float uTime, uPixel, uIntro;
      uniform vec3 uLens;
      varying float vNear;
      varying float vSeed;
      void main() {
        vec3 p = position;
        float speed = 0.35 + aSeed * 0.55;
        p.x = mod(p.x + 11.0 + uTime * speed, 22.0) - 11.0;
        p.y += sin(uTime * 0.6 + aSeed * 12.0) * 0.25;
        // Pull toward the gate as they approach it.
        vec3 toLens = uLens - p;
        float d = length(toLens.xy);
        p.xy += normalize(toLens.xy + 1e-4) * smoothstep(5.0, 1.8, d) * 0.9;
        vNear = smoothstep(3.6, 1.6, d);
        vSeed = aSeed;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.6 + aSeed * 2.4 + vNear * 3.0) * uPixel * (10.0 / -mv.z) * uIntro;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform vec3 uA, uB;
      varying float vNear;
      varying float vSeed;
      void main() {
        float r = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, r);
        vec3 c = mix(uA, uB, vNear);
        gl_FragColor = vec4(c, a * (0.22 + vNear * 0.7) * (0.6 + vSeed * 0.4));
      }
    `,
  });
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  /* ---------- Layout ---------- */
  let width = 1, height = 1;
  const base = new THREE.Vector3();
  function resize(force = false) {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    // Phones fire resize when the address bar moves; the canvas is 100svh
    // so its size doesn't change and there is nothing to redo.
    if (!force && w === width && h === height) return;
    width = w; height = h;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    const dist = camera.position.z - BACK_Z;
    const vh = 2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    backdrop.scale.set(vh * camera.aspect * OVERSCAN, vh * OVERSCAN, 1);

    const s = small ? 0.55 : Math.min(1.1, 0.75 + camera.aspect * 0.18);
    lens.scale.setScalar(s * intro.scale);
    gate.scale.setScalar(s * intro.scale);
    base.set(small ? 0.3 : 0.9, small ? 0.72 : 0.85, 0);
    drawName(width, height);
  }

  /* ---------- Input ---------- */
  const pointer = new THREE.Vector2();
  const target = new THREE.Vector2();
  const onMove = (e) => {
    target.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  };
  window.addEventListener('pointermove', onMove, { passive: true });

  /* ---------- State ---------- */
  const intro = { scale: reduced ? 1 : 0.001, particles: reduced ? 1 : 0 };
  let progress = 0;
  let visible = true;
  let time = 0;
  const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: 0 });
  io.observe(canvas);

  function render(dt) {
    if (!visible) return;
    time += reduced ? 0 : dt;
    pointer.lerp(target, reduced ? 1 : 0.06);

    const s = (small ? 0.55 : Math.min(1.1, 0.75 + camera.aspect * 0.18)) * intro.scale * (1 + progress * 0.35);
    lens.scale.setScalar(s);
    gate.scale.setScalar(s * (1 + Math.sin(time * 0.8) * 0.01));

    const px = base.x + pointer.x * (small ? 0.6 : 1.6);
    const py = base.y + pointer.y * 0.7 + Math.sin(time * 0.9) * 0.08 - progress * 3.2;
    lens.position.set(px, py, 0.6);
    gate.position.copy(lens.position);
    gate.rotation.set(pointer.y * 0.5 + time * 0.12, pointer.x * 0.6 + time * 0.18, time * 0.05);
    ringB.rotation.z = time * 0.4;

    backdrop.position.y = progress * 1.6;
    camera.position.x = pointer.x * 0.25;
    camera.position.y = pointer.y * 0.15;
    camera.lookAt(0, 0, 0);

    pMat.uniforms.uTime.value = time;
    pMat.uniforms.uLens.value.copy(lens.position);
    pMat.uniforms.uIntro.value = intro.particles;

    renderer.render(scene, camera);
  }

  resize(true);
  const onResize = () => resize();
  window.addEventListener('resize', onResize);
  if (document.fonts) document.fonts.ready.then(() => drawName(width, height));

  // Compile every shader before the intro starts, off the main thread
  // where the browser supports it, so the first frames don't stall.
  const ready = renderer.compileAsync(scene, camera).catch(() => {});

  return {
    intro,
    ready,
    render,
    resize,
    setDpr(cap) {
      dprCap = Math.min(dprCap, cap);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
      renderer.setSize(width, height, false);
      pMat.uniforms.uPixel.value = renderer.getPixelRatio();
    },
    get dpr() { return renderer.getPixelRatio(); },
    setProgress(p) { progress = Math.max(0, Math.min(1.2, p)); },
    destroy() {
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    },
  };
}
