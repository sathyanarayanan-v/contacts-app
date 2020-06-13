import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import * as ContactsActions from '../actions/contacts.actions';


@Injectable()
export class ContactsEffects {

  constructor(private actions$: Actions) {}

}
