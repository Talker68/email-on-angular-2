/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Services
 */
import { MailboxService } from './../mailbox.service';
/**
 * Interfaces
 */
import { Contact } from './contact/contact.interface';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
/**
 * Data
 */
import { mailbox } from './../../app.data';

@Injectable()
export class ContactsService {
    private _contactsStream: Subject<Contact[]> = new Subject<Contact[]>();
    private _urlUp: Subject<boolean> = new Subject<boolean>();

    constructor(private _mailboxService: MailboxService,
                private _router: Router) {}

    /**
     * Возвращает поток из контакта по id.
     */
    public getContact (contactId: string): Observable<Contact> {
        return mailbox.getContact(contactId);
    }
    /**
     * Возвращает поток из массива контактов по значению.
     */
    public getContactsByValue (value: string): Observable<Contact[]> {
        return mailbox.getContacts(value);
    }
    /**
     * Возвращает поток из массива контактов.
     */
    public requestContacts () {
        console.log('SERVER REQUEST');
        mailbox.getContacts()
            .subscribe((contacts: Array<Contact>): void => {
                this.updateContacts().next(contacts);
            });
    }
    /**
     * Обновление списка контактов.
     */
    public updateContacts (): Subject<Contact[]> {
        console.log('UPDATING CONTACTS LIST');
        if (this._contactsStream.closed) {
            this._contactsStream = new Subject<Contact[]>();
        }
        return this._contactsStream;
    }
    /**
     * Возвращает поток, который говорит, подняться вверх по url.
     */
    public urlUp (): Subject<boolean> {
        if (this._urlUp.closed) {
            this._urlUp = new Subject<boolean>();
        }
        return this._urlUp;
    }
    /**
     * Добавляет контакт.
     */
    public saveContact (contact: {
        id?: string;
        name: string,
        email: string,
        phone: string,
        photo: string
    }): ContactsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        mailbox.saveContact(contact)
            .subscribe(() => {
                console.log('CONTACT SAVED');
                this.urlUp().next(true);
            });
        return this;
    }
    /**
     * Удаляет контакт.
     */
    public removeContact (contactId: string): ContactsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        mailbox.removeContact(contactId)
            .subscribe((restContacts: Array<Contact>) => {
                console.log('CONTACT WAS REMOVED');
                // Обновляет контакты.
                this.updateContacts().next(restContacts);
            });
        return this;
    }
}
