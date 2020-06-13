import * as mongoose from 'mongoose';
export interface IContactSchema extends mongoose.Document {
  name?: string;
  number?: string;
  email?: string;
  address?: string;
  group?: 'FAMILY' | 'COLLEAGUES' | 'FRIENDS';
  company?: string;
  title?: string;
}
const isValidContactName = async name => {
    const contacts = await Contact.find({ name });
    if (contacts.length === 0) return true;
    return false;
  };
export const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate:isValidContactName
  },
  number: {
    type: String,
    required: true,
  },
  email:{
      type:String,
      required:true
  },
  address:{
      type:String,
      required:false
  },
  group:{
      type:String,
      required:false
  },
  company:{
      type:String,
      required:false
  },
  title:{
      type:String,
      required:false
  }
});
export const Contact = mongoose.model<IContactSchema>('Contact', ContactSchema, 'contacts');