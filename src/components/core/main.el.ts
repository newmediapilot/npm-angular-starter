import { Component, Input } from '@angular/core';

@Component({
  selector: 'main-el',
  standalone: true,
  template: `
    <main class="p-4">
      <ng-content></ng-content>
    </main>
  `,
})
export class MainEl {}
