// ===== MAIN ENTRY POINT =====
import './styles/index.css';
import { initSmoothScroll } from './js/smooth-scroll.js';
import { initPreloader } from './js/preloader.js';
import { initCursor } from './js/cursor.js';
import { initAnimations } from './js/animations.js';

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  // 1. Start preloader animation → then init everything else
  initPreloader(() => {
    // After preloader completes:
    initSmoothScroll();
    initAnimations();
  });

  // Cursor runs immediately (independent of preloader)
  initCursor();
});
