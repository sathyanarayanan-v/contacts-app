import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onNewContactButtonClicked(){
    console.log('hii')
  }

}
