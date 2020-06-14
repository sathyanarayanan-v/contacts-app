import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '@contacts-app/shared';

@Pipe({
  name: 'filterContact',
})
export class FilterContactPipe implements PipeTransform {
  transform(contacts: IContact[], filter: string): any {
    if (!contacts || !filter) {
      return contacts;
    }
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().split(' ').join('').includes(filter) ||
        contact.email.toLowerCase().split(' ').join('').includes(filter) ||
        contact.number.toLowerCase().split(' ').join('').includes(filter)
    );
  }
}
