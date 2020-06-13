import { Component, OnInit, OnDestroy } from '@angular/core';
import { IContact } from '@contacts-app/api-interfaces';
import * as ContactActions from '../../+state/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Subscription } from 'rxjs';
import { contactsQuery } from '../../+state/selectors';
import { MatDialog } from '@angular/material/dialog';
import { DeleteContactComponent } from '../../components/delete-contact/delete-contact.component';
import { ContactService } from '../../contacts.service';
import { ViewContactComponent } from '../view-contact/view-contact.component';
@Component({
  selector: 'contacts-app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit, OnDestroy {
  default_checked_value_header = false;
  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private contactService: ContactService
  ) {}
  subscription = new Subscription();
  contacts: Array<IContact>;
  selected_contacts: Array<string> = [];
  contact_name: string;
  ngOnInit(): void {
    this.store.dispatch(ContactActions.loadContacts());
    const sub1 = this.store
      .select(contactsQuery.getContacts)
      .subscribe((data) => {
        if (!data) {
          return;
        } else {
          this.contacts = data;
          console.log(this.contacts);
        }
      });
    const sub2 = this.contactService.searchTextObserver.subscribe((data) => {
      this.contact_name = data;
    });

    this.subscription.add(sub1);
    this.subscription.add(sub2);
  }
  viewContact(contact: IContact) {
    this.dialog.open(ViewContactComponent, { width: '500px', height: '500px' });
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
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
