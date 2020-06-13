import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../contacts/contacts.service';

@Component({
  selector: 'contacts-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}
  onNewContactButtonClicked() {}
  searchContacts(searchText: any) {
    this.contactService.emitSearchContactValue(
      searchText.target.value.toLowerCase()
    );
  }
}
