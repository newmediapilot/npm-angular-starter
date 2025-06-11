import { Component } from '@angular/core';

@Component({
  selector: 'main-preloader-loading',
  standalone: true,
  template: `
    <div class="flex justify-center items-center h-[100%]">
      <span class="loading loading-spinner loading-xl"></span>
    </div>
  `,
})
export class MainPreloaderLoading {}

@Component({
  selector: 'main-preloader-placeholder',
  standalone: true,
  template: `
    <div class="flex justify-center items-center h-[100%]">
      <span class="loading loading-spinner loading-xl"></span>
    </div>
  `,
})
export class MainPreloaderPlaceholder {}

@Component({
  selector: 'main-preloader-error',
  standalone: true,
  template: `
    <div class="flex justify-center items-center h-[100%]">
      <div>Failed to load large component.</div>
    </div>
  `,
})
export class MainPreloaderError {}
