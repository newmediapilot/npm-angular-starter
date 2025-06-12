import { MetaReducer } from '@ngrx/store';
import { isDevMode } from '@angular/core';
import { linksFeature } from './links.feature';
import { listFeature } from './list.feature';

export const reducers = {
  [linksFeature.name]: linksFeature.reducer,
  [listFeature.name]: listFeature.reducer,
};

export const metaReducers: MetaReducer[] = isDevMode() ? [] : [];
