import { ContactsState } from "../reducer/contacts.reducer";
import { AppState } from '../../../store/app.reducer';
import { createSelector } from '@ngrx/store';

const contactState = (state:AppState) =>state.ContactsState

const getContacts = createSelector(contactState,(state:ContactsState)=>state.contatcs)

export const contactsQuery = {
  getContacts
}