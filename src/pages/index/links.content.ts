import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'links-content',
  template: `
    <ul>
      <li ngFor *ngFor="let link of links">{{ link }}</li>
    </ul>
  `,
  imports: [NgForOf],
})
export class LinksContent {
  links$: Observable<string[]>;

  constructor(private store: Store<{ links: string[] }>) {
    this.links$ = this.store.select('links');
  }

  get links() {
    return ['Link1', 'Link2', 'Link3'];
  }
}
