import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgForOf } from '@angular/common';

interface ListItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'about-content',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of list$ | async">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>
            <a [href]="item.image" target="_blank" rel="noopener noreferrer">
              <img [src]="item.image" [alt]="item.title" width="100" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class AboutContent {
  list$: Observable<ListItem[]>;

  constructor(private store: Store<{ list: ListItem[] }>) {
    this.list$ = this.store.select('list');
  }
}
