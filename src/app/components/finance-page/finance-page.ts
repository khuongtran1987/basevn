import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-finance-page',
  imports: [],
  templateUrl: './finance-page.html',
  styleUrl: './finance-page.css',
})
export class FinancePage implements AfterViewInit {
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
