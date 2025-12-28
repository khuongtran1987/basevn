import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hrm-page',
  imports: [],
  templateUrl: './hrm-page.html',
  styleUrl: './hrm-page.css',
})
export class HrmPage implements AfterViewInit {
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
