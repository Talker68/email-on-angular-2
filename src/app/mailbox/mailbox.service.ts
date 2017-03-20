/**
 * Angular
 */
import { Injectable } from '@angular/core';
/**
 * Interfaces
 */
import { Mailbox } from './mailbox.interface';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/**
 * Data
 */
import { mailbox } from './../app.data';

@Injectable()
export class MailboxService {
    private _loading: Subject<boolean> = new Subject<boolean>();
    private _updatePage: Subject<boolean> = new Subject<boolean>();

    constructor() {}

    /**
     * Обновление страницы.
     */
    public updatePage (): Subject<boolean> {
        if (this._updatePage.closed) {
            this._updatePage = new Subject<boolean>();
        }
        return this._updatePage;
    }
    /**
     * Поток для индикатора загрузки.
     */
    public isLoading (): Subject<boolean> {
        if (this._loading.closed) {
            this._loading = new Subject<boolean>();
        }
        return this._loading;
    }
    /**
     * Возвращает почтовый ящик.
     */
    public getMailbox (): Observable<Mailbox> {
        return mailbox.getMailbox();
    }
}
