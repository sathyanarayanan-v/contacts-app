import { Action, createReducer, on } from '@ngrx/store';
import * as ContactsActions from '../actions/contacts.actions';
import { IContact } from '@contacts-app/api-interfaces';

export const contactsFeatureKey = 'contacts';

export interface ContactsState {
  contacts: Array<IContact>;
  selectedContacts: Array<string>;
}

export const initialState: ContactsState = {
  contacts: [],
  selectedContacts: [],
};

export const contactReducer = createReducer(
  initialState,
  on(ContactsActions.loadContactsSuccess, (state, { contacts }) => {
    return {
      ...state,
      contacts,
    };
  }),
  on(ContactsActions.selectContacts, (state, { ids }) => {
    return {
      ...state,
      selectedContacts: ids,
    };
  }),
  on(ContactsActions.deleteContactsSuccess, (state, { contacts }) => {
    return {
      ...state,
      contacts,
    };
  })
);
