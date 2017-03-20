/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/**
 * Interfaces
 */
import { Mailbox } from './mailbox.interface';
/**
 * Services
 */
import { MailboxService } from './mailbox.service';
/**
 * Rxjs
 */
import 'rxjs/add/operator/pluck';

@Component({
    selector: 'app-mailbox',
    templateUrl: './mailbox.component.html',
    styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
    public mailbox: Mailbox;
    public loading: boolean;

    constructor(private _activatedRoute: ActivatedRoute,
                private _router: Router,
                private _mailboxService: MailboxService) {
        this._mailboxService.getMailbox()
            .subscribe((mailbox: Mailbox): void => {
                this.mailbox = mailbox;
            });

        // Индикатор загрузки
        this._mailboxService.isLoading()
            .subscribe((isLoading: boolean): void => {
                this.loading = isLoading;
            });
    }

    /**
     * Обновляет данные.
     */
    public updatePage (): void {
        this.loading = true;
        this._mailboxService.updatePage().next(true);
    }

    ngOnInit() {}
}
