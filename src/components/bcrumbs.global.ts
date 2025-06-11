import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'bcrumbs-global',
  template: `
    <div class="text-sm p-4">
      <ul class="flex space-x-2 items-center">
        <li>
          <a
            routerLink="/"
            routerLinkActive
            #rafRoot="routerLinkActive"
            [class.opacity-100]="rafRoot.isActive"
            [class.opacity-0]="!rafRoot.isActive"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            / Home
          </a>
        </li>
        <li>
          <a
            routerLink="/about"
            routerLinkActive
            #rafAbout="routerLinkActive"
            [class.opacity-100]="rafAbout.isActive"
            [class.opacity-0]="!rafAbout.isActive"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            / About
          </a>
        </li>
        <li>
          <a
            routerLink="/about/links"
            routerLinkActive
            #rafAboutLinks="routerLinkActive"
            [class.opacity-100]="rafAboutLinks.isActive"
            [class.opacity-0]="!rafAboutLinks.isActive"
            [routerLinkActiveOptions]="{ exact: false }"
          >
            / Links
          </a>
        </li>
      </ul>
    </div>
  `,
  imports: [RouterLink, RouterModule, RouterLinkActive],
})
export class BcrumbsGlobal {}
