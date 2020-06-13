import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '@contacts-app/shared';

@Pipe({
  name: 'filterContact'
})
export class FilterContactPipe implements PipeTransform {

  transform(contacts: IContact[], filter: string): any {
    console.log(filter)
    if (!contacts || !filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(filter)
    );
  }

}
