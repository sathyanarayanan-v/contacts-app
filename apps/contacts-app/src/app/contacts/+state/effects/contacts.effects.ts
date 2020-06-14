import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ContactsActions from '../actions/contacts.actions';
import { ContactService } from '../../contacts.service';
import { SnackbarService, IContact } from '@contacts-app/shared';

@Injectable()
export class ContactsEffects {
  constructor(
    private actions$: Actions,
    private snackbar: SnackbarService,
    private contactService: ContactService
  ) {}
  fetchContacts = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.loadContacts),
      switchMap(() => {
        return this.contactService.loadContacts().pipe(
          map((res: any) =>
            ContactsActions.loadContactsSuccess({ contacts: res })
          ),
          catchError((error) => {
            this.snackbar.showSnackbar(
              'Unable to fetch contacts, please try again',
              'OK',
              5000,
              'red_snackbar'
            );
            return of(ContactsActions.loadContactsFailure({ error }));
          })
        );
      })
    );
  });
  addContact = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.createContact),
      switchMap(({ contact }) => {
        return this.contactService.createContact(contact).pipe(
          map((res: IContact) => {
            if (res.hasOwnProperty('error')) {
              this.snackbar.showSnackbar(
                'Unable to create contact, please try again',
                'OK',
                5000,
                'red_snackbar'
              );
              return ContactsActions.createContactFailure({ error: res });
            }
            return ContactsActions.createContactSuccess({ contact: res });
          }),
          catchError((error) => {
            this.snackbar.showSnackbar(
              'Unable to create contact, please try again',
              'OK',
              5000,
              'red_snackbar'
            );
            return of(ContactsActions.createContactFailure({ error }));
          })
        );
      })
    );
  });
  updateContact = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.updateContact),
      switchMap(({ contact }) => {
        return this.contactService.updateContacts(contact).pipe(
          map((res: IContact) => {
            if (res.hasOwnProperty('error')) {
              this.snackbar.showSnackbar(
                'Unable to update contact, please try again',
                'OK',
                5000,
                'red_snackbar'
              );
              return ContactsActions.updateContactFailure({ error: res });
            }
            return ContactsActions.updateContactSuccess({ contact: res });
          }),
          catchError((error) => {
            this.snackbar.showSnackbar(
              'Unable to update contact, please try again',
              'OK',
              5000,
              'red_snackbar'
            );
            return of(ContactsActions.updateContactFailure({ error }));
          })
        );
      })
    );
  });
  deleteContacts = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.deleteContacts),
      switchMap(({ ids }) => {
        return this.contactService.deleteContacts(ids).pipe(
          map((res: any) => {
            if (res.hasOwnProperty('error')) {
              this.snackbar.showSnackbar(
                'Unable to delete contact, please try again',
                'OK',
                5000,
                'red_snackbar'
              );
              return ContactsActions.deleteContactFailure({ error: res });
            }
            return ContactsActions.deleteContactsSuccess({ contacts: res });
          }),
          catchError((error) => {
            this.snackbar.showSnackbar(
              'Unable to delete contacts, please try again',
              'OK',
              5000,
              'red_snackbar'
            );
            return of(ContactsActions.deleteContactFailure({ error }));
          })
        );
      })
    );
  });
}
