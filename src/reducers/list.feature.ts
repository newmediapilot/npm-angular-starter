import { createFeature, createReducer } from '@ngrx/store';

const initialState: any[] = ['List1', 'List2', 'List3'];

const reducer = createReducer(initialState);

export const listFeature = createFeature({
  name: 'list',
  reducer,
});
