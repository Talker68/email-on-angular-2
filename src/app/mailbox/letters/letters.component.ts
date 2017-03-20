/**
 * Angular
 */
import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
/**
 * Interfaces
 */
import { Letter } from './../letter/letter.interface';
/**
 * Services
 */
import { LettersService } from './../letters.service';
import { SearchService } from './../menu/search/search.service';
import { MailboxService } from './../mailbox.service';
import { ToolsService } from './../tools/tools.service';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-letters',
    templateUrl: './letters.component.html',
    styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnDestroy {
    // Массив писем.
    public letters: Array<Letter>;
    // Название почтового ящика.
    public mailboxName: string;
    // Флаг, показывающий, идет загрузка или нет.
    public isLoading: boolean = false;
    // Флаг, показывающий, выделены ли все письма или нет.
    public checkedAll: boolean = false;
    // Фильтр для поиска.
    public filterForLetters: string;
    // Массив потоков.
    private _streams: Array<any> = [];

    constructor(private _lettersService: LettersService,
                private _toolsService: ToolsService,
                private _searchService: SearchService,
                private _mailboxService: MailboxService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute) {

        console.log('MAILBOX IS CREATED');

        let params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .pluck('mailboxName')
            .subscribe((mailboxName: string): void => {
                console.log('NEW PARAMS');
                // Очищаем массив писем.
                this.letters = [];
                // Очищаем массив выбранных писем.
                this._toolsService.clearSelected();
                // Говорим, что началась загрузка контента.
                this._mailboxService.isLoading().next(true);
                this.isLoading = true;
                // Определяем почтовый ящик.
                this.mailboxName = mailboxName;
                console.log('MAILBOX: ' + this.mailboxName);
                // Запрашиваем письма.
                this._requestLetters();
            });

        // Подписываемся на потоки данных.
        this._updateLetters() // Обновление списка писем,
            ._filter() // Фильтры,
            ._updatePage() // Обновление страницы,
            ._onCheckedAll(); // Выбор всех писем.
    }
    /**
     * Добавляет письмо в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    public onSelect (checked: boolean, letterId: string): void {
        if (checked === true) {
            this._toolsService.addToSelected(letterId);
        } else {
            this._toolsService.removeFromSelected(letterId);
        }
    }
    /**
     * Запрашивает письма для данного почтового ящика.
     */
    private _requestLetters (): void {
        this._lettersService.requestLetters(this.mailboxName);
    }
    /**
     * Подписывается на поток писем.
     */
    private _updateLetters (): LettersComponent {
        let updater = this._lettersService.updateLetters();
        // Добавляем поток в массив потоков.
        this._streams.push(updater);
        // Подписываемся на поток.
        updater
            .subscribe((letters: Array<Letter>): void => {
                console.log('DATA WERE UPDATED');
                // Получаем письма.
                this.letters = letters;
                // Отменяем состояние загрузки.
                this._mailboxService.isLoading().next(false);
                this.isLoading = false;
            });
        return this;
    }
    /**
     * Подписывается на поток фильтров поиска.
     */
    private _filter (): LettersComponent {
        let filter = this._searchService.filter();
        // Добавляем поток в массив потоков.
        this._streams.push(filter);
        // Подписываемся на поток.
        filter
            .subscribe((filter: string): void => {
                // Получаем фильтр для поиска из поле поиска.
                this.filterForLetters = filter;
            });
        return this;
    }
    /**
     * Подписывается на обновления страницы.
     */
    private _updatePage (): LettersComponent {
        let pageUpdater = this._mailboxService.updatePage();
        // Добавляем поток в массив потоков.
        this._streams.push(pageUpdater);
        // Подписываемся на поток.
        pageUpdater
            .subscribe((): void => {
                this._requestLetters();
            });
        return this;
    }
    /**
     * Подписывается на выделение всех писем.
     */
    private _onCheckedAll (): LettersComponent {
        let allChecker = this._toolsService.checkedAll();
        // Добавляем поток в массив потоков.
        this._streams.push(allChecker);
        // Подписываемся на поток.
        allChecker
            .subscribe((checkedAll: boolean): void => {
                this.checkedAll = checkedAll;
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
