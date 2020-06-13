import { Action, createReducer, on } from '@ngrx/store';
import * as ContactsActions from '../actions/contacts.actions';
import { IContact } from '@contacts-app/api-interfaces';

export const contactsFeatureKey = 'contacts';

export interface ContactsState {
contacts:Array<IContact>

}

export const initialState: ContactsState = {
  contacts:[]
};


export const contactReducer = createReducer(
  initialState,
  on(ContactsActions.loadContactsSuccess,(state,{contacts})=> {
    return {
      ...state,
      contacts
    }
  })
);

