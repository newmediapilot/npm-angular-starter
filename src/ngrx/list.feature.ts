import { createFeature, createReducer } from '@ngrx/store';

// Initial State
const initialState: any[] = [];

// Reducer
const reducer = createReducer(initialState);

// Slice
export const listFeature = createFeature({
  name: 'list',
  reducer,
});
