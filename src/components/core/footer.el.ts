import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer-el',
  standalone: true,
  template: `
    <footer>
      <ng-content></ng-content>
    </footer>
  `,
})
export class FooterEl {}
