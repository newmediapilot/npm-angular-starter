import { isDevMode } from '@angular/core';
import { MetaReducer } from '@ngrx/store';
import { StoreType } from './store.type';

export const metaReducers: MetaReducer<StoreType>[] = isDevMode() ? [] : [];
