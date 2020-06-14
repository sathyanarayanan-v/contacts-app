import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../contacts/contacts.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewContactComponent } from '../../../contacts/pages/view-contact/view-contact.component';

@Component({
  selector: 'contacts-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private contactService: ContactService,private dialog:MatDialog) {}

  ngOnInit(): void {}
  onNewContactButtonClicked() {
    this.dialog.open(ViewContactComponent, { width: '700px', height: '600px',data:{action:"create"} });
  }
  searchContacts(searchText: any) {
    this.contactService.emitSearchContactValue(
      searchText.target.value.toLowerCase()
    );
  }
}
