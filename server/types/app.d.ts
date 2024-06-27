export interface ILetterHead {
  logo?: string;
  company_name?: string;
  phone_number?: string;
  email?: string;
  address_letterHead?: string;
}
export interface IStatement {
  referance_number?: string;
  attachment?: string;
  subject?: string;
}
export interface IRecipentAddress {
  name_recipent?: string;
  address_recipent?: string;
}

export interface IContent {
  opening?: string;
  content?: string;
  closing?: string;
}
export interface ISignature {
  name_signature?: string;
  city_name?: string;
  date?: string;
}

export interface ILetterTemplate {
  letterHead: ILetterHead;
  content: IContent;
  signature: ISignature;
  statement: IStatement;
  recipentAddress: IRecipentAddress;
}
