import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { ContactsState, contactReducer } from '../contacts/+state/reducer/contacts.reducer';


export interface AppState {
    ContactsState:ContactsState
}

export const Reducers = combineReducers({
  contatState:contactReducer
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
