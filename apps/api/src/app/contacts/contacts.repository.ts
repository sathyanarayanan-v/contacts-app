import { CommonService } from '../common/common.service';
import { IContactSchema, Contact } from './contacts.schema';
import { IErrorMessage, IContact } from '@contacts-app/api-interfaces';

export class ContactRepository {
  commonService: CommonService;
  constructor() {
    this.commonService = new CommonService();
  }

  fetchContacts = async (): Promise<IContactSchema[] | IErrorMessage> =>
    await Contact.find()
      .then((contacts) => contacts)
      .catch((err) =>
        this.commonService.sendErrorMessage(
          `Unable to fetch contacts. Error :: ${err}`
        )
      );
  addNewContact = async (
    contact: IContact
  ): Promise<IContactSchema | IErrorMessage> =>
    await new Contact(contact)
      .save()
      .then((newContact) => newContact)
      .catch((err) => {
        console.log(err)
        return this.commonService.sendErrorMessage(
          `Unable to insert contact. Error :: Contact name already exist`
        );
      });

  deleteContactById = async (
    _id: string
  ): Promise<IContactSchema | IErrorMessage> =>
    await Contact.findOneAndDelete({ _id })
      .then((contact) => contact)
      .catch((error) =>
        this.commonService.sendErrorMessage(
          `Unable to delete contact.Error :: ${error}`
        )
      );
}
