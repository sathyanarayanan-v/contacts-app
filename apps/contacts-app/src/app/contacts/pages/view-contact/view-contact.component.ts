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
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ViewContactComponent>
  ) {}

  create_contact = false;
  contact: IContact = null;
  disabled_status = false;
  subscription = new Subscription();
  create_contact_form: FormGroup;
  same_contact_name = false;
  same_contact_number = false;
  same_contact = false;
  contacts: Array<IContact> = null;

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
            Object.keys(this.contact).forEach((key) => {
              if (Object.keys(this.create_contact_form.controls).includes(key))
                this.create_contact_form.get(key).disable();
            });
          }
          if (action === 'create') {
            this.create_contact = true;
          }
        }
      });
    const sub2 = this.store
      .select(contactsQuery.getContacts)
      .subscribe((data) => {
        if (!data) {
          return;
        } else {
          this.contacts = data;
        }
      });
    this.subscription.add(sub1);
    this.subscription.add(sub2);
  }
  checkForExistenceInName($event) {
    const value = $event.target.value.toLowerCase();
    this.same_contact_name = this.contacts
      .map((contact) => contact.name.toLowerCase())
      .includes(value);
    this.same_contact = this.same_contact_name && this.same_contact_number;
  }
  checkForExistenceInNumber($event) {
    const value = $event.target.value.toLowerCase();
    this.same_contact_number = this.contacts
      .map((contact) => contact.number.toLowerCase())
      .includes(value);

    this.same_contact = this.same_contact_name && this.same_contact_number;
  }
  onButtonClicked() {
    const action = this.data.action;
    if (action === 'view') {
      this.store.dispatch(ContactActions.selectContacts({ ids: [] }));
      this.dialogRef.close();
    }
    if (action === 'create') {
      this.store.dispatch(
        ContactActions.createContact({
          contact: this.create_contact_form.value,
        })
      );
      this.dialogRef.close();
    }
    if (action === 'edit') {
      this.store.dispatch(
        ContactActions.updateContact({
          contact: { ...this.create_contact_form.value, _id: this.contact._id },
        })
      );
      this.dialogRef.close();
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.disabled_status = false;
  }
}
