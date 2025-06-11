import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { Action } from '@ngrx/store';

export interface State {
  links: string[];
}

export const reducers: ActionReducerMap<State> = {
  links: linksReducer,
};

export function linksReducer(
  state: string[] = ['Link1', 'Link2', 'Link3'],
  action: Action,
): string[] {
  console.log('linksReducer@action', action);
  return state;
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
