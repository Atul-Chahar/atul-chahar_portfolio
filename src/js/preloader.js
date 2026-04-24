import gsap from 'gsap';

export function initPreloader(onComplete) {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    onComplete?.();
    return;
  }

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = 'none';
      onComplete?.();
    },
  });

  // Hold for a moment, then slide the orange curtain down
  tl.to(preloader, {
    duration: 0.3,
    delay: 0.4,
  })
  .to('.preloader__text', {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: 'power2.in',
  })
  .to(preloader, {
    yPercent: -100,
    duration: 0.8,
    ease: 'power4.inOut',
  }, '-=0.1');
}
