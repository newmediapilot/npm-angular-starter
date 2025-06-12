import { createAction, props, Store } from '@ngrx/store';
import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FetchService } from '../../service/fetch.service';

export const loadListStart = createAction(
  '@list/loadListStart',
  props<{ data: any }>(),
);
export const loadListSuccess = createAction(
  '@list/loadListSuccess',
  props<{ data: any }>(),
);
export const loadListFailure = createAction(
  '@list/loadListFailure',
  props<{ error: any }>(),
);

@Injectable()
export class LoadListEffect {
  private url = 'http://localhost:3000/list';
  private actions$ = inject(Actions);
  private service = inject(FetchService);
  $effectConstruct = createEffect(() =>
    this.actions$.pipe(
      ofType(loadListStart),
      switchMap(() =>
        this.service.fetch(this.url).pipe(
          map((data) => loadListSuccess({ data })),
          catchError((error) => of(loadListFailure({ error }))),
        ),
      ),
    ),
  );
}

@Injectable({ providedIn: 'root' })
export class ResolveAbout implements Resolve<void> {
  private store = inject(Store);
  resolve(): void {
    this.store.dispatch(loadListStart({ data: null }));
    console.log('ResolveAbout Done');
  }
}
