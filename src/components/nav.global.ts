import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';

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
          routerLink="/about/links"
          routerLinkActive="underline"
          [routerLinkActiveOptions]="{ exact: true }"
          class="btn btn-ghost text-2xl"
          >Links [{{ (links$ | async)?.length }}]</a
        >
      </div>
    </div>
  `,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, CommonModule],
  standalone: true,
})
export class NavGlobal {
  links$: Observable<string[]>;
  constructor(private store: Store<{ links: string[] }>) {
    this.links$ = this.store.select('links');
  }
}
