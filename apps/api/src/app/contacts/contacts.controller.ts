import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { IContactSchema } from './contacts.schema';
import { IErrorMessage, IContact } from '@contacts-app/api-interfaces';

@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}
  @Get()
  async getContacts(): Promise<IContactSchema[] | IErrorMessage> {
    return await this.contactService.getContacts();
  }
  @Post()
  async createContact(@Body() contact:IContact): Promise<IContactSchema | IErrorMessage> {
    return await this.contactService.addContact(contact)
  }
}
