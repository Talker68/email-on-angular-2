/**
 * Angular
 */
import { Injectable } from '@angular/core';
/**
 * Services
 */
import { MailboxService } from './mailbox.service';
/**
 * Interfaces
 */
import { Letter } from './letter/letter.interface';
import { Mailbox } from './mailbox.interface';
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
import { letters } from './../app.data';

@Injectable()
export class LettersService {
    private _letters: Array<Letter> = null;
    private _lettersStream: Subject<Letter[]> = new Subject<Letter[]>();
    private _urlUp: Subject<boolean> = new Subject<boolean>();

    constructor(private _mailboxService: MailboxService) {}

    /**
     * Возвращает поток, который говорит, подняться вверх по url.
     */
    public urlUp (): Subject<boolean> {
        console.log('UP');
        if (this._urlUp.closed) {
            this._urlUp = new Subject<boolean>();
        }
        return this._urlUp;
    }
    /**
     * Возвращает поток из текущих писем.
     */
    public getLetters (): Observable<Letter[]> {
        return Observable.of(this._letters);
    }
    /**
     * Возвращает поток из массива писем.
     */
    public requestLetters (mailboxName: string): void {
        console.log('SERVER REQUEST');
        letters.getLetters(mailboxName)
            .do((letters: Array<Letter>): void => {
                this._letters = letters;
            })
            .map((letters: Array<Letter>): Array<Letter> => {
                return letters.map((letter: Letter): Letter => {
                    letter['shortBody'] = this._makeShortBody(letter);
                    return letter;
                });
            })
            .subscribe((letters: Array<Letter>): void => {
                this.updateLetters().next(letters);
            });
    }
    /**
     * Возвращает письмо по id.
     */
    public getLetter (letterId: string): Observable<Letter> {
        if (this._letters) {
            return this.getLetters()
                .map((letters: Array<Letter>): Letter => {
                    return this._fintLetterById(letters, letterId);
                });
        } else {
            return letters.getLetter(letterId);
        }
    }
    /**
     * Обновление списка писем.
     */
    public updateLetters (): Subject<Letter[]> {
        if (this._lettersStream.closed) {
            this._lettersStream = new Subject<Letter[]>();
        }
        return this._lettersStream;
    }
    /**
     * Отправляет письмо.
     */
    public sendLetter (letter: {
        addressee: string,
        subject: string,
        body: string
    }) {
        // Говорим, что началась загрузка контента.
        this._mailboxService.isLoading().next(true);
        // Получаем данные почтового ящика.
        this._mailboxService.getMailbox()
            .subscribe((mailbox: Mailbox): void => {
                // Отправляем письмо
                letters.addLetter(Object.assign(letter, {
                    date: new Date(),
                    name: mailbox.name,
                    email: mailbox.email
                }))
                .subscribe(() => {
                    console.log('SEND LETTER');
                    this.urlUp().next(true);
                });
            });
    }
    /**
     * Делает краткое содержимое письма.
     */
    private _makeShortBody (letter: Letter): string {
        return letter.body.slice(0, 100);
    }
    /**
     * Находит письмо по id в массиве писем.
     */
    private _fintLetterById (arr: Array<Letter>, id: string): Letter {
        return arr.find((letter: Letter): boolean => {
            return letter.id === id;
        })
    }
}
