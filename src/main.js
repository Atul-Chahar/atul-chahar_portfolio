import './styles/main.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { createThread } from './ui/thread.js';
import { setupWork, setupCases } from './ui/work.js';
import {
  setupWords, setupTitles, setupMarquee, setupRooms, setupPreview,
  setupCursor, setupMagnetic, setupTheme, setupNav, setupContact,
} from './ui/extras.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
// ?motion=full previews the full motion even when the OS asks for less.
const forceFull = new URLSearchParams(location.search).get('motion') === 'full';
const reduced = !forceFull && matchMedia('(prefers-reduced-motion: reduce)').matches;
if (forceFull) root.classList.add('motion-full');
if (reduced) root.classList.add('no-motion');

const hasWebGL = (() => {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); }
  catch { return false; }
})();

/* Shared motion state read by the shaders and the marquee. */
const motion = { velX: 0, velY: 0 };

/* ---------- Smooth scroll on GSAP's ticker ---------- */
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
const scrollY = () => (lenis ? lenis.scroll : window.scrollY);
if (import.meta.env.DEV) { window.__lenis = lenis; window.__st = ScrollTrigger; }

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = id.length > 1 ? document.querySelector(id) : null;
    if (!target) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else target.scrollIntoView();
    if (link.classList.contains('skip')) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
  });
});

async function boot() {
  await document.fonts.ready;
  const page = document.querySelector('[data-page]');

  /* ---------- WebGL layers, loaded on demand ---------- */
  let hero = null, media = null;
  if (hasWebGL) {
    const [{ createHero }, { createMedia }] = await Promise.all([import('./gl/hero.js'), import('./gl/media.js')]);
    hero = createHero(document.querySelector('[data-hero-gl]'), { reduced });
    if (hero) root.classList.add('gl-hero');
    if (!reduced) {
      media = createMedia(document.querySelector('[data-gl-media]'), { motion });
      if (media) root.classList.add('gl-on');
    }
  }

  /* ---------- Sections ---------- */
  setupWork({ motion, reduced });
  setupCases({ lenis, reduced });
  setupWords(reduced);
  setupTitles(reduced);
  setupRooms(reduced);
  setupTheme();
  setupContact(reduced);
  setupMagnetic(reduced);
  const tickMarquee = setupMarquee({ motion, reduced });
  const tickPreview = setupPreview();
  const tickCursor = setupCursor();
  const tickNav = setupNav(scrollY);

  const thread = createThread({ page, scrollY });
  thread.build();

  /* ---------- One loop for everything ---------- */
  let lastY = scrollY();
  gsap.ticker.add((time, deltaMs) => {
    const dt = Math.min(deltaMs / 1000, 0.05);
    const y = scrollY();
    const rawVY = (y - lastY);
    lastY = y;
    motion.velY += (gsap.utils.clamp(-60, 60, rawVY) - motion.velY) * 0.2;
    motion.velX *= 0.92;

    if (hero) {
      hero.setProgress(y / window.innerHeight);
      hero.render(dt);
    }
    media?.render(dt);
    thread.draw();
    tickMarquee?.(dt);
    tickPreview?.();
    tickCursor?.();
    tickNav();
  });

  /* ---------- Rebuild on layout changes ---------- */
  let queued = false;
  const rebuild = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; ScrollTrigger.refresh(); thread.build(); });
  };
  window.addEventListener('resize', rebuild);
  window.addEventListener('load', rebuild);
  ScrollTrigger.addEventListener('refresh', () => thread.build());

  /* ---------- Intro: the single orchestrated moment ---------- */
  const claim = document.querySelector('[data-hero-claim]');
  const metas = document.querySelectorAll('[data-hero-meta]');
  const glCanvas = document.querySelector('[data-hero-gl]');
  if (reduced) {
    root.classList.remove('is-loading');
    return;
  }
  const split = SplitText.create(claim, { type: 'lines', mask: 'lines' });
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from(glCanvas, { opacity: 0, duration: 1.6, ease: 'power2.out' }, 0);
  if (hero) {
    tl.to(hero.intro, { scale: 1, duration: 2.2 }, 0.2)
      .to(hero.intro, { particles: 1, duration: 2.4, ease: 'power2.out' }, 0.5);
  }
  tl.from(split.lines, { yPercent: 115, duration: 1.3, stagger: 0.1 }, 0.6)
    .from(metas, { autoAlpha: 0, y: 14, duration: 1, stagger: 0.08 }, 1.0);
  root.classList.remove('is-loading');
  tl.then(() => { split.revert(); thread.build(); });
}

boot();
