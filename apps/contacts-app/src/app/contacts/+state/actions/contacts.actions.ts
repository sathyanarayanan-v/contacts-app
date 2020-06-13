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
export const selectContacts = createAction('[CONTACTS] SELECT CONTACTS TO DELETE',props<{ids:Array<string>}>())