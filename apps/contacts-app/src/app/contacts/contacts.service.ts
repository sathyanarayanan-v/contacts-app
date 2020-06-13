import { Injectable } from '@angular/core';
import { HttpService } from '@contacts-app/shared'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpService:HttpService) { }

  loadContacts = () => this.httpService.get('contacts')


}
