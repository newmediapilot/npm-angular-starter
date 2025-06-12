import { createFeature, createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

// Initial State
const initialState: string[] = ['Link1', 'Link2', 'Link3'];

// Key
export const deleteLink = createAction(
  '[Link] Delete',
  props<{ link: string }>(),
);

// Reducer
const reducer = createReducer(
  initialState,
  on(deleteLink, (state, { link }) => state.filter((l) => l !== link)),
);

// Slice
export const linksFeature = createFeature({
  name: 'links',
  reducer,
});
