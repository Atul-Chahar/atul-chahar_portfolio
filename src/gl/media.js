import * as THREE from 'three';
import { gsap } from 'gsap';

/*
  One fixed WebGL canvas redraws every <img data-gl> in place. The real
  <img> stays in the DOM for layout, loading and screen readers; it is
  only made transparent once its texture is on the GPU.

  Each plane gets: a noisy-edged reveal the first time it enters view, a
  bend that follows scroll speed, an RGB split and slow zoom on hover,
  and for data-effect="halftone" a print-like dot screen that resolves
  into the real photo around the pointer.
*/

const vertex = /* glsl */ `
  uniform vec2 uVel;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    float PI = 3.14159265;
    p.y += sin(uv.x * PI) * uVel.y * 0.0016;
    p.x += sin(uv.y * PI) * uVel.x * 0.0016;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragment = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2 uPlane, uImage, uMouse;
  uniform float uHover, uReveal, uTime, uRadius, uEffect, uDark, uSpeed;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
  }
  vec2 cover(vec2 uv) {
    float rp = uPlane.x / uPlane.y, ri = uImage.x / uImage.y;
    vec2 s = rp > ri ? vec2(1.0, ri / rp) : vec2(rp / ri, 1.0);
    return (uv - 0.5) * s + 0.5;
  }
  float roundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 uv = vUv;

    // Reveal: a wipe from the bottom with a torn, noisy edge.
    float n = noise(uv * vec2(5.0, 2.5) + uTime * 0.15);
    float edge = uReveal * 1.35 - (1.0 - uv.y) - n * 0.25;
    float mask = smoothstep(0.0, 0.06, edge);

    vec2 z = (uv - 0.5) * (1.0 - 0.07 * uHover) + 0.5;
    z.y -= (1.0 - uReveal) * 0.18 * (1.0 - uv.y);
    vec2 c = cover(z);

    float shift = 0.002 * uHover + min(abs(uSpeed) * 0.00012, 0.012);
    vec3 col;
    col.r = texture2D(uTex, c + vec2(shift, 0.0)).r;
    col.g = texture2D(uTex, c).g;
    col.b = texture2D(uTex, c - vec2(shift, 0.0)).b;

    if (uEffect > 0.5) {
      vec2 px = uv * uPlane;
      float cell = 6.0;
      vec2 g = mod(px, cell) - cell * 0.5;
      float lum = dot(col, vec3(0.299, 0.587, 0.114));
      float amount = mix(1.0 - lum, lum, uDark);
      float r = cell * 0.62 * sqrt(clamp(amount, 0.0, 1.0));
      float dotm = 1.0 - smoothstep(r - 0.75, r + 0.75, length(g));
      vec3 ground = mix(vec3(0.910, 0.918, 0.894), vec3(0.027, 0.043, 0.149), uDark);
      vec3 ink = mix(vec3(0.075, 0.094, 0.141), vec3(0.329, 0.408, 1.0), uDark);
      vec3 tone = mix(ground, ink, dotm);
      float d = length((uv - uMouse) * uPlane) / max(uPlane.x, uPlane.y);
      float clear = smoothstep(0.34, 0.08, d) * uHover;
      col = mix(tone, col, clear);
    }

    vec2 p = (uv - 0.5) * uPlane;
    float sd = roundBox(p, uPlane * 0.5, uRadius);
    float aa = 1.0 - smoothstep(-1.0, 0.5, sd);
    gl_FragColor = vec4(col, mask * aa);
  }
`;

