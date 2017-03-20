/**
 * Angular
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Services
 */
import { LettersService } from './../letters.service';
import { MailboxService } from './../mailbox.service';
import { ToolsService } from './../tools/tools.service';
/**
 * Interfaces
 */
import { Letter } from './letter.interface';

@Component({
    selector: 'app-letter',
    templateUrl: './letter.component.html',
    styleUrls: ['./letter.component.css']
})
export class LetterComponent {
    // Письмо.
    public letter: Letter;
    // Имя почтового ящика.
    public mailboxName: string;
    // id письма.
    public letterId: string;
    // Массив потоков.
    private _streams: Array<any> = [];

    constructor(private _activatedRoute: ActivatedRoute,
                private _lettersService: LettersService,
                private _toolsService: ToolsService,
                private _mailboxService: MailboxService,
                private _router: Router) {

        console.log('LETTER IS CREATED');

        let params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .subscribe((params: {mailboxName: string, letterId: string}): void => {
                // Говорим, что началась загрузка контента.
                this._mailboxService.isLoading().next(true);
                // Сохраняем имя открытого роута.
                this.mailboxName = params['mailboxName'];
                // Сохраняем id письма.
                this.letterId = params['letterId'];
                // Загружаем письмо по его id.
                this._lettersService.getLetter(this.letterId)
                    .subscribe((letter: Letter): void => {
                        // Сохраняем письмо.
                        this.letter = letter;
                        // Говорим, что загрузка завершена.
                        this._mailboxService.isLoading().next(false);
                    });
            });

        // Подписываемся на потоки данных.
        this._updatePage() // Обновление страницы,
            ._urlUp(); // Вверх по url.
    }
    /**
     * Подписывается на обновления страницы.
     */
    private _updatePage (): LetterComponent {
        let pageUpdater = this._mailboxService.updatePage();
        // Добавляем поток в массив потоков.
        this._streams.push(pageUpdater);
        // Подписываемся на поток.
        pageUpdater
            .subscribe((): void => {
                this._router.navigateByUrl('./../');
            });
        return this;
    }
    /**
     * Подписываемся на то, чтобы подняться вверх по url.
     */
    private _urlUp (): LetterComponent {
        let up = this._toolsService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe((): void => {
                this._router.navigate(['../'], {relativeTo: this._activatedRoute});
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
