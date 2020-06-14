import { Action, createReducer, on } from '@ngrx/store';
import * as ContactsActions from '../actions/contacts.actions';
import { IContact } from '@contacts-app/api-interfaces';
import * as _ from 'lodash';
export const contactsFeatureKey = 'contacts';

export interface ContactsState {
  contacts: Array<IContact>;
  selectedContacts: Array<string> | IContact;
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
    const ids = contacts.map((contact) => contact._id);
    const cloned_state = _.cloneDeep(state);
    const updatedArray = cloned_state.contacts.filter(
      (contact) => !ids.includes(contact._id)
    );
    return {
      ...state,
      contacts:updatedArray
    };
  })
);
