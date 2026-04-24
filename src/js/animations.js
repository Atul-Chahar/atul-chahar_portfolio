import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  animateHero();
  animateManifesto();
  animateAboutSection();
  animateFadeUpElements();
  animateHUD();
  animateWorkCards();
}

/* ===== HERO ===== */
function animateHero() {
  const heroSection = document.querySelector('.section--hero');
  const firstLine = document.querySelector('.hero__name-line--first');
  const lastLine = document.querySelector('.hero__name-line--last');
  const bottomLine = document.querySelector('.hud__bottom-line');

  if (!firstLine || !lastLine) return;

  const tl = gsap.timeline({ delay: 1.4 }); // After preloader

  // Split each name line into characters
  const firstChars = splitTextToChars(firstLine);
  const lastChars = splitTextToChars(lastLine);

  tl.from(firstChars, {
    opacity: 0,
    y: 60,
    rotateX: -90,
    stagger: 0.05,
    duration: 0.8,
    ease: 'power3.out',
  })
  .from(lastChars, {
    opacity: 0,
    y: 60,
    rotateX: -90,
    stagger: 0.05,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.6');

  // Add character hover interaction
  const allChars = [...firstChars, ...lastChars];
  allChars.forEach((char) => {
    char.addEventListener('mouseenter', () => {
      gsap.to(char, {
        y: -15,
        scale: 1.05,
        duration: 0.2,
        ease: 'power1.out',
        overwrite: 'auto'
      });
    });
    char.addEventListener('mouseleave', () => {
      gsap.to(char, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    });
  });

  // Hero Parallax Exit
  if (heroSection) {
    gsap.to(firstLine, {
      yPercent: -50,
      xPercent: -15,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    gsap.to(lastLine, {
      yPercent: 40,
      xPercent: 30,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    });

    if (bottomLine) {
      // Fade out the bottom HUD line when leaving Hero
      gsap.to(bottomLine, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }
  }
}

/* ===== MANIFESTO (scroll-linked brightness) ===== */
function animateManifesto() {
  const manifestoSection = document.querySelector('.section--manifesto');
  const manifestoLines = document.querySelectorAll('.manifesto__line');
  if (!manifestoSection || manifestoLines.length === 0) return;

  const allWords = [];

  // Wrap each word individually
  manifestoLines.forEach((line) => {
    const textWords = line.textContent.trim().split(/\s+/);
    line.innerHTML = textWords.map(w => `<span class="word">${w}</span>`).join(' ');
    // Collect them in array
    allWords.push(...line.querySelectorAll('.word'));
  });

  // Pin the section and scrub words to full opacity
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: manifestoSection,
      start: 'center center',
      end: '+=100%', // Stay pinned for 1 viewport height of scrolling
      pin: true,
      scrub: 1,
    }
  });

  // Animate opacity to 1
  tl.to(allWords, {
    opacity: 1,
    stagger: 0.1,
    ease: 'none',
  });
}

/* ===== ABOUT SECTION LINE DRAW ===== */
function animateAboutSection() {
  const aboutSection = document.querySelector('.section--about');
  const centerLine = document.querySelector('.about__center-line');
  const elements = document.querySelectorAll('[data-about-animate]');

  if (!aboutSection || !centerLine) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: 'top 75%',
      end: 'center center',
      scrub: 1,
    }
  });

  // Draw the line from top to bottom
  tl.to(centerLine, {
    height: '100%',
    ease: 'none',
    duration: 1
  });

  // Slowly reveal content after line starts drawing
  tl.from(elements, {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 0.8,
    ease: 'power2.out',
  }, "-=0.5");
}

/* ===== FADE-UP ELEMENTS ===== */
function animateFadeUpElements() {
  const elements = document.querySelectorAll('[data-animate="fade-up"]');

  elements.forEach((el) => {
    gsap.fromTo(el, {
      opacity: 0,
      y: 40,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

/* ===== HUD ===== */
function animateHUD() {
  const hud = document.querySelector('.hud');
  const pageLabel = document.querySelector('.hud__page');
  if (!hud) return;

  // Show HUD after preloader
  gsap.to(hud, {
    delay: 2,
    duration: 0.6,
    onStart: () => hud.classList.add('is-visible'),
  });

  // Update page number based on current section
  const sections = document.querySelectorAll('.section[data-page]');
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        if (pageLabel) pageLabel.textContent = `P. ${section.dataset.page}`;
      },
      onEnterBack: () => {
        if (pageLabel) pageLabel.textContent = `P. ${section.dataset.page}`;
      },
    });
  });
}

/* ===== WORK CARD PARALLAX ===== */
function animateWorkCards() {
  const featuredImg = document.querySelector('.work__card-img img');
  if (featuredImg) {
    gsap.to(featuredImg, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.work__card--featured',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }

  // Stagger the about rows
  const aboutRows = document.querySelectorAll('.about__row');
  if (aboutRows.length) {
    gsap.fromTo(aboutRows, {
      opacity: 0,
      x: -20,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about__rows',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }

  // Stagger the now rows
  const nowRows = document.querySelectorAll('.now__row');
  if (nowRows.length) {
    gsap.fromTo(nowRows, {
      opacity: 0,
      x: -20,
    }, {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.now__grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }
}

/* ===== UTILITY: SPLIT TEXT TO CHARS ===== */
function splitTextToChars(element) {
  const text = element.textContent;
  element.textContent = '';
  element.style.opacity = 1;

  const chars = [];
  for (const char of text) {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.willChange = 'transform, opacity';
    if (char === ' ') span.style.width = '0.3em';
    element.appendChild(span);
    chars.push(span);
  }

  return chars;
}
