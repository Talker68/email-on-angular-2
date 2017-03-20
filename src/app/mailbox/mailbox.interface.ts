import { Contact } from './contacts/contact/contact.interface';

export interface Mailbox {
    id: string;
    userId: string;
    email: string;
    name: string;
    photo: string;
    contacts: Array<Contact>;
}
