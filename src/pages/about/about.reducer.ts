import { createFeature, createReducer, on } from '@ngrx/store';

import {
  loadListFailure,
  loadListStart,
  loadListSuccess,
} from './about.resolver';
import { aboutFixture } from './about.page';

const initialListState: any[] = [];
const reducer = createReducer(
  initialListState,
  on(loadListSuccess, (state: Array<any>, action) => {
    console.log('loadListSuccess', action.data);
    return [...action.data];
  }),
  on(loadListStart, (state: Array<any>, action) => {
    console.log('loadListStart', action.data);
    return [];
  }),
  on(loadListFailure, (state: Array<any>, action) => {
    console.log('loadListFailure', action.error);
    return [...aboutFixture.list];
  }),
);
export const aboutReducer = createFeature({
  name: 'list',
  reducer,
});
