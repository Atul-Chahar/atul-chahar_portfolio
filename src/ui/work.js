import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* Pinned horizontal gallery on wide screens, a plain stack elsewhere. */
export function setupWork({ motion, reduced }) {
  const pin = document.querySelector('[data-work-pin]');
  const track = document.querySelector('[data-work-track]');
  const index = document.querySelector('[data-work-index]');
  const count = track.children.length;

  if (reduced) {
    document.documentElement.classList.add('no-pin');
    return;
  }

  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate(self) {
          const n = Math.min(count, Math.floor(self.progress * count) + 1);
          index.textContent = String(n).padStart(2, '0');
          motion.velX = gsap.utils.clamp(-60, 60, -self.getVelocity() / 60);
        },
        onLeave() { motion.velX = 0; },
        onLeaveBack() { motion.velX = 0; },
      },
    });

    // Media drifts against the track for depth.
    track.querySelectorAll('.proj').forEach((proj) => {
      const media = proj.querySelector('.proj__media');
      const name = proj.querySelector('.proj__name');
      gsap.fromTo(media, { xPercent: 10 }, {
        xPercent: -10, ease: 'none',
        scrollTrigger: { trigger: proj, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
      gsap.fromTo(name, { xPercent: -8 }, {
        xPercent: 8, ease: 'none',
        scrollTrigger: { trigger: proj, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
    });
    return () => { motion.velX = 0; };
  });
}

/* Case studies: a native <dialog> that wipes up from the bottom. */
export function setupCases({ lenis, reduced }) {
  let opener = null;

  const open = (dialog) => {
    const sheet = dialog.querySelector('.case__sheet');
    dialog.showModal();
    sheet.scrollTop = 0;
    lenis?.stop();
    if (reduced) return;
    const title = dialog.querySelector('.case__title');
    gsap.timeline()
      .fromTo(sheet, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.9, ease: 'expo.inOut' })
      .fromTo(title, { yPercent: 40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'expo.out' }, '-=0.35')
      .fromTo(dialog.querySelectorAll('.case__desc, .meta, .case__gallery'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'expo.out' }, '-=0.8');
  };

  const close = (dialog) => {
    const done = () => { dialog.close(); lenis?.start(); opener?.focus({ preventScroll: true }); };
    if (reduced) return done();
    gsap.to(dialog.querySelector('.case__sheet'), { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'expo.in', onComplete: done });
  };

  document.querySelectorAll('[data-open]').forEach((btn) => {
    const dialog = document.getElementById(btn.dataset.open);
    if (!dialog) return;
    btn.addEventListener('click', () => { opener = btn; open(dialog); });
  });
  document.querySelectorAll('dialog.case').forEach((dialog) => {
    dialog.querySelector('[data-close]').addEventListener('click', () => close(dialog));
    dialog.addEventListener('cancel', (e) => { e.preventDefault(); close(dialog); });
  });
}

export { ScrollTrigger };
