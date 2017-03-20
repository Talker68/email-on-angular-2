/**
 * Angular
 */
import { Component, Input } from '@angular/core';
/**
 * Services
 */
import { ContactsService } from './../contacts.service';

/**
 * Interfaces
 */
import { Contact } from './contact.interface';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    @Input()
    public contact: Contact;

    constructor(private _contactsService: ContactsService) {}

    /**
     * Обработчик клика по кнопке удаления.
     */
    public onDelete () {
        this._contactsService.removeContact(this.contact.id);
    }
}
