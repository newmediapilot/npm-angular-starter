import { isDevMode } from '@angular/core';
import {MetaReducer} from '@ngrx/store';

/**
 * Main State
 */
export interface State {
  links?: string[];
  list?: any[];
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
