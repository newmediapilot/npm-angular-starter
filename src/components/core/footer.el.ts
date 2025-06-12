import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-el',
  standalone: true,
  template: `
      <footer class="sticky bottom-0 p-4 z-10">
          <ng-content/>
      </footer>
  `,
})
export class FooterEl {}
