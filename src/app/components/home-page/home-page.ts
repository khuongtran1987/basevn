import { AfterViewInit, Component } from '@angular/core';
import { ScriptLoader } from '../../shared/script-loader';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  private readonly scripts = [
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdn.prod.website-files.com/6825ae09c11a1a7d6a345ec6/js/webflow.schunk.36b8fb49256177c8.js',
    'https://cdn.prod.website-files.com/6825ae09c11a1a7d6a345ec6/js/webflow.schunk.b2ce14101321326c.js',
    'https://cdn.prod.website-files.com/6825ae09c11a1a7d6a345ec6/js/webflow.schunk.1c67051a675c63e5.js',
    'https://cdn.prod.website-files.com/6825ae09c11a1a7d6a345ec6/js/webflow.schunk.121b0d7ff03e0f4a.js',
    'https://cdn.prod.website-files.com/6825ae09c11a1a7d6a345ec6/js/webflow.57edc406.5dbb9d5408148d71.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js',
  ];

  constructor(private readonly scriptLoader: ScriptLoader) {}

  ngAfterViewInit() {
    for (const src of this.scripts) {
      const promise = this.scriptLoader.loadScript(src.split('/').pop() || src, src)
      Promise.resolve(promise).then()
    }

    // Sau khi tất cả script load xong, có thể init lại Webflow nếu cần
    // Ví dụ: if ((window as any).Webflow) (window as any).Webflow.destroy(); (window as any).Webflow.ready();
    console.log('All scripts loaded!');
  }
}
