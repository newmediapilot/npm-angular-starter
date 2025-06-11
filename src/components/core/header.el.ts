import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-el',
  standalone: true,
  template: `
    <header>
      <ng-content></ng-content>
    </header>
  `,
})
export class HeaderEl {}
