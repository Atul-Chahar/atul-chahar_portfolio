import './styles/main.css';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
// ?motion=full previews the full motion even when the OS asks for less.
const forceFull = new URLSearchParams(location.search).get('motion') === 'full';
const reduced = () => !forceFull && reduceMotion.matches;
if (forceFull) root.classList.add('motion-full');

/* ---------------------------------------------------------------
   Smooth scroll: Lenis driven by GSAP's ticker so ScrollTrigger and
   the thread read the same scroll value on the same frame.
---------------------------------------------------------------- */
let lenis = null;
if (!reduced()) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

const scrollY = () => (lenis ? lenis.scroll : window.scrollY);

// In-page links go through Lenis so they glide instead of jumping.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    const target = id.length > 1 ? document.querySelector(id) : null;
    if (!target) return;
    event.preventDefault();
    if (lenis) lenis.scrollTo(target, { duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) });
    else target.scrollIntoView();
    history.replaceState(null, '', id);
    if (link.classList.contains('skip')) target.setAttribute('tabindex', '-1'), target.focus({ preventScroll: true });
  });
});

/* ---------------------------------------------------------------
   The thread: one cobalt line that starts at the hero's full stop,
   runs down the gutter through every node, and ends in Contact.
   Its tip follows a fixed point in the viewport, so it reads as
   being drawn by the scroll, not by a timer.
---------------------------------------------------------------- */
const page = document.querySelector('[data-page]');
const svg = document.querySelector('[data-thread]');
const line = document.querySelector('[data-thread-line]');
const ghost = document.querySelector('[data-thread-ghost]');
// Looked up on demand: SplitText.revert() replaces the headline's markup.
const startEl = () => document.querySelector('[data-stop="start"]');
const endEl = document.querySelector('[data-stop="end"]');
const nodeHosts = [...document.querySelectorAll('[data-stop="node"]')];

nodeHosts.forEach((host) => {
  const dot = document.createElement('span');
  dot.className = 'node';
  dot.setAttribute('aria-hidden', 'true');
  host.prepend(dot);
});

const TIP = 0.62; // the tip sits at 62% of the viewport height
const thread = { length: 0, ys: [], lens: [], nodes: [], drawn: -1 };

function relRect(el) {
  const r = el.getBoundingClientRect();
  const p = page.getBoundingClientRect();
  return { x: r.left - p.left, y: r.top - p.top, w: r.width, h: r.height };
}

function buildThread() {
  const pageRect = page.getBoundingClientRect();
  svg.setAttribute('viewBox', `0 0 ${pageRect.width} ${pageRect.height}`);

  const s = relRect(startEl());
  const start = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.78 };

  const nodes = nodeHosts.map((host) => {
    const r = relRect(host.querySelector('.node'));
    return { host, x: r.x + r.w / 2, y: r.y + r.h / 2 };
  });
  const e = relRect(endEl);
  const end = { x: e.x, y: e.y };

  // Start to first node: a long, unhurried S-curve out of the headline.
  const first = nodes[0];
  const dy = first.y - start.y;
  let d = `M ${start.x} ${start.y} C ${start.x} ${start.y + dy * 0.62}, ${first.x} ${first.y - dy * 0.5}, ${first.x} ${first.y}`;
  // Then straight down the gutter, node to node, and into Contact.
  for (let i = 1; i < nodes.length; i++) d += ` L ${nodes[i].x} ${nodes[i].y}`;
  d += ` L ${end.x} ${end.y}`;

  line.setAttribute('d', d);
  ghost.setAttribute('d', d);

  const length = line.getTotalLength();
  line.style.strokeDasharray = `${length} ${length}`;

  // Length-to-height lookup so the tip can be placed by y.
  const samples = Math.min(1200, Math.max(300, Math.round(length / 8)));
  const ys = new Float32Array(samples + 1);
  const lens = new Float32Array(samples + 1);
  let maxY = -Infinity;
  for (let i = 0; i <= samples; i++) {
    const l = (length * i) / samples;
    maxY = Math.max(maxY, line.getPointAtLength(l).y); // keep it monotonic
    ys[i] = maxY;
    lens[i] = l;
  }

  Object.assign(thread, { length, ys, lens, nodes, drawn: -1 });
  drawThread(true);
}

function lengthAtY(y) {
  const { ys, lens } = thread;
  if (y <= ys[0]) return 0;
  if (y >= ys[ys.length - 1]) return thread.length;
  let lo = 0, hi = ys.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (ys[mid] < y) lo = mid; else hi = mid;
  }
  const t = (y - ys[lo]) / (ys[hi] - ys[lo] || 1);
  return lens[lo] + (lens[hi] - lens[lo]) * t;
}

