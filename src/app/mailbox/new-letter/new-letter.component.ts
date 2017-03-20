/**
 * Angular
 */
import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
/**
 * Services
 */
import { LettersService } from './../letters.service';
import { ContactsService } from './../contacts/contacts.service';
/**
 * Interfaces
 */
import { Contact } from './../contacts/contact/contact.interface';

@Component({
    selector: 'app-new-letter',
    templateUrl: './new-letter.component.html',
    styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnDestroy {
    // Форма.
    public newLetterForm: FormGroup;
    // Адресат
    public addressee: AbstractControl;
    // Валидность.
    public notValidForm: boolean = false;
    // Возможные контакты.
    public possibleContacts: Array<Contact> = null;
    // Массив потоков.
    private _streams: Array<any> = [];

    constructor(private _lettersService: LettersService,
                private _contactsService: ContactsService,
                private _formBuilder: FormBuilder,
                private _activatedRoute: ActivatedRoute,
                private _router: Router) {

        // Создает модель формы.
        this.newLetterForm = this._createForm();
        // Сохраняем поле адреса получателя.
        this.addressee = this.newLetterForm.controls['addressee'];

        let valueChanges = this.addressee.valueChanges;
        // Добавляем поток в массив потоков.
        this._streams.push(valueChanges);
        // Подписка на изменения поля addressee.
        valueChanges
            .subscribe((value): void => {
                // Убираем ошибки.
                this.notValidForm = false;
                // Получаем потенциальных получателей из контактов.
                this._contactsService.getContactsByValue(value)
                    .subscribe((contacts: Array<Contact>): void => {
                        this.possibleContacts = contacts;
                        if (this.possibleContacts[0] === undefined) {
                            this.possibleContacts = null;
                        }
                    });
            });

        // Подписываемся на потоки данных.
        this._urlUp(); // Вверх по url.
    }

    /**
     * Отправка письма.
     */
    public sendLetter (letter: {
        addressee: string,
        subject: string,
        body: string
    }) {
        if (!this.newLetterForm.valid) {
            this.notValidForm = true;
        } else {
            this._lettersService.sendLetter(letter);
        }
    }
    /**
     * Выбор контакта.
     */
    public selectContact (contact: Contact): void {
        this.newLetterForm.controls['addressee'].setValue(contact.email, {emitEvent: false});
        this.possibleContacts = null;
    }
    /**
     * Наружний клик.
     */
    public outsideClick (): void {
        this.possibleContacts = null;
    }
    /**
     * Создает модель формы.
     */
    private _createForm (): FormGroup {
        return this._formBuilder.group({
            addressee: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
            subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
            body: new FormControl('')
        });
    }
    /**
     * Подписываемся на то, чтобы подняться вверх по url.
     */
    private _urlUp (): NewLetterComponent {
        let up = this._lettersService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe((): void => {
                console.log('REDIRECT');
                this._router.navigate(['../../', 'letters', 'sent'], {relativeTo: this._activatedRoute});
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
