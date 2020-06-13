import { Injectable } from '@nestjs/common';
import { ContactRepository } from './contacts.repository';
import { IContactSchema } from './contacts.schema';
import { IErrorMessage, IContact } from '@contacts-app/api-interfaces';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class ContactsService {
    constructor(private contactRepository:ContactRepository){}

    getContacts = async(): Promise<IContactSchema[] | IErrorMessage> => await this.contactRepository.fetchContacts()
    addContact = async(contact:IContact):Promise<IContactSchema | IErrorMessage> => await this.contactRepository.addNewContact(contact)
}