function drawThread(force = false) {
  if (!thread.length) return;
  const pageTop = page.getBoundingClientRect().top + scrollY();
  // Scroll-linked, never autonomous, so it stays on with reduced motion.
  const tipY = scrollY() + window.innerHeight * TIP - pageTop;
  const drawn = lengthAtY(tipY);
  if (!force && Math.abs(drawn - thread.drawn) < 0.25) return;
  thread.drawn = drawn;
  line.style.strokeDashoffset = `${thread.length - drawn}`;
  for (const n of thread.nodes) n.host.classList.toggle('is-reached', tipY >= n.y);
}

let rebuildQueued = false;
function queueRebuild() {
  if (rebuildQueued) return;
  rebuildQueued = true;
  requestAnimationFrame(() => {
    rebuildQueued = false;
    buildThread();
    ScrollTrigger.refresh();
  });
}

/* ---------------------------------------------------------------
   Contact: the thread ends by flooding the section with cobalt.
---------------------------------------------------------------- */
function setupContact() {
  const fill = document.querySelector('[data-contact-fill]');
  const inner = document.querySelector('.contact__inner');
  if (reduced()) return;
  gsap.fromTo(fill, { scaleY: 0 }, {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '.contact', start: 'top 62%', end: 'top 8%', scrub: true },
  });
  gsap.fromTo(inner, { autoAlpha: 0, y: 24 }, {
    autoAlpha: 1, y: 0, ease: 'none',
    scrollTrigger: { trigger: '.contact', start: 'top 30%', end: 'top 0%', scrub: true },
  });
}

/* ---------------------------------------------------------------
   Nav: hides while reading down, returns on the way up, and turns
   paper-on-cobalt once Contact sits underneath it.
---------------------------------------------------------------- */
function setupNav() {
  const nav = document.querySelector('[data-nav]');
  const contact = document.querySelector('.contact');
  let last = 0;
  const update = () => {
    const y = scrollY();
    nav.classList.toggle('is-scrolled', y > 8);
    if (Math.abs(y - last) > 6) {
      nav.classList.toggle('is-hidden', y > last && y > 240 && !nav.contains(document.activeElement));
      last = y;
    }
    nav.classList.toggle('is-on-blue', contact.getBoundingClientRect().top <= nav.offsetHeight);
  };
  if (lenis) lenis.on('scroll', update); else window.addEventListener('scroll', update, { passive: true });
  nav.addEventListener('focusin', () => nav.classList.remove('is-hidden'));
  update();
}

/* ---------------------------------------------------------------
   Project rows: one open at a time, keyboard and screen-reader
   friendly. Closed panels are inert so focus never lands inside.
---------------------------------------------------------------- */
function setupRows() {
  const rows = [...document.querySelectorAll('[data-row]')];
  const setOpen = (row, open) => {
    const btn = row.querySelector('.row__toggle');
    const panel = row.querySelector('.row__panel');
    row.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    panel.inert = !open;
  };
  rows.forEach((row) => {
    setOpen(row, false);
    row.querySelector('.row__toggle').addEventListener('click', () => {
      const open = !row.classList.contains('is-open');
      rows.forEach((r) => r !== row && r.classList.contains('is-open') && setOpen(r, false));
      setOpen(row, open);
    });
    // Keep the thread aligned while a panel grows or shrinks.
    row.querySelector('.row__panel').addEventListener('transitionend', (e) => {
      if (e.propertyName === 'grid-template-rows') queueRebuild();
    });
  });
}

/* ---------------------------------------------------------------
   Load: the single orchestrated moment. Headline lines rise out of
   their masks, the full stop lands last, then the supporting copy.
---------------------------------------------------------------- */
function intro() {
  const title = document.querySelector('[data-hero-title]');
  const foot = document.querySelector('[data-hero-foot]');
  if (reduced()) { root.classList.remove('is-loading'); return Promise.resolve(); }

  const split = SplitText.create(title, { type: 'lines', mask: 'lines', linesClass: 'line' });
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from(split.lines, { yPercent: 110, duration: 1.25, stagger: 0.09 })
    .from(startEl(), { scale: 0, transformOrigin: '50% 80%', duration: 0.6, ease: 'back.out(2)' }, '-=0.55')
    .from(foot, { autoAlpha: 0, y: 14, duration: 0.9 }, '-=0.5');
  root.classList.remove('is-loading'); // initial states are already applied
  return tl.then(() => split.revert());
}

/* ---------------------------------------------------------------
   Boot
---------------------------------------------------------------- */
async function boot() {
  await document.fonts.ready;
  setupRows();
  setupNav();
  buildThread();
  setupContact();

  gsap.ticker.add(() => drawThread());
  new ResizeObserver(queueRebuild).observe(page);
  window.addEventListener('resize', queueRebuild);

  await intro();
  queueRebuild(); // line breaks are final once the split is reverted
}

boot();
reduceMotion.addEventListener('change', () => location.reload());
