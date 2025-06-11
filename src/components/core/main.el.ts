import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-el',
  standalone: true,
  template: `
    <main>
      <ng-content></ng-content>
    </main>
  `,
})
export class MainEl {}
