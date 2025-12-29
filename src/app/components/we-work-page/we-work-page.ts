import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-we-work-page',
  imports: [],
  templateUrl: './we-work-page.html',
  styleUrl: './we-work-page.css',
})
export class WeWorkPage implements AfterViewInit {
  ngAfterViewInit() {
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
    }, 200);
  }
}
