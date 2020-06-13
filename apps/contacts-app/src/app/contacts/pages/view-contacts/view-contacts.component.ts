import { Component, OnInit } from '@angular/core';
import { IContact } from '@contacts-app/api-interfaces';
import * as ContactActions from '../../+state/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
@Component({
  selector: 'contacts-app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  default_checked_value_header = false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(ContactActions.loadContacts())
  }
  onHeaderChecked(){
    console.log('checked')
  }
  onViewContactClicked(contact:any){

  }
  onDeleteContactClicked(contact:any){
    
  }
}
