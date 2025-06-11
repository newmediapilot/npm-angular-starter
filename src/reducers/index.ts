import { isDevMode } from '@angular/core';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
  links: string[];
  list: any;
}

/**
 * Links
 */

export const actionLinkDelete = createAction(
  '[Links] Delete Link',
  props<{ link: string }>(),
);

const initialLinkState: string[] = ['Link1', 'Link2', 'Link3'];

const _linksReducer = createReducer(
  initialLinkState,
  on(actionLinkDelete, (state, { link }) => state.filter((l) => l !== link)),
);

export function linksReducer(state: string[] | undefined, action: Action) {
  return _linksReducer(state, action);
}

/**
 * List (loaded)
 */



export const actionListDelete = createAction(
    '[Lists] Delete List',
    props<{ link: string }>(),
);

const initialListState: any = ['List1', 'List2', 'List3'];

const _listReducer = createReducer(
    initialListState,
    on(actionListDelete, (state, { link }) => state.filter((l:string) => l !== link)),
);

export function listReducer(state: any | undefined, action: Action) {
    return _listReducer(state, action);
}

export const reducers: ActionReducerMap<State> = {
  links: linksReducer,
  list: listReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
