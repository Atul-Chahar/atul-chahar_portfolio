import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

/* Reading effect: words light up as the paragraph scrolls past. */
export function setupWords(reduced) {
  document.querySelectorAll('[data-words]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words', wordsClass: 'w' });
    if (reduced) return;
    gsap.to(split.words, {
      opacity: 1, ease: 'none', stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 48%', scrub: true },
    });
  });
}

/* Step titles rise out of masks, once, when they arrive. */
export function setupTitles(reduced) {
  if (reduced) return;
  document.querySelectorAll('[data-split]').forEach((el) => {
    const split = SplitText.create(el, { type: 'words', mask: 'words' });
    gsap.from(split.words, {
      yPercent: 110, duration: 1.2, ease: 'expo.out', stagger: 0.07,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
}

/* Marquee: drifts on its own, speeds up and skews with scroll. */
export function setupMarquee({ motion, reduced }) {
  const track = document.querySelector('[data-marquee-track]');
  if (!track) return null;
  track.innerHTML += track.innerHTML;
  if (reduced) return null;
  let x = 0, skew = 0;
  return (dt) => {
    const half = track.scrollWidth / 2;
    const v = motion.velY;
    x -= (60 + Math.abs(v) * 14) * dt * (v < -0.5 ? -1 : 1);
    if (x <= -half) x += half;
    if (x > 0) x -= half;
    skew += (gsap.utils.clamp(-10, 10, -v * 0.5) - skew) * 0.1;
    track.style.transform = `translate3d(${x}px,0,0) skewX(${skew}deg)`;
  };
}

/* The photo strip slides sideways as Record scrolls past. */
export function setupRooms(reduced) {
  const strip = document.querySelector('[data-rooms]');
  if (!strip || reduced) return;
  gsap.fromTo(strip, { x: () => window.innerWidth * 0.1 }, {
    x: () => -(strip.scrollWidth - strip.parentElement.clientWidth) - window.innerWidth * 0.05,
    ease: 'none',
    scrollTrigger: { trigger: strip, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
  });
}

/* A preview image follows the cursor over rows that have one. */
export function setupPreview() {
  const box = document.querySelector('[data-preview-float]');
  const img = box.querySelector('img');
  const pos = { x: 0, y: 0, tx: 0, ty: 0, r: 0 };
  let on = false;
  document.querySelectorAll('[data-preview]').forEach((row) => {
    row.addEventListener('pointerenter', (e) => {
      img.src = row.dataset.preview;
      pos.x = pos.tx = e.clientX; pos.y = pos.ty = e.clientY;
      on = true; box.classList.add('is-on');
    });
    row.addEventListener('pointerleave', () => { on = false; box.classList.remove('is-on'); });
  });
  window.addEventListener('pointermove', (e) => { pos.tx = e.clientX; pos.ty = e.clientY; }, { passive: true });
  return () => {
    if (!on && !box.classList.contains('is-on')) return;
    const dx = pos.tx - pos.x;
    pos.x += dx * 0.14; pos.y += (pos.ty - pos.y) * 0.14;
    pos.r += (gsap.utils.clamp(-12, 12, dx * 0.12) - pos.r) * 0.1;
    box.style.transform = `translate3d(${pos.x + 28}px, ${pos.y - 120}px, 0) rotate(${pos.r}deg)`;
  };
}

/* Cursor ring with labels for things you can open. */
export function setupCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return null;
  const ring = document.querySelector('[data-cursor-ring]');
  const label = ring.querySelector('[data-cursor-label]');
  const p = { x: -100, y: -100, tx: -100, ty: -100 };
  window.addEventListener('pointermove', (e) => { p.tx = e.clientX; p.ty = e.clientY; ring.classList.add('is-on'); }, { passive: true });
  document.addEventListener('pointerleave', () => ring.classList.remove('is-on'));
  document.querySelectorAll('[data-cursor]').forEach((el) => {
    el.addEventListener('pointerenter', () => { label.textContent = el.dataset.cursor; ring.classList.add('has-label'); });
    el.addEventListener('pointerleave', () => ring.classList.remove('has-label'));
  });
  return () => {
    p.x += (p.tx - p.x) * 0.18; p.y += (p.ty - p.y) * 0.18;
    ring.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
  };
}

/* The email leans toward the pointer. */
export function setupMagnetic(reduced) {
  if (reduced) return;
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'expo.out' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.12);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.25);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });
}

/* Night until the archive, then paper. */
export function setupTheme() {
  const root = document.documentElement;
  const meta = document.querySelector('meta[name="theme-color"]');
  const set = (t) => { root.dataset.theme = t; meta?.setAttribute('content', t === 'paper' ? '#E8EAE4' : '#070B26'); };
  const trigger = document.querySelector('[data-theme-trigger="paper"]');
  gsap.timeline({ scrollTrigger: { trigger, start: 'top 65%', onEnter: () => set('paper'), onLeaveBack: () => set('night') } });
}

/* Nav: hides on the way down, returns on the way up, turns blue over Contact. */
export function setupNav(scrollY) {
  const nav = document.querySelector('[data-nav]');
  const contact = document.querySelector('.contact');
  let last = 0;
  return () => {
    const y = scrollY();
    nav.classList.toggle('is-scrolled', y > 8);
    if (Math.abs(y - last) > 6) {
      nav.classList.toggle('is-hidden', y > last && y > 240 && !nav.contains(document.activeElement));
      last = y;
    }
    nav.classList.toggle('is-on-blue', contact.getBoundingClientRect().top <= nav.offsetHeight);
  };
}

/* Contact: the thread ends by flooding the section with cobalt. */
export function setupContact(reduced) {
  if (reduced) return;
  gsap.fromTo('[data-contact-fill]', { scaleY: 0 }, {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '.contact', start: 'top 62%', end: 'top 8%', scrub: true },
  });
  gsap.fromTo('.contact__inner', { autoAlpha: 0, y: 32 }, {
    autoAlpha: 1, y: 0, ease: 'none',
    scrollTrigger: { trigger: '.contact', start: 'top 34%', end: 'top 0%', scrub: true },
  });
}
