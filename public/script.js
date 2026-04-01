/* ============================================================
   FLIXTELE IPTV UK - MAIN JAVASCRIPT
   ============================================================ */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initStickyHeader();
    initMobileMenu();
    initSmoothScroll();
    initPricingToggle();
    initTestimonialsSlider();
    initFaqAccordion();
    initScrollToTop();
    initScrollAnimations();
    initActiveNavHighlight();
  }


  /* ----------------------------------------------------------
     1. STICKY HEADER ON SCROLL
     ---------------------------------------------------------- */
  function initStickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }


  /* ----------------------------------------------------------
     2. MOBILE MENU
     ---------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var overlay = document.getElementById('mobile-overlay');
    var menu = document.getElementById('mobile-menu');
    var closeBtn = document.getElementById('mobile-close');

    if (!toggle || !menu) return;

    function openMenu() {
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      menu.classList.add('active');
      if (overlay) overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      if (menu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Close on mobile nav link click
    var mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on ESC
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
      }
    });
  }


  /* ----------------------------------------------------------
     3. SMOOTH SCROLL FOR ANCHOR LINKS
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#pricing') {
          // For "#pricing" or just "#", handle normally
        }
        if (targetId.length <= 1) return;

        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var headerHeight = document.getElementById('site-header')
            ? document.getElementById('site-header').offsetHeight
            : 80;
          var top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }


  /* ----------------------------------------------------------
     4. PRICING TOGGLE (1 Connection / 2 Connections)
     ---------------------------------------------------------- */
  function initPricingToggle() {
    var buttons = document.querySelectorAll('.connection-toggle .toggle-btn');
    var amounts = document.querySelectorAll('.plan-price .amount');
    var pasts = document.querySelectorAll('.plan-price .past-amount');
    var links = document.querySelectorAll('.plan-btn');

    if (!buttons.length) return;

    function setActive(btn) {
      buttons.forEach(function (b) {
        b.classList.toggle('active', b === btn);
      });
    }

    function setConnectionsMode(conn) {
      // Update prices
      amounts.forEach(function (el) {
        var key = conn === 1 ? 'price1' : 'price2';
        if (el.dataset[key]) {
          el.textContent = parseFloat(el.dataset[key]).toFixed(2);
        }
      });

      // Update past prices
      pasts.forEach(function (el) {
        var key = conn === 1 ? 'past1' : 'past2';
        if (el.dataset[key]) {
          el.textContent = parseFloat(el.dataset[key]).toFixed(2);
        }
      });

      // Update links
      links.forEach(function (a) {
        var key = conn === 1 ? 'href1' : 'href2';
        if (a.dataset[key]) {
          a.href = a.dataset[key];
        }
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        setActive(btn);
        var conn = btn.id === 'toggle-1' ? 1 : 2;
        setConnectionsMode(conn);
      });
    });
  }


  /* ----------------------------------------------------------
     5. TESTIMONIALS SLIDER
     ---------------------------------------------------------- */
  function initTestimonialsSlider() {
    var track = document.getElementById('testimonials-track');
    var dotsContainer = document.getElementById('slider-dots');

    if (!track || !dotsContainer) return;

    var cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;

    var currentIndex = 0;
    var slidesPerView = getSlidesPerView();
    var totalSlides = cards.length;
    var maxIndex = Math.max(0, totalSlides - slidesPerView);
    var autoplayInterval;
    var isDragging = false;
    var startX = 0;
    var currentTranslate = 0;

    function getSlidesPerView() {
      var w = window.innerWidth;
      if (w <= 767) return 1;
      if (w <= 1024) return 2;
      return 4;
    }

    function getSlideWidth() {
      if (!cards[0]) return 290;
      return cards[0].offsetWidth + 47; // card width + gap
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      var dotCount = maxIndex + 1;
      for (var i = 0; i < dotCount; i++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
        dot.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        dot.addEventListener('click', function () {
          goToSlide(parseInt(this.dataset.index));
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateDots() {
      var dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === currentIndex);
        dot.setAttribute('aria-pressed', i === currentIndex ? 'true' : 'false');
      });
    }

    function goToSlide(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      var offset = currentIndex * getSlideWidth();
      track.style.transform = 'translateX(-' + offset + 'px)';
      updateDots();
    }

    function nextSlide() {
      if (currentIndex >= maxIndex) {
        goToSlide(0);
      } else {
        goToSlide(currentIndex + 1);
      }
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    // Touch/drag support
    track.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = e.pageX;
      stopAutoplay();
    });

    track.addEventListener('touchstart', function (e) {
      isDragging = true;
      startX = e.touches[0].pageX;
      stopAutoplay();
    }, { passive: true });

    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    function endDrag(e) {
      if (!isDragging) return;
      isDragging = false;
      var endX = e.type === 'touchend'
        ? (e.changedTouches ? e.changedTouches[0].pageX : startX)
        : e.pageX;
      var diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSlide(currentIndex + 1);
        } else {
          goToSlide(currentIndex - 1);
        }
      }
      startAutoplay();
    }

    // Recalculate on resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        slidesPerView = getSlidesPerView();
        maxIndex = Math.max(0, totalSlides - slidesPerView);
        buildDots();
        goToSlide(Math.min(currentIndex, maxIndex));
      }, 200);
    });

    // Initialize
    buildDots();
    goToSlide(0);
    startAutoplay();

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);
  }


  /* ----------------------------------------------------------
     6. FAQ ACCORDION
     ---------------------------------------------------------- */
  function initFaqAccordion() {
    var questions = document.querySelectorAll('.faq-question');
    questions.forEach(function (question) {
      question.addEventListener('click', function () {
        var answer = this.nextElementSibling;
        var isOpen = answer.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-answer').forEach(function (a) {
          a.classList.remove('open');
        });
        document.querySelectorAll('.faq-question').forEach(function (q) {
          q.setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          answer.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }


  /* ----------------------------------------------------------
     7. SCROLL TO TOP BUTTON
     ---------------------------------------------------------- */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ----------------------------------------------------------
     8. SCROLL ANIMATIONS (Intersection Observer)
     ---------------------------------------------------------- */
  function initScrollAnimations() {
    var elements = document.querySelectorAll(
      '.feature-card, .plan-card, .testimonial-card, .seo-content h2, .seo-content h3'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all
      elements.forEach(function (el) { el.classList.add('fade-in', 'visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in', 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    elements.forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }


  /* ----------------------------------------------------------
     9. ACTIVE NAV HIGHLIGHT ON SCROLL
     ---------------------------------------------------------- */
  function initActiveNavHighlight() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    function highlightNav() {
      var scrollY = window.scrollY;
      var headerOffset = 120;

      sections.forEach(function (section) {
        var top = section.offsetTop - headerOffset;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });

      // Home active when at top
      if (scrollY < 300) {
        navLinks.forEach(function (link) { link.classList.remove('active'); });
        var homeLink = document.querySelector('.nav-link[href="#"]');
        if (homeLink) homeLink.classList.add('active');
      }
    }

    window.addEventListener('scroll', highlightNav, { passive: true });
  }

})();
