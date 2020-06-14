import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'contacts-app-share-contact',
  templateUrl: './share-contact.component.html',
  styleUrls: ['./share-contact.component.css']
})
export class ShareContactComponent implements OnInit {
  contactInfo:string
  onDialogYes:boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.contactInfo = `BEGIN:VCARD
VERSION:3.0
N:${this.data.contact.name}
ORG:${this.data.contact.company}
EMAIL:${this.data.contact.email}
TEL;TYPE=voice,work,pref:${this.data.contact.number}
END:VCARD
`
  }


}
