import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { InjectionToken } from '@angular/core';


export interface AppState {
    ContactsState:{"check":""}
}

export const Reducers = combineReducers({
  
});

export const ReducerToken = new InjectionToken<ActionReducerMap<AppState>>(
  'Reducers'
);

export function getReducers() {
  return Reducers;
}

export const ReducerProvider = [
  { provide: ReducerToken, useFactory: getReducers }
];