export function createMedia(canvas, { motion, q }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: q.aa, premultipliedAlpha: false, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
  let dprCap = q.mediaDpr;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // pass sRGB texels straight through
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1000, 1000);
  const geometry = new THREE.PlaneGeometry(1, 1, 16, 16);
  const anisotropy = Math.min(q.anisotropy, renderer.capabilities.getMaxAnisotropy());

  // The canvas is sized to the large viewport (CSS 100lvh), so the phone
  // address bar sliding in and out doesn't resize the drawing buffer.
  let W = 0, H = 0;
  function resize(force = false) {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    if (!force && w === W && h === H) return;
    W = w; H = h;
    renderer.setSize(W, H, false);
    camera.left = -W / 2; camera.right = W / 2; camera.top = H / 2; camera.bottom = -H / 2;
    camera.updateProjectionMatrix();
    dirty = true;
  }
  let dirty = true;
  resize(true);
  window.addEventListener('resize', () => resize());

  const makeMaterial = (uniforms) => new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: fragment, transparent: true });
  const uniformsFor = (tex, img) => ({
    uTex: { value: tex },
    uPlane: { value: new THREE.Vector2(1, 1) },
    uImage: { value: new THREE.Vector2(tex.image?.width || 1, tex.image?.height || 1) },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uHover: { value: 0 },
    uReveal: { value: 0 },
    uTime: { value: 0 },
    uRadius: { value: img ? parseFloat(getComputedStyle(img).borderTopLeftRadius) || 0 : 0 },
    uEffect: { value: img?.dataset.effect === 'halftone' ? 1 : 0 },
    uDark: { value: img?.closest('[data-tone="dark"]') ? 1 : 0 },
    uVel: { value: new THREE.Vector2() },
    uSpeed: { value: 0 },
  });

  // Compile the one shader up front so the first image doesn't hitch.
  const warmTex = new THREE.DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1);
  warmTex.needsUpdate = true;
  const warm = new THREE.Mesh(geometry, makeMaterial(uniformsFor(warmTex, null)));
  scene.add(warm);
  const ready = renderer.compileAsync(scene, camera).catch(() => {}).then(() => { scene.remove(warm); });

  const items = [];
  const mouse = { x: -1e4, y: -1e4 };
  window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  // Decode off the main thread, then upload at most one texture a frame.
  const uploads = [];
  async function add(img) {
    let source = img, flipY = true;
    if ('createImageBitmap' in window) {
      try {
        source = await createImageBitmap(img, { imageOrientation: 'flipY' });
        flipY = false;
      } catch { source = img; flipY = true; }
    }
    const tex = new THREE.Texture(source);
    tex.flipY = flipY;
    tex.colorSpace = THREE.NoColorSpace;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.anisotropy = anisotropy;
    tex.needsUpdate = true;
    uploads.push({ img, tex });
  }
  function flushUpload() {
    const job = uploads.shift();
    if (!job) return;
    const { img, tex } = job;
    renderer.initTexture(tex);
    const uniforms = uniformsFor(tex, img);
    const mesh = new THREE.Mesh(geometry, makeMaterial(uniforms));
    mesh.visible = false;
    scene.add(mesh);
    const item = { img, mesh, uniforms, revealed: false, hover: 0, near: true };
    items.push(item);
    nearIO.observe(img);
    img.classList.add('is-gl');
    dirty = true;
  }

  // Only images near the viewport are measured each frame.
  const byImg = new Map();
  const nearIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const it = byImg.get(e.target) || items.find((x) => x.img === e.target);
      if (!it) continue;
      byImg.set(e.target, it);
      it.near = e.isIntersecting;
      if (!it.near && it.mesh.visible) { it.mesh.visible = false; dirty = true; }
    }
  }, { rootMargin: '35% 35% 35% 35%' });

  // Fetch and decode images as they approach the viewport.
  const loadIO = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      loadIO.unobserve(e.target);
      load(e.target);
    }
  }, { rootMargin: '80% 80% 80% 80%' });
  const pending = new Set();
  function load(img) {
    if (!pending.has(img)) return;
    pending.delete(img);
    img.loading = 'eager';
    // createImageBitmap decodes on its own; decoding the <img> too doubles the work.
    const go = () => { if (img.naturalWidth) add(img); };
    if (img.complete && img.naturalWidth) go();
    else img.addEventListener('load', go, { once: true });
  }
  document.querySelectorAll('img[data-gl]').forEach((img) => { pending.add(img); loadIO.observe(img); });

  let time = 0;
  let last = '';
  function render(dt) {
    time += dt;
    flushUpload();
    const vx = motion.velX, vy = motion.velY;
    const speed = Math.hypot(vx, vy);
    let sig = `${Math.round(speed * 50)}:`;
    let animating = false;

    for (const it of items) {
      if (!it.near) continue;
      const r = it.img.getBoundingClientRect();
      const on = r.width > 0 && r.bottom > -40 && r.top < H + 40 && r.right > -40 && r.left < W + 40;
      if (it.mesh.visible !== on) { it.mesh.visible = on; dirty = true; }
      if (!on) continue;

      it.mesh.position.set(r.left + r.width / 2 - W / 2, H / 2 - (r.top + r.height / 2), 0);
      it.mesh.scale.set(r.width, r.height, 1);
      const u = it.uniforms;
      u.uPlane.value.set(r.width, r.height);
      u.uTime.value = time;
      u.uVel.value.set(vx, vy);
      u.uSpeed.value = speed;

      const inside = mouse.x >= r.left && mouse.x <= r.right && mouse.y >= r.top && mouse.y <= r.bottom;
      const goal = inside ? 1 : 0;
      it.hover += (goal - it.hover) * 0.08;
      if (Math.abs(goal - it.hover) < 0.002) it.hover = goal;
      u.uHover.value = it.hover;
      if (inside) u.uMouse.value.set((mouse.x - r.left) / r.width, 1 - (mouse.y - r.top) / r.height);

      if (!it.revealed && r.top < H * 0.92 && r.bottom > 0) {
        it.revealed = true;
        gsap.to(u.uReveal, { value: 1, duration: 1.8, ease: 'expo.out', delay: Math.random() * 0.15 });
      }
      if (u.uReveal.value < 1 || (it.hover > 0 && it.hover < 1) || (inside && it.uniforms.uEffect.value > 0.5)) animating = true;
      sig += `${r.left | 0},${r.top | 0},${r.width | 0};`;
    }

    // Nothing moved: the canvas keeps showing the last frame.
    if (!dirty && !animating && sig === last) return;
    last = sig;
    dirty = false;
    renderer.render(scene, camera);
  }

  return {
    ready,
    render,
    resize,
    setDpr(cap) {
      dprCap = Math.min(dprCap, cap);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
      renderer.setSize(W, H, false);
      dirty = true;
    },
    // Start fetching the rest once the intro is over.
    preloadAll() { pending.forEach((img) => { loadIO.unobserve(img); load(img); }); },
  };
}
