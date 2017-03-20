/**
 * Angular
 */
import { Component } from '@angular/core';
/**
 * Services
 */
import { ContactsService } from './../contacts.service';


@Component({
    selector: 'app-contacts-tools',
    templateUrl: './contacts-tools.component.html',
    styleUrls: ['./contacts-tools.component.css']
})
export class ContactsToolsComponent {

    constructor(private _contactsService: ContactsService) {}
}
