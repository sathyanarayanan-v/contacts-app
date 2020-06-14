import { ContactsState } from '../reducer/contacts.reducer';
import { AppState } from '../../../store/app.reducer';
import { createSelector } from '@ngrx/store';

const contactState = (state: AppState) => state.contactState;

const getContacts = createSelector(
  contactState,
  (state: ContactsState) => state.contacts
);
const getSelectedContacts = createSelector(
  contactState,
  (state: ContactsState) => state.selectedContacts
);
export const contactsQuery = {
  getContacts,
  getSelectedContacts,
};
