import { AfterViewInit, Component, ElementRef, OnDestroy, viewChildren } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit, OnDestroy {
  sections = viewChildren('section', { read: ElementRef });
  private mouseMoveHandler: ((event: MouseEvent) => void) | null = null;

  constructor() {}

  ngAfterViewInit() {
    // Đảm bảo Webflow được khởi tạo lại nếu nó đã load xong từ index.html
    setTimeout(() => {
      const Webflow = (window as any).Webflow;
      if (Webflow) {
        if (Webflow.destroy) Webflow.destroy();
        if (Webflow.ready) Webflow.ready();
        if (Webflow.require) {
          const ix2 = Webflow.require('ix2');
          if (ix2 && ix2.init) ix2.init();
        }
        console.log('Webflow and IX2 re-initialized');
      }

      const ScrollTrigger = (window as any).ScrollTrigger;
      if (ScrollTrigger) ScrollTrigger.refresh();

      // Initialize all systems
      this.initNavbarDropdown();
      this.initUTMTracking();
      this.initSplide();
      this.initTabButtons();
      this.initAutoRotateTab();
      this.initAIAnimation();
      this.hideWebflowBadge();
      this.ensureVideosPlay();
      this.setMousePosition();
    }, 200);
  }

  ngOnDestroy(): void {
    if (this.mouseMoveHandler) {
      globalThis.removeEventListener('mousemove', this.mouseMoveHandler);
    }
  }

  setMousePosition() {
    const interactiveEl = document.querySelector('.gradient-interactive');

    if (interactiveEl) {
      this.mouseMoveHandler = (event: MouseEvent) => {
        (interactiveEl as HTMLElement).style.transform =
          `translate(${event.clientX}px, ${event.clientY}px)`;
      };

      globalThis.addEventListener('mousemove', this.mouseMoveHandler);
    }
  }

  private ensureVideosPlay() {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      if (video.paused) {
        video.play().catch((e) => {
          console.warn('Video autoplay failed:', e);
          // Try playing again on user interaction if needed
        });
      }
    });
  }

  private hideWebflowBadge() {
    const badge = document.querySelector('.w-webflow-badge');
    if (badge) badge.remove();
    // Also try removing after a bit more time as it might be injected late
    setTimeout(() => {
      document.querySelectorAll('.w-webflow-badge').forEach((el) => el.remove());
    }, 1000);
  }

  private initNavbarDropdown() {
    const toggles = document.querySelectorAll('.navbar02_dropdown-toggle');
    const dropdown = document.querySelector('.navbar02_dropdown-list');
    const overlay = document.querySelector('.overlay') as HTMLElement;
    let activeToggle: Element | null = null;

    if (!overlay) return;

    const showOverlay = (toggle: Element) => {
      overlay.classList.add('active');
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      activeToggle = toggle;
    };

    const hideOverlay = () => {
      overlay.classList.remove('active');
      overlay.style.display = 'none';
      document.body.style.overflow = '';
      activeToggle = null;
    };

    const isOverlayVisible = () => overlay && overlay.classList.contains('active');

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activeToggle === toggle && isOverlayVisible()) {
          hideOverlay();
        } else {
          showOverlay(toggle);
        }
      });
    });

    document.addEventListener('click', (event) => {
      const isClickInside =
        (activeToggle && activeToggle.contains(event.target as Node)) ||
        (dropdown && dropdown.contains(event.target as Node));

      if (!isClickInside && isOverlayVisible()) {
        hideOverlay();
      }
    });
  }

  private initUTMTracking() {
    const getQueryParam = (param: string) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };

    const setInputValue = (name: string, value: string | null) => {
      if (!value) return;
      const input = document.querySelector(`input[name="${name}"]`) as HTMLInputElement;
      if (input) input.value = value;
    };

    const mapFields: { [key: string]: string } = {
      utm_source: 'utm_source',
      utm_medium: 'utm_medium',
      utm_campaign: 'utm_campaign',
      utm_term: 'utm_term',
      utm_content: 'utm_content',
      custom_source_marketing: 'utm_source',
      custom_marketing_medium: 'utm_medium',
      custom_campaign_marketing: 'utm_campaign',
      custom_marketing_content: 'utm_content',
      custom_referral_id1: 'ref',
    };

    Object.keys(mapFields).forEach((field) => {
      setInputValue(field, getQueryParam(mapFields[field]));
    });

    setInputValue('custom_link_ads', window.location.href);
    setInputValue('referral_url', document.referrer);
    try {
      const domain = new URL(document.referrer).hostname;
      setInputValue('referral_domain', domain);
    } catch (e) {}
    setInputValue('user_agent', navigator.userAgent);
    setInputValue('apikey', 'test123');

    // Form action UTM
    const form = document.querySelector("form[action*='base-webflow-connect-crm']");
    const params = window.location.search;
    if (form && params) {
      const baseAction = form.getAttribute('action')?.split('?')[0];
      if (baseAction) form.setAttribute('action', baseAction + params);
    }

    // Internal links UTM
    const queryString = window.location.search;
    if (queryString.includes('utm_')) {
      const internalLinks = document.querySelectorAll(
        'a[href^="/"], a[href^="' + window.location.origin + '"]',
      );
      internalLinks.forEach((link) => {
        try {
          const hrefUrl = new URL((link as HTMLAnchorElement).href, window.location.href);
          if (!hrefUrl.search.includes('utm_')) {
            hrefUrl.search += (hrefUrl.search ? '&' : '') + queryString.slice(1);
            (link as HTMLAnchorElement).href = hrefUrl.toString();
          }
        } catch (e) {}
      });
    }
  }

  private initSplide(retries = 0) {
    const Splide = (window as any).Splide;
    const Extensions = (window as any).splide?.Extensions || (window as any).Splide?.Extensions;

    if (Splide) {
      const splideEls = document.querySelectorAll('.splide');
      if (splideEls.length === 0 && retries < 15) {
        setTimeout(() => this.initSplide(retries + 1), 200);
        return;
      }

      const autoScrollSpeed = window.innerWidth < 768 ? 1.0 : 0.5;

      splideEls.forEach((el) => {
        if ((el as any)._splide) return;

        try {
          const splide = new Splide(el as HTMLElement, {
            autoWidth: true,
            arrows: false,
            pagination: false,
            focus: 'center',
            direction: 'ltr',
            gap: '1.5rem',
            type: 'loop',
            autoScroll: {
              autoStart: true,
              speed: autoScrollSpeed,
              pauseOnHover: false,
            },
            intersection: {
              inView: { autoScroll: true },
              outView: { autoScroll: false },
            },
          });

          // Use any extensions available
          const mountExtensions: any = {};
          if (Extensions) {
            if (Extensions.AutoScroll) mountExtensions.AutoScroll = Extensions.AutoScroll;
            if (Extensions.Intersection) mountExtensions.Intersection = Extensions.Intersection;
          }
          // Also check other common locations
          if ((window as any).splideAutoScroll)
            mountExtensions.AutoScroll = (window as any).splideAutoScroll.AutoScroll;

          splide.mount(mountExtensions);
          (el as any)._splide = splide;
          console.log('Splide initialized successfully');
        } catch (e) {
          console.error('Error mounting Splide:', e);
        }
      });
    } else if (retries < 20) {
      setTimeout(() => this.initSplide(retries + 1), 200);
    }
  }

  private initTabButtons() {
    const targetTab = document.querySelector('.w-tab-link.button-tab');
    if (targetTab) {
      targetTab.removeAttribute('data-w-tab');
      targetTab.removeAttribute('href');
      targetTab.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = 'https://customers.base.vn/';
      });
    }
  }

  private initAutoRotateTab() {
    const tabs = document.querySelectorAll('.tab_link_wrap') as NodeListOf<HTMLElement>;
    const progressBar = document.querySelector('.procces_tab_running') as HTMLElement;
    const ring = document.querySelector('.progress_ring') as HTMLElement;
    const indicators = document.querySelectorAll('.process_tab_number');

    if (!tabs.length) return;

    const tabTime = 7000;
    const fullTime = tabs.length * tabTime;

    let isInView = false;
    let isRunning = false;
    let rafId: number | null = null;
    let start: number | null = null;
    let lastIndex = -1;
    let isManualClick = false;

    const activateTab = (i: number) => {
      if (lastIndex === i) return;
      if (isInView && !isManualClick) {
        tabs[i].click();
      }
      indicators.forEach((el, idx) => el.classList.toggle('is-active', idx === i));
      lastIndex = i;
    };

    const loop = (time: number) => {
      if (!start) start = time;
      const elapsed = (time - start) % fullTime;
      const percent = (elapsed / fullTime) * 100;
      const tabIndex = Math.floor(elapsed / tabTime);

      activateTab(tabIndex);
      if (progressBar) progressBar.style.width = `${percent}%`;
      if (ring) ring.style.transform = `translate(${percent}%, -50%)`;
      if (isRunning) rafId = requestAnimationFrame(loop);
    };

    const startLoop = (index = 0) => {
      if (rafId) cancelAnimationFrame(rafId);
      start = performance.now() - index * tabTime;
      isRunning = true;
      rafId = requestAnimationFrame(loop);
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        isManualClick = true;
        indicators.forEach((el, idx) => el.classList.toggle('is-active', idx === i));
        if (isRunning || isInView) startLoop(i);
        else lastIndex = i;
        setTimeout(() => (isManualClick = false), 200);
      });
    });

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: '.process_tab_wrapper',
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          isInView = true;
          if (!isRunning) startLoop(lastIndex !== -1 ? lastIndex : 0);
        },
        onLeave: () => (isInView = false),
        onEnterBack: () => {
          isInView = true;
          if (!isRunning) startLoop(lastIndex !== -1 ? lastIndex : 0);
        },
        onLeaveBack: () => (isInView = false),
      });
    }
  }

  private initAIAnimation() {
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (!gsap) return;

    let activeTimelines: any[] = [];
    let svg1Tween: any;
    const triggers = document.querySelectorAll('.base_ai_question');
    const answers = document.querySelectorAll('.base_ai_answer_card');
    const svg1 = document.querySelector('.svg2_path') as any;

    if (!triggers.length || !svg1) return;

    const lottieInstances = new Map();

    const updateLightColors = () => {
      for (let i = 1; i <= 8; i++) {
        document.querySelectorAll(`#animatedGradient${i} stop`).forEach((stop) => {
          stop.setAttribute('stop-color', '#BCEBFF');
        });
      }
    };

    const initializeLotties = () => {
      answers.forEach((card: any) => {
        const wrapper = card.querySelector('.lottie_wrapper');
        if (wrapper && wrapper.dataset.lottiePath) {
          const lottiePlayer = document.createElement('lottie-player') as any;
          lottiePlayer.src = wrapper.dataset.lottiePath;
          lottiePlayer.style.width = '100%';
          lottiePlayer.style.height = 'auto';
          wrapper.innerHTML = '';
          wrapper.appendChild(lottiePlayer);
          lottieInstances.set(card, lottiePlayer);
          lottiePlayer.addEventListener('ready', () => lottiePlayer.stop());
        }
      });
    };

    setTimeout(() => {
      initializeLotties();
      updateLightColors();
    }, 100);

    const animatePath = (pathId: string) => {
      const lightPath = document.getElementById(pathId + '_light');
      if (!lightPath) return;
      const pathMatch = pathId.match(/\d+$/);
      if (!pathMatch) return;
      const pathNumber = pathMatch[0];
      const stops = document.querySelectorAll(`#animatedGradient${pathNumber} stop`);
      if (!stops.length) return;

      const tl = gsap.timeline({
        delay: 0.1,
        repeat: -1,
        repeatDelay: 0.5,
        onComplete: () => {
          const index = activeTimelines.indexOf(tl);
          if (index > -1) activeTimelines.splice(index, 1);
        },
      });
      activeTimelines.push(tl);

      tl.set(lightPath, { opacity: 1 });
      [0, 0.03, 0.06, 0.09, 0.13, 0.16].forEach((offset, i) => {
        tl.fromTo(
          stops[i],
          { attr: { offset: (offset + 1.0).toString() } },
          { attr: { offset: (offset - 0.16).toString() }, duration: 0.9, ease: 'linear' },
          0,
        );
      });
    };

    const killAllAnimations = () => {
      if (svg1Tween) svg1Tween.kill();
      activeTimelines.forEach((tl) => tl && tl.kill());
      activeTimelines = [];
      document.querySelectorAll('[id$="_light"]').forEach((path) => gsap.set(path, { opacity: 0 }));
      for (let i = 1; i <= 8; i++) {
        document.querySelectorAll(`#animatedGradient${i} stop`).forEach((stop, index) => {
          gsap.set(stop, { attr: { offset: `${index * 3}%` } });
        });
      }
      answers.forEach((ans) => {
        gsap.set(ans, { display: 'none' });
        const player = lottieInstances.get(ans);
        if (player && player.stop) {
          player.stop();
          player.seek(0);
        }
      });
    };

    const triggerQuestion = (trigger: Element) => {
      killAllAnimations();
      triggers.forEach((t) => t.classList.remove('is-active'));
      trigger.classList.add('is-active');

      const length = svg1.getTotalLength();
      gsap.set(svg1, { strokeDasharray: length, strokeDashoffset: length });
      svg1Tween = gsap.to(svg1, {
        strokeDashoffset: 0,
        duration: 1.33,
        ease: 'power3.inOut',
        onComplete: () => {
          const paths = trigger.getAttribute('data-paths');
          if (paths) paths.split(',').forEach((p) => animatePath(p.trim()));

          setTimeout(() => {
            const comboClass = Array.from(trigger.classList).find((cls) =>
              cls.startsWith('combo-'),
            );
            answers.forEach((ans) => {
              gsap.set(ans, { display: 'none' });
              const p = lottieInstances.get(ans);
              if (p && p.stop) {
                p.stop();
                p.seek(0);
              }
            });

            if (comboClass) {
              const matching = document.querySelector(
                `.base_ai_answer_card.${comboClass}`,
              ) as HTMLElement;
              if (matching) {
                gsap.set(matching, { display: 'block', opacity: 0, y: 20 });
                gsap.to(matching, {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power3.out',
                  onComplete: () => {
                    const p = lottieInstances.get(matching);
                    if (p) {
                      if (p.ready !== false) p.play();
                      else p.addEventListener('ready', () => p.play(), { once: true });
                    }
                  },
                });
              }
            }
          }, 1000);
        },
      });
    };

    if (ScrollTrigger) {
      ScrollTrigger.create({
        trigger: '.base_ai_question',
        start: 'top 90%',
        once: true,
        onEnter: () => {
          const first = document.querySelector('.base_ai_question');
          if (first) triggerQuestion(first);
        },
      });
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => triggerQuestion(trigger));
    });
  }
}
