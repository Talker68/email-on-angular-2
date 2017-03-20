/**
 * Angular
 */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * Interface
 */
import { Contact } from './contact/contact.interface';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {
    transform (contacts: Array<Contact> , filter: string): Array<Contact> {
        if (!filter) {
            return contacts;
        }

        filter = filter.toLowerCase();

        return contacts.filter((contact: Contact): boolean => {
            if (contact.name.toLowerCase().includes(filter)) {
                return true;
            } else if (contact.email.toLowerCase().includes(filter)) {
                return true;
            } else if (contact.phone.toLowerCase().includes(filter)) {
                return true;
            } else {
                return false;
            }
        });
    }
}
