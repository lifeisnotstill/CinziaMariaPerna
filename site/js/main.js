/**
 * Cinzia Maria Perna — Website JavaScript
 */

(function() {
  'use strict';

  // --------------------------------------------------------------------------
  // Language Toggle
  // --------------------------------------------------------------------------
  const initLanguageToggle = () => {
    const langBtns = document.querySelectorAll('.lang-toggle__btn');
    const savedLang = localStorage.getItem('language') || 'en';

    // Set initial language
    setLanguage(savedLang);

    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
        localStorage.setItem('language', lang);
      });
    });
  };

  const setLanguage = (lang) => {
    document.body.dataset.activeLang = lang;

    // Update button states
    document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  // --------------------------------------------------------------------------
  // Mobile Navigation
  // --------------------------------------------------------------------------
  const initMobileNav = () => {
    const toggle = document.querySelector('.nav__mobile-toggle');
    const mobileMenu = document.querySelector('.nav__mobile-menu');

    if (!toggle || !mobileMenu) return;

    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  };

  // --------------------------------------------------------------------------
  // Smooth Scroll (for browsers that don't support scroll-behavior)
  // --------------------------------------------------------------------------
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // --------------------------------------------------------------------------
  // Scroll Animations (Fade In)
  // --------------------------------------------------------------------------
  const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
  };

  // --------------------------------------------------------------------------
  // Navbar Background on Scroll
  // --------------------------------------------------------------------------
  const initNavScroll = () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add/remove scrolled class for styling
      if (currentScroll > 50) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }

      lastScroll = currentScroll;
    });
  };

  // --------------------------------------------------------------------------
  // Project Tabs (Music Section)
  // --------------------------------------------------------------------------
  const initProjectTabs = () => {
    const tabBtns = document.querySelectorAll('.project-tabs__btn');
    const contents = document.querySelectorAll('.project-content');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const project = btn.dataset.project;

        // Update button states
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide content
        contents.forEach(content => {
          if (content.id === `project-${project}`) {
            content.classList.remove('project-content--hidden');
            // Re-trigger fade-in animations for newly visible content
            content.querySelectorAll('.fade-in').forEach(el => {
              el.classList.remove('visible');
              setTimeout(() => el.classList.add('visible'), 50);
            });
          } else {
            content.classList.add('project-content--hidden');
          }
        });
      });
    });
  };

  // --------------------------------------------------------------------------
  // Track Credits Toggle
  // --------------------------------------------------------------------------
  const initTrackCredits = () => {
    const tracks = document.querySelectorAll('.track');

    tracks.forEach(track => {
      const toggle = track.querySelector('.track__toggle');
      const main = track.querySelector('.track__main');
      const playBtn = track.querySelector('.track__play');

      if (toggle && main) {
        // Click on the toggle button or info area (not play button)
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          track.classList.toggle('open');
        });

        // Also allow clicking on track info to toggle
        const trackInfo = track.querySelector('.track__info');
        if (trackInfo) {
          trackInfo.addEventListener('click', (e) => {
            e.stopPropagation();
            track.classList.toggle('open');
          });
        }
      }
    });
  };

  // --------------------------------------------------------------------------
  // Plausible Analytics - Streaming Click Tracking
  // --------------------------------------------------------------------------
  window.trackStreamingClick = (service) => {
    const eventName = `Streaming Click - ${service}`;

    // Track with Plausible if available
    if (typeof plausible !== 'undefined') {
      plausible(eventName);
    }

    // Also log to console for development
    console.log('Analytics Event:', eventName);
  };

  // General event tracking helper
  window.trackEvent = (eventName, props = {}) => {
    if (typeof plausible !== 'undefined') {
      plausible(eventName, { props });
    } else {
      // Log for development
      console.log('Analytics Event:', eventName, props);
    }
  };

  // --------------------------------------------------------------------------
  // Audio Player
  // --------------------------------------------------------------------------
  const initAudioPlayer = () => {
    const playButtons = document.querySelectorAll('.track__play');

    if (playButtons.length === 0) return;

    let currentAudio = null;
    let currentButton = null;

    playButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Don't trigger credits toggle
        e.preventDefault();

        const trackSrc = btn.dataset.src;
        if (!trackSrc) return;

        // If clicking the same track that's playing, toggle play/pause
        if (currentAudio && currentButton === btn) {
          if (currentAudio.paused) {
            currentAudio.play();
            btn.classList.add('playing');
          } else {
            currentAudio.pause();
            btn.classList.remove('playing');
          }
          return;
        }

        // Stop any currently playing track
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          if (currentButton) {
            currentButton.classList.remove('playing');
          }
        }

        // Play new track
        currentAudio = new Audio(trackSrc);
        currentButton = btn;

        // Handle play
        currentAudio.play().then(() => {
          btn.classList.add('playing');
          // Track analytics
          const trackName = btn.closest('.track').querySelector('.track__name').textContent;
          trackEvent('Track Play', { track: trackName });
        }).catch(err => {
          console.error('Audio playback failed:', err);
        });

        // Handle track ending
        currentAudio.addEventListener('ended', () => {
          btn.classList.remove('playing');
          currentAudio = null;
          currentButton = null;
        });

        // Handle errors
        currentAudio.addEventListener('error', () => {
          btn.classList.remove('playing');
          console.error('Error loading audio:', trackSrc);
        });
      });
    });
  };

  // --------------------------------------------------------------------------
  // Initialize
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initMobileNav();
    initSmoothScroll();
    initScrollAnimations();
    initNavScroll();
    initProjectTabs();
    initTrackCredits();
    initAudioPlayer();
  });

})();
