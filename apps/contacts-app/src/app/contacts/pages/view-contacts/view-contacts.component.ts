import { Component, OnInit } from '@angular/core';
import { IContact } from '@contacts-app/api-interfaces';
import * as ContactActions from '../../+state/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Subscription } from 'rxjs';
import { contactsQuery } from '../../+state/selectors';
import { MatDialog } from '@angular/material/dialog';
import { DeleteContactComponent } from '../../components/delete-contact/delete-contact.component';
@Component({
  selector: 'contacts-app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css'],
})
export class ViewContactsComponent implements OnInit {
  default_checked_value_header = false;
  constructor(private store: Store<AppState>, private dialog: MatDialog) {}
  subscription: Subscription;
  contacts: Array<IContact>;
  selected_contacts: Array<string> = [];
  ngOnInit(): void {
    this.store.dispatch(ContactActions.loadContacts());
    this.subscription = this.store
      .select(contactsQuery.getContacts)
      .subscribe((data) => {
        if (!data) {
          return;
        } else {
          this.contacts = data;
          console.log(this.contacts);
        }
      });
  }
  onListChecked(_id: string) {
    if (this.selected_contacts.includes(_id)) {
      this.selected_contacts = this.selected_contacts.filter(
        (id) => _id !== id
      );
    } else {
      this.selected_contacts.push(_id);
    }
    this.default_checked_value_header =
      this.selected_contacts.length === this.contacts.length;
  }
  deleteContacts() {
    this.store.dispatch(
      ContactActions.selectContacts({ ids: this.selected_contacts })
    );
    this.dialog.open(DeleteContactComponent);
  }
  onHeaderChecked() {
    this.default_checked_value_header = !this.default_checked_value_header;
    this.selected_contacts = this.default_checked_value_header
      ? this.contacts.map((contact) => contact._id)
      : [];
  }
  onViewContactClicked(contact: any) {}
  onDeleteContactClicked(_id: string) {
    this.store.dispatch(ContactActions.selectContacts({ ids: [_id] }));
    this.dialog.open(DeleteContactComponent);
  }
}
