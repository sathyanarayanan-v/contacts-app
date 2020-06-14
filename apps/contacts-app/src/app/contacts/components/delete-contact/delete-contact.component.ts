import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { contactsQuery } from '../../+state/selectors';
import * as ContactActions from '../../+state/actions';
@Component({
  selector: 'contacts-app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css'],
})
export class DeleteContactComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  subscription: Subscription;
  selected_contacts: Array<string> = null;
  ngOnInit(): void {
    this.subscription = this.store
      .select(contactsQuery.getSelectedContacts)
      .subscribe((data:Array<string>) => {
        if (!data) {
          return;
        } else {
          this.selected_contacts = data;
        }
      });
  }
  onDeleteClicked() {
    this.store.dispatch(
      ContactActions.deleteContacts({ ids: this.selected_contacts })
    );
  }
}
