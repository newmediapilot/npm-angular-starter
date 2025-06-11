import { Component } from '@angular/core';

@Component({
  selector: 'nav-global',
  template: `
    <div class="flex flex-row">
      <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-2xl">Home</a>
      </div>
      <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-2xl">About</a>
      </div>
      <div class="navbar bg-base-100 shadow-sm">
        <a class="btn btn-ghost text-2xl">Links</a>
      </div>
    </div>
  `,
})
export class NavGlobal {}
