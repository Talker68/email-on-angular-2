/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Services
 */
import { LettersService } from './../letters.service';
import { MailboxService } from './../mailbox.service';
/**
 * Interfaces
 */
import { Letter } from './../letter/letter.interface';
/**
 * Rxjs
 */
import { Subject } from 'rxjs/Subject';
/**
 * Data
 */
import { letters } from './../../app.data';

@Injectable()
export class ToolsService {
    private _checkedAll: Subject<boolean> = new Subject<boolean>();
    private _urlUp: Subject<boolean> = new Subject<boolean>();
    private _selectedLettersIds: Array<string> = [];

    constructor(private _lettersService: LettersService,
                private _mailboxService: MailboxService,
                private _activatedRoute: ActivatedRoute) {}

    /**
     * Добавляет письмо(а) в список выбранных к действию.
     */
    public addToSelected (letterId?: string): ToolsService {
        if (!letterId) {
            this._addAllToSelected()
                .checkedAll().next(true);
        } else {
            this._selectedLettersIds.push(letterId);
        }
        console.log(this._selectedLettersIds);
        return this;
    }
    /**
     * Удаляет письмо(а) из списка выбранных к действию.
     */
    public removeFromSelected (letterId?: string): ToolsService {
        if (!letterId) {
            this.clearSelected();
        } else {
            this._spliceSelected(this._findSelectedById(letterId));
        }
        console.log(this._selectedLettersIds);
        return this;
    }
    /**
     * Очищает список выбранных.
     */
    public clearSelected (): ToolsService {
        this._selectedLettersIds = [];
        this.checkedAll().next(false);
        return this;
    }
    /**
     * Удаляет выделенные письма.
     */
    public deleteSelectedLetters (mailboxName: string): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем на удаление.
        letters.deleteLetters(this._selectedLettersIds, mailboxName)
            .subscribe((restLetters: Array<Letter>): void => {
                // Обновляет письма.
                this._lettersService.updateLetters().next(restLetters);
                // Убираем пометку со всех писем.
                this.checkedAll().next(false);
            });
        return this;
    }
    /**
     * Перемещает выделенные письма в спам.
     */
    public markSelectedLettersAsSpam (): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем для помещение в спам.
        letters.markLettersAsSpam(this._selectedLettersIds)
            .subscribe((restLetters: Array<Letter>): void => {
                // Обновляет письма.
                this._lettersService.updateLetters().next(restLetters);
                // Убираем пометку со всех писем.
                this.checkedAll().next(false);
            });
        return this;
    }
    /**
     * Перемещает выделенные письма из спама.
     */
    public markSelectedLettersAsNotSpam (): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер массив id писем для перемещения из спама.
        letters.markLettersAsNotSpam(this._selectedLettersIds)
            .subscribe((restLetters: Array<Letter>): void => {
                // Обновляет письма.
                this._lettersService.updateLetters().next(restLetters);
                // Убираем пометку со всех писем.
                this.checkedAll().next(false);
            });
        return this;
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
     * Удаляет письмo.
     */
    public deleteLetter (letterId: string): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма на удаление.
        letters.deleteLetter(letterId)
            .subscribe((): void => {
                this.urlUp().next(true);
            });
        return this;
    }
    /**
     * Перемещает письмо в спам.
     */
    public markLetterAsSpam (letterId: string): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма для помещение в спам.
        letters.markLetterAsSpam(letterId)
            .subscribe((): void => {
                this.urlUp().next(true);
            });
        return this;
    }
    /**
     * Перемещает письмо во входящие.
     */
    public markLetterAsNotSpam (letterId: string): ToolsService {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Отправляем на сервер id письма для помещение в спам.
        letters.markLetterAsNotSpam(letterId)
            .subscribe((): void => {
                this.urlUp().next(true);
            });
        return this;
    }
    /**
     * Возвращает поток, который говорит, помечены ли все письма или нет.
     */
    public checkedAll (): Subject<boolean> {
        if (this._checkedAll.closed) {
            this._checkedAll = new Subject<boolean>();
        }
        return this._checkedAll;
    }
    /**
     * Добавляет все письма в массив выделенных.
     */
    private _addAllToSelected (): ToolsService {
        this.clearSelected();
        this._lettersService.getLetters()
            .subscribe((letters: Array<Letter>) => {
                letters.forEach((letter: Letter): void => {
                    this._selectedLettersIds.push(letter.id);
                })
            });
        return this;
    }
    /**
     * Находит индекс письма в массиве выделенных по letterId.
     */
    private _findSelectedById (letterId: string): number {
        return this._selectedLettersIds
            .findIndex((id: string): boolean => {
                return id === letterId;
            });
    }
    /**
     * Удаляет письмо из массива выделенных.
     */
    private _spliceSelected (index: number): ToolsService {
        this._selectedLettersIds.splice(index, 1);
        return this;
    }
}
