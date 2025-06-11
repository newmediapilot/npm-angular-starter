import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-global',
  template: `
    <div class="flex flex-row">
      <div class="navbar bg-base-100 shadow-sm">
        <a
          routerLink="/"
          routerLinkActive="underline"
          [routerLinkActiveOptions]="{ exact: true }"
          class="btn btn-ghost text-2xl"
          >Home</a
        >
      </div>
      <div class="navbar bg-base-100 shadow-sm">
        <a
          routerLink="/about"
          routerLinkActive="underline"
          [routerLinkActiveOptions]="{ exact: true }"
          class="btn btn-ghost text-2xl"
          >About</a
        >
      </div>
      <div class="navbar bg-base-100 shadow-sm">
        <a
          routerLink="/links"
          routerLinkActive="underline"
          [routerLinkActiveOptions]="{ exact: true }"
          class="btn btn-ghost text-2xl"
          >Links</a
        >
      </div>
    </div>
  `,
  imports: [RouterLink, RouterLinkActive],
  standalone: true,
})
export class NavGlobal {}
