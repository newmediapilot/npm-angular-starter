import { isDevMode } from '@angular/core';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  links: string[];
}

export const deleteLink = createAction(
  '[Links] Delete Link',
  props<{ link: string }>(),
);

const initialState: string[] = ['Link1', 'Link2', 'Link3'];

const _linksReducer = createReducer(
  initialState,
  on(deleteLink, (state, { link }) => state.filter((l) => l !== link)),
);

export function linksReducer(state: string[] | undefined, action: Action) {
  return _linksReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
  links: linksReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
