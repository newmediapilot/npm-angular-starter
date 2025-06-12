import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ImgEl } from '../../components/core/img.el';

interface ListItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'about-content',
  standalone: true,
  imports: [AsyncPipe, NgForOf, ImgEl],
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
            <a [href]="item.image"
               class="inline-block max-w-[200px]"
               target="_blank">
              <img-el [src]="item.image"></img-el>
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
