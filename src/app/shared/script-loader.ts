import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScriptLoader {
  private scripts: { [key: string]: { loaded: boolean; src: string } } = {};

  loadScript(name: string, src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.scripts[name]?.loaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = false; // Load theo thứ tự
      script.onload = () => {
        this.scripts[name] = { loaded: true, src };
        resolve();
      };
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  }
}
