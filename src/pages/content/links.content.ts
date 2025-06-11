import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { deleteLink } from '../../reducers';

@Component({
  selector: 'links-content',
  template: `
    <ul>
      <li class="underline" (click)="onClick(link)" *ngFor="let link of links$ | async">
        {{ link }} [click to delete]
      </li>
    </ul>
  `,
  imports: [NgForOf, AsyncPipe],
})
export class LinksContent {
  links$: Observable<string[]>;

  onClick(link: string) {
    this.store.dispatch(deleteLink({ link }));
  }

  constructor(private store: Store<{ links: string[] }>) {
    this.links$ = this.store.select('links');
  }
}
