import gsap from 'gsap';

let dot, ring;
let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;
let isHovering = false;

export function initCursor() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    const cursorEl = document.querySelector('.cursor');
    if (cursorEl) cursorEl.style.display = 'none';
    return;
  }

  dot = document.querySelector('.cursor__dot');
  ring = document.querySelector('.cursor__ring');

  if (!dot || !ring) return;

  // Track mouse position
  document.addEventListener('mousemove', onMouseMove);

  // Detect hoverable elements
  const hoverTargets = document.querySelectorAll('a, button, [data-cursor-hover]');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      isHovering = true;
      document.querySelector('.cursor').classList.add('cursor--hover');
    });
    el.addEventListener('mouseleave', () => {
      isHovering = false;
      document.querySelector('.cursor').classList.remove('cursor--hover');
    });
  });

  // Start animation loop
  gsap.ticker.add(updateCursor);
}

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Dot follows immediately
  gsap.set(dot, {
    x: mouseX,
    y: mouseY,
  });
}

function updateCursor() {
  // Ring follows with easing (lerp)
  const speed = 0.15;
  ringX += (mouseX - ringX) * speed;
  ringY += (mouseY - ringY) * speed;

  gsap.set(ring, {
    x: ringX,
    y: ringY,
  });
}
