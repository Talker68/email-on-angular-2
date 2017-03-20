/**
 * Angular
 */
import { Component, OnDestroy } from '@angular/core';
/**
 * Interfaces
 */
import { Contact } from './contact/contact.interface';
/**
 * Services
 */
import { ContactsService } from './contacts.service';
import { SearchService } from './../menu/search/search.service';
import { MailboxService } from './../mailbox.service';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnDestroy {
    // Массив контактов.
    public contacts: Array<Contact>;
    // Флаг, показывающий, идет загрузка или нет.
    public isLoading: boolean = false;
    // Фильтр для поиска.
    public filterForContacts: string;
    // Массив потоков.
    private _streams: Array<any> = [];

    constructor(private _contactsService: ContactsService,
                private _searchService: SearchService,
                private _mailboxService: MailboxService) {

        console.log('CONTACTS IS CREATED');

        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        this.isLoading = true;
        // Запрашиваем контакты.
        this._requestContacts();
        // Подписываемся на потоки данных.
        this._updateContacts() // Обновление списка контактов,
            ._filter() // Фильтры.
    }
    /**
     * Запрашивает контакты.
     */
    private _requestContacts (): void {
        this._contactsService.requestContacts();
    }
    /**
     * Подписывается на поток контактов.
     */
    private _updateContacts (): ContactsComponent {
        let updater = this._contactsService.updateContacts();
        // Добавляем поток в массив потоков.
        this._streams.push(updater);
        // Подписываемся на поток.
        updater
            .subscribe((contacts: Array<Contact>): void => {
                console.log(this.contacts);
                console.log('DATA WERE UPDATED');
                // Получаем контакты.
                this.contacts = contacts;
                // Отменяем состояние загрузки.
                this._mailboxService.isLoading().next(false);
                this.isLoading = false;
            });
        return this;
    }
    /**
     * Подписывается на поток фильтров поиска.
     */
    private _filter (): ContactsComponent {
        let filter = this._searchService.filter();
        // Добавляем поток в массив потоков.
        this._streams.push(filter);
        // Подписываемся на поток.
        filter
            .subscribe((filter: string): void => {
                // Получаем фильтр для поиска из поле поиска.
                this.filterForContacts = filter;
            });
        return this;
    }

    ngOnDestroy () {
        console.log(this._streams.length + ' STREAMS WERE UNSUBSCRIBED');
        this._streams.forEach((stream): void => {
            stream.unsubscribe();
        });
    }
}
