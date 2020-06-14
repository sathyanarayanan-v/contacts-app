import { createAction, props } from '@ngrx/store';
import { IContact } from '@contacts-app/api-interfaces';

export const loadContacts = createAction('[CONTACTS] LOAD CONTACTS');
export const loadContactsSuccess = createAction(
  '[CONTACTS] LOAD CONTACTS SUCCESS',
  props<{ contacts: Array<IContact> }>()
);
export const loadContactsFailure = createAction(
  '[CONTACTS] LOAD CONTACTS FAILURE',
  props<{ error: any }>()
);
export const selectContacts = createAction(
  '[CONTACTS] SELECT CONTACTS TO DELETE',
  props<{ ids: Array<string> | IContact }>()
);
export const deleteContacts = createAction(
  '[CONTACTS] DELETE CONTACT',
  props<{ ids: Array<string> }>()
);
export const deleteContactsSuccess = createAction(
  '[CONTACTS] DELETE CONTACTS SUCCESS',
  props<{ contacts: Array<IContact> }>()
);
export const deleteContactFailure = createAction(
  '[CONTACT] DELETE CONTACT FAILURE',
  props<{ error: any }>()
);
export const createContact = createAction(
  '[CONTACT] CREATE CONTACT',
  props<{ contact: IContact }>()
);
export const createContactSuccess = createAction(
  '[CONTACT] CREATE CONTACT SUCCESS',
  props<{ contact: IContact }>()
);
export const createContactFailure = createAction(
  '[CONTACT] CREATE CONTACT FAILURE',
  props<{ error: any }>()
);
export const updateContact = createAction(
  '[CONTACT] UPDATE CONTACT',
  props<{ contact: IContact }>()
);
export const updateContactSuccess = createAction(
  '[CONTACT] UPDATE CONTACT SUCCESS',
  props<{ contact: IContact }>()
);
export const updateContactFailure = createAction(
  '[CONTACT] UPDATE CONTACT FAILURE',
  props<{ error: any }>()
);
