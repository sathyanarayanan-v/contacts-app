export interface Message {
  message: string;
}
export interface IContact{
  _id?:string;
  name?:string;
  number?:string;
  email?:string;
  address?:string;
  group?:"FAMILY" | "COLLEAGUES" | "FRIENDS";
  company?:string;
  title?:string;
}
export interface IErrorMessage{
  error:boolean,
  message:string
}