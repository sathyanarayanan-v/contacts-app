import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Subscription } from 'rxjs';
import { contactsQuery } from '../../+state/selectors';
import { IContact } from '@contacts-app/shared';
import * as ContactActions from '../../+state/actions';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'contacts-app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit, OnDestroy {
  contact: IContact = null;
  disabled_status = false;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ViewContactComponent>
  ) {}
  subscription = new Subscription();
  create_contact_form: FormGroup;

  ngOnInit(): void {
    this.create_contact_form = this.fb.group({
      name: new FormControl(
        { value: '', disabled: this.disabled_status },
        Validators.required
      ),
      number: new FormControl(
        { value: '', disabled: this.disabled_status },
        Validators.required
      ),
      email: new FormControl({ value: '', disabled: this.disabled_status }, [
        Validators.email,
      ]),
      address: new FormControl({ value: '', disabled: this.disabled_status }),
      group: new FormControl({ value: '', disabled: this.disabled_status }),
      company: new FormControl({ value: '', disabled: this.disabled_status }),
      title: new FormControl(),
    });

    const sub1 = this.store
      .select(contactsQuery.getSelectedContacts)
      .subscribe((data: IContact) => {
        if (!data) {
          return;
        } else {
          const action = this.data.action;
          this.contact = data;
          if (action === 'view' || action === 'edit') {
            this.create_contact_form.patchValue(this.contact);
          }
          if (action === 'view') {
            console.log(this.create_contact_form.controls);
            Object.keys(this.contact).forEach((key) => {
              if (Object.keys(this.create_contact_form.controls).includes(key))
                this.create_contact_form.get(key).disable();
            });
          }
        }
      });
    this.subscription.add(sub1);
  }
  onButtonClicked() {
    const action = this.data.action;
    if (action === 'view') {
      this.store.dispatch(ContactActions.selectContacts({ ids: [] }));
      this.dialogRef.close();
    }
    if (action === 'create') {
      console.log(this.create_contact_form.value);
    }
    if (action === 'edit') {
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.disabled_status = false;
  }
}
