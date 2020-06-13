import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../contacts/contacts.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'contacts-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private contactService: ContactService,private dialog:MatDialog) {}

  ngOnInit(): void {}
  onNewContactButtonClicked() {
    // this.dialog.open()
  }
  searchContacts(searchText: any) {
    this.contactService.emitSearchContactValue(
      searchText.target.value.toLowerCase()
    );
  }
}
