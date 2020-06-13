import { Component, OnInit } from '@angular/core';
import { IContact } from '@contacts-app/api-interfaces';
import * as ContactActions from '../../+state/actions'
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { Subscription } from 'rxjs';
import { contactsQuery } from '../../+state/selectors';
@Component({
  selector: 'contacts-app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  default_checked_value_header = false;
  constructor(private store:Store<AppState>) { }
  subscription:Subscription
  contacts:Array<IContact>
  ngOnInit(): void {
    this.store.dispatch(ContactActions.loadContacts())
    this.subscription = this.store.select(contactsQuery.getContacts).subscribe(data => {
      if(!data){
        return
      }
      else{
        this.contacts = data
        console.log(this.contacts)
      }
    })
  }
  onHeaderChecked(){
    console.log('checked')
  }
  onViewContactClicked(contact:any){

  }
  onDeleteContactClicked(contact:any){
    
  }
}
