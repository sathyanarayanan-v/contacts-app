import { Injectable } from '@angular/core';
import { HttpService } from '@contacts-app/shared';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpService: HttpService) {}

  private searchTerm: Subject<any> = new Subject<any>();
  public searchTextObserver: Observable<any> = this.searchTerm.asObservable();

  loadContacts = () => this.httpService.get('contacts');

  deleteContacts = (ids: Array<string>) =>
    this.httpService.post('contacts/delete', ids);
  
    emitSearchContactValue = (name: string) => this.searchTerm.next(name);
}
