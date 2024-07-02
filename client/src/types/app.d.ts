export interface ILetter {
    companyName: string;
    phoneNumber: string;
    email: string;
    addres: string;
    image: File | null;
    referenceNumber : string,
    attachment : string,
    subject : string
    name: string,
    addresRecipient: string
    opening: string
    content: string
    closing: string
    cityName: string;
    date: string;
    nameSignature: string;
    imageSignature: File | null;
}