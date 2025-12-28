import { AfterViewInit, Component } from '@angular/core';
import { ScriptLoader } from '../../shared/services/script-loader';
import { homePageScripts } from '../../shared/constants/scripts';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  constructor(private readonly scriptLoader: ScriptLoader) {}

  ngAfterViewInit() {
    this.loadScripts();
    this.appendUrlParamsToCrmForm();
  }

  private loadScripts() {
    const promise = [];
    for (const src of homePageScripts) {
      promise.push(this.scriptLoader.loadScript(src.split('/').pop() || src, src));
    }

    // Sau khi tất cả script load xong, có thể init lại Webflow nếu cần
    // Ví dụ: if ((window as any).Webflow) (window as any).Webflow.destroy(); (window as any).Webflow.ready();
    Promise.all(promise).then(() => {
      console.log('All scripts loaded!');
    });
  }

  private appendUrlParamsToCrmForm() {
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector("form[action*='base-webflow-connect-crm']");
      const params = globalThis.location.search;

      if (form && params) {
        const baseAction = form.getAttribute('action')?.split('?')[0];
        form.setAttribute('action', baseAction + params);
      }
    });
  }

  private loadAnimation() {
      'use strict';

      console.log('🚀 Loading animations for all devices');

      // Load scripts in the EXACT same way as your original, but with defer
      const scripts = [
        { src: 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js', loaded: false },
        { src: 'https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js', loaded: false },
        { src: 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js', loaded: false }
      ];

      // Simple script loader that matches original behavior
      function loadScriptSync(scriptObj: { loaded: boolean; src: string }, callback: () => void) {
        if (scriptObj.loaded) {
          callback();
          return;
        }

        const script = document.createElement('script');
        script.src = scriptObj.src;
        script.onload = () => {
          scriptObj.loaded = true;
          callback();
        };
        script.onerror = () => {
          console.warn(`Failed to load: ${scriptObj.src}`);
          callback(); // Continue anyway
        };
        document.head.appendChild(script);
      }

      // Load scripts sequentially like original
      loadScriptSync(scripts[0], () => {
        loadScriptSync(scripts[1], () => {
          loadScriptSync(scripts[2], () => {
            // Wait for DOM like original code
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAllAnimations);
            } else {
              initAllAnimations();
            }
          });
        });
      });

      function initAllAnimations() {
        console.log('🚀 Initializing animations...');

        // Add small delay to ensure DOM is fully ready
        setTimeout(() => {
          try {
            initAutoRotateTab();
            initAIAnimation();
            console.log('✅ All animations loaded successfully');
          } catch (error) {
            console.error('❌ Animation initialization failed:', error);
          }
        }, 100);
      }

      /// AUTO ROTATE TAB - FIXED CONTINUOUS RUNNING + CLICK BUG ///
      function initAutoRotateTab() {
        const tabs = document.querySelectorAll(".tab_link_wrap");
        const progressBar = document.querySelector(".procces_tab_running");
        const ring = document.querySelector(".progress_ring");
        const indicators = document.querySelectorAll(".process_tab_number");

        const totalTabs = tabs.length;
        const tabTime = 7000;
        const fullTime = 28000;

        let isInView = false;
        let isRunning = false;  // New flag to control the loop
        let rafId: number | null = null;
        let start: number | null = null;
        let lastIndex = -1;
        let isManualClick = false;  // Flag to prevent auto-click interference

        function activateTab(i: number) {
          if (lastIndex === i) return;

          // Only auto-click tabs when in view and not during manual click
          if (isInView && !isManualClick) {
            (tabs[i] as HTMLButtonElement).click();
          }

          // Always update indicators
          indicators.forEach((el, idx) => {
            el.classList.toggle("is-active", idx === i);
          });
          lastIndex = i;
        }

        function loop(time: number) {
          if (!start) start = time;
          const elapsed = (time - start) % fullTime;
          const percent = (elapsed / fullTime) * 100;
          const tabIndex = Math.floor(elapsed / tabTime);

          // Always update progress bar and activate tabs (even when out of view)
          activateTab(tabIndex);

          // Always update progress bar
          if (progressBar) {
            (progressBar as HTMLElement).style.width = `${percent}%`;
          }

          if (ring) {
            (ring as HTMLElement).style.transform = `translate(${percent}%, -50%)`;
          }

          // Keep loop running as long as isRunning is true
          if (isRunning) {
            rafId = requestAnimationFrame(loop);
          }
        }

        function startLoop(index = 0) {
          if (rafId) cancelAnimationFrame(rafId);
          start = performance.now() - index * tabTime;
          isRunning = true;  // Start the loop
          rafId = requestAnimationFrame(loop);
          console.log(`🚀 Auto rotate started from tab ${index}`);
        }

        function stopLoop() {
          if (rafId) cancelAnimationFrame(rafId);
          isRunning = false;  // Stop the loop
          start = null;
          lastIndex = -1;
          if (progressBar) (progressBar as HTMLElement).style.width = "0%";
          if (ring) (ring as HTMLElement).style.transform = `translate(0%, -50%)`;
        }

        tabs.forEach((tab, i) => {
          tab.addEventListener("click", (e) => {
            // Don't prevent default - let Webflow handle tab switching
            // e.preventDefault();  // REMOVED THIS

            console.log(`👆 Tab ${i} clicked`);

            // Set manual click flag to prevent auto-click interference
            isManualClick = true;

            // Update indicators immediately
            indicators.forEach((el, idx) => {
              el.classList.toggle("is-active", idx === i);
            });

            // Restart loop from clicked tab if running
            if (isRunning) {
              startLoop(i);
            } else if (isInView) {
              // Start if in view but not running
              startLoop(i);
            } else {
              // Just update visual state if out of view
              lastIndex = i;
            }

            // Reset manual click flag after a short delay
            setTimeout(() => {
              isManualClick = false;
            }, 200);
          });
        });

        if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
          gsap.registerPlugin(ScrollTrigger);

          ScrollTrigger.create({
            trigger: ".process_tab_wrapper",
            start: "top 80%",
            end: "bottom 20%",
            onEnter: () => {
              console.log('📍 Entered view');
              isInView = true;
              if (!isRunning) {
                startLoop(lastIndex !== -1 ? lastIndex : 0);
              }
            },
            onLeave: () => {
              console.log('📍 Left view (keeping loop running)');
              isInView = false;
              // Don't stop the loop - let it continue running
            },
            onEnterBack: () => {
              console.log('📍 Entered back');
              isInView = true;
              if (!isRunning) {
                startLoop(lastIndex !== -1 ? lastIndex : 0);
              }
            },
            onLeaveBack: () => {
              console.log('📍 Left back (keeping loop running)');
              isInView = false;
              // Don't stop the loop - let it continue running
            },
          });
        }

        console.log('✅ Auto rotate tab initialized (fixed continuous + click)');
      }

      ///// AI ANIMATION - EXACT ORIGINAL WITH MINOR OPTIMIZATIONS /////
      function initAIAnimation() {
        if (typeof gsap === 'undefined') {
          console.warn('⚠️ GSAP not loaded, skipping AI animation');
          return;
        }

        let activeTimelines = [];
        let svg1Tween;
        const triggers = document.querySelectorAll('.base_ai_question');
        const answers = document.querySelectorAll('.base_ai_answer_card');
        const svg1 = document.querySelector(".svg2_path");

        if (!triggers.length || !svg1) {
          console.log('⚠️ AI animation elements not found');
          return;
        }

        // Store Lottie instances
        const lottieInstances = new Map();

        // Update all animated gradient colors to #BCEBFF
        function updateLightColors() {
          for (let i = 1; i <= 8; i++) {
            const stops = document.querySelectorAll(`#animatedGradient${i} stop`);
            stops.forEach(stop => {
              stop.setAttribute('stop-color', '#BCEBFF');
            });
          }
        }

        // Initialize Lottie players - EXACT ORIGINAL
        function initializeLotties() {
          answers.forEach((card, index) => {
            const wrapper = card.querySelector('.lottie_wrapper');
            if (wrapper && wrapper.dataset.lottiePath) {
              // Create lottie-player element
              const lottiePlayer = document.createElement('lottie-player');
              lottiePlayer.src = wrapper.dataset.lottiePath;
              lottiePlayer.style.width = '100%';
              lottiePlayer.style.height = 'auto';
              // Don't set autoplay

              // Clear wrapper and add player
              wrapper.innerHTML = '';
              wrapper.appendChild(lottiePlayer);

              // Store reference
              lottieInstances.set(card, lottiePlayer);

              // Ensure it's stopped initially
              lottiePlayer.addEventListener('ready', () => {
                lottiePlayer.stop();
              });
            }
          });
        }

        // Initialize on load - EXACT ORIGINAL TIMING
        setTimeout(() => {
          initializeLotties();
          updateLightColors(); // Update colors after DOM is ready
        }, 100);

        function animateMainSVGs(callback) {
          if (svg1Tween) svg1Tween.kill();
          const length = svg1.getTotalLength();
          gsap.set(svg1, { strokeDasharray: length, strokeDashoffset: length });
          svg1Tween = gsap.to(svg1, {
            strokeDashoffset: 0,
            duration: 1.33,
            ease: "power3.inOut",
            onComplete: callback
          });
        }

        function triggerQuestion(trigger) {
          killAllAnimations();

          triggers.forEach(t => t.classList.remove("is-active"));
          trigger.classList.add("is-active");

          animateMainSVGs(() => {
            const pathsToAnimate = trigger.getAttribute('data-paths');
            if (!pathsToAnimate) return;
            const pathIds = pathsToAnimate.split(',');
            pathIds.forEach(pathId => animatePath(pathId.trim()));

            setTimeout(() => {
              const comboClass = Array.from(trigger.classList).find(cls => cls.startsWith("combo-"));

              // Hide all cards and stop lotties
              answers.forEach(ans => {
                gsap.set(ans, { display: "none" });
                const lottiePlayer = lottieInstances.get(ans);
                if (lottiePlayer && lottiePlayer.stop) {
                  lottiePlayer.stop();
                  lottiePlayer.seek(0);
                }
              });

              if (comboClass) {
                const matching = document.querySelector(`.base_ai_answer_card.${comboClass}`);
                if (matching) {
                  gsap.set(matching, { display: "block", opacity: 0, y: 20 });
                  gsap.to(matching, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    onComplete: () => {
                      // Play the Lottie animation immediately
                      const lottiePlayer = lottieInstances.get(matching);
                      if (lottiePlayer) {
                        // Ensure it's ready before playing
                        if (lottiePlayer.ready !== false) {
                          lottiePlayer.play();
                        } else {
                          // Wait for ready
                          lottiePlayer.addEventListener('ready', () => {
                            lottiePlayer.play();
                          }, { once: true });
                        }
                      }
                    }
                  });
                }
              }
            }, 1000);
          });
        }

        ScrollTrigger.create({
          trigger: ".base_ai_question",
          start: "top 90%",
          once: true,
          onEnter: () => {
            const first = document.querySelector('.base_ai_question');
            if (first) {
              triggerQuestion(first);
            }
          }
        });

        triggers.forEach(trigger => {
          trigger.addEventListener('click', () => {
            triggerQuestion(trigger);
          });
        });

        function killAllAnimations() {
          if (svg1Tween) svg1Tween.kill();
          activeTimelines.forEach(tl => tl && tl.kill());
          activeTimelines = [];

          document.querySelectorAll('[id$="_light"]').forEach(path => {
            gsap.set(path, { opacity: 0 });
          });

          for (let i = 1; i <= 8; i++) {
            const stops = document.querySelectorAll(`#animatedGradient${i} stop`);
            stops.forEach((stop, index) => {
              const baseOffset = index * 0.03;
              gsap.set(stop, { attr: { offset: `${baseOffset * 100}%` } });
            });
          }

          answers.forEach(ans => {
            gsap.set(ans, { display: "none" });
            const lottiePlayer = lottieInstances.get(ans);
            if (lottiePlayer && lottiePlayer.stop) {
              lottiePlayer.stop();
              lottiePlayer.seek(0);
            }
          });
        }

        function animatePath(pathId) {
          const lightPath = document.getElementById(pathId + '_light');
          if (!lightPath) return;

          const pathNumber = pathId.match(/\d+$/)[0];
          const gradientId = `#animatedGradient${pathNumber}`;
          const stops = document.querySelectorAll(`${gradientId} stop`);
          if (!stops.length) return;

          const tl = gsap.timeline({
            delay: 0.1,
            repeat: -1, // Loop infinitely
            repeatDelay: 0.5, // Small delay between loops
            onComplete: () => {
              const index = activeTimelines.indexOf(tl);
              if (index > -1) activeTimelines.splice(index, 1);
            }
          });
          activeTimelines.push(tl);

          const gradientWidth = 0.16;
          const startPosition = 1.0;
          const endPosition = -gradientWidth;

          tl.set(lightPath, { opacity: 1 });
          [0, 0.03, 0.06, 0.09, 0.13, 0.16].forEach((offset, i) => {
            tl.fromTo(stops[i],
              { attr: { offset: (offset + startPosition).toString() } },
              { attr: { offset: (offset + endPosition).toString() }, duration: 0.9, ease: "linear" }, 0);
          });
        }

        console.log('✅ AI animation initialized');
      }
    })();

}
