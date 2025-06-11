import { Component } from '@angular/core';

@Component({
  selector: 'bcrumbs-global',
  template: `
    <div class="breadcrumbs text-sm px-4">
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Links</a></li>
      </ul>
    </div>
  `,
})
export class BcrumbsGlobal {}
