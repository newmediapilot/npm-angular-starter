import { Component, Input } from '@angular/core';

@Component({
  selector: 'aside-el',
  standalone: true,
  template: `
    <aside>
      <ng-content></ng-content>
    </aside>
  `,
})
export class AsideEl {}
