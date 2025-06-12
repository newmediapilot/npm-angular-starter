import { Component, Input } from '@angular/core';

@Component({
  selector: 'img-el',
  standalone: true,
  template: `<img
    [src]="src"
    class="opacity-0 transition-opacity duration-500 w-[100%] h-[100%]"
    [class.opacity-100]="loaded"
    [class.opacity-0]="!loaded"
    (load)="onLoad()"
  />`,
})
export class ImgEl {
  @Input() src!: string;
  loaded = false;

  onLoad() {
    this.loaded = true;
  }
}
