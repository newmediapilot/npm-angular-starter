import { createFeature, createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const deleteLink = createAction(
  '[Links] Delete',
  props<{ link: string }>(),
);

const initialState: string[] = ['Link1', 'Link2', 'Link3'];

const reducer = createReducer(
  initialState,
  on(deleteLink, (state, { link }) => state.filter((l) => l !== link)),
);

export const linksFeature = createFeature({
  name: 'links',
  reducer,
});
