import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ContactsActions from '../actions/contacts.actions';
import { ContactService } from '../../contacts.service';
import {SnackbarService} from '@contacts-app/shared'

@Injectable()
export class ContactsEffects {
  constructor(private actions$: Actions, private snackbar: SnackbarService,private contactService:ContactService) {}
  fetchQuotes = createEffect(() => {
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
}
