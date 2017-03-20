/**
 * Angular
 */
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Services
 */
import { ContactsService } from './../contacts/contacts.service';
import { MailboxService } from './../mailbox.service';
/**
 * Interfaces
 */
import { Contact } from './../contacts/contact/contact.interface';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    // Форма.
    public contactForm: FormGroup;
    // Валидность.
    public notValidForm: boolean = false;
    // id контакта.
    private _contactId: string;
    // Массив потоков.
    private _streams: Array<any> = [];

    constructor(private _contactsService: ContactsService,
                private _formBuilder: FormBuilder,
                private _activatedRoute: ActivatedRoute,
                private _router: Router,
                private _mailboxService: MailboxService) {

        let params = this._activatedRoute.params;
        // Добавляем поток в массив потоков.
        this._streams.push(params);
        // Активация роута.
        params
            .pluck('contactId')
            .subscribe((contactId?: string): void => {
                if (contactId) {
                    // Говорим, что началась загрузка контента.
                    this._mailboxService.isLoading().next(true);
                    // Сохраняем id контакта.
                    this._contactId = contactId;
                    // Создает модель формы с данными контакта.
                    this._createContactForm(this._contactId);
                } else {
                    // Создает модель формы.
                    this._createBlankForm();
                }
            });

        // Подписываемся на потоки данных.
        this._urlUp(); // Вверх по url.
    }

    /**
     * Событие клика по кнопке добавления контакта.
     */
    public saveContact (contact: {name: string, email: string, phone: string}) {
        if (!this.contactForm.valid) {
            this.notValidForm = true;
        } else {
            if (this._contactId) {
                this._contactsService.saveContact(Object.assign(contact, {
                    id: this._contactId,
                    photo: '/assets/img/avatar.jpg'
                }));
            } else {
                this._contactsService.saveContact(Object.assign(contact, {photo: '/assets/img/avatar.jpg'}));
            }
        }
    }
    /**
     * Создает модель пустой формы.
     */
    private _createBlankForm (): void {
        this.contactForm = this._formBuilder.group({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email: new FormControl('', [Validators.required, Validators.pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
            phone: new FormControl(''),
            photo: new FormControl({value: '/assets/img/avatar.jpg', disabled: true})
        });
        this._valueChanges();
    }
    /**
     * Создает модель заполненной формы.
     */
    private _createContactForm (contactId: string): void {
        // Запрашиваем контакт.
        this._contactsService.getContact(contactId)
            .subscribe((contact: Contact) => {
                // Отменяем состояние загрузки.
                this._mailboxService.isLoading().next(false);
                // Создаем форму.
                this.contactForm = this._formBuilder.group({
                    name: new FormControl(contact.name, [Validators.required, Validators.minLength(2)]),
                    email: new FormControl(contact.email, [Validators.required, Validators.pattern(/^[0-9a-z-.]+@[0-9a-z-]{2,}\.[a-z]{2,}$/i)]),
                    phone: new FormControl(contact.phone),
                    photo: new FormControl({value: '/assets/img/avatar.jpg', disabled: true})
                });
                this._valueChanges();
            });
    }
    /**
     * Подписывает на изменения значения формы.
     */
    private _valueChanges (): void {
        let valueChanges = this.contactForm.valueChanges;
        // Добавляем поток в массив потоков.
        this._streams.push(valueChanges);
        // Подписываемся на изменения полей формы.
        valueChanges
            .subscribe(() => {
                this.notValidForm = false;
            });
    }
    /**
     * Подписывается на то, чтобы подняться вверх по url.
     */
    private _urlUp (): ContactFormComponent {
        let up = this._contactsService.urlUp();
        // Добавляем поток в массив потоков.
        this._streams.push(up);
        // Подписываемся на поток.
        up
            .subscribe((): void => {
                console.log('UP!');
                if (this._contactId) {
                    this._router.navigate(['../../'], {relativeTo: this._activatedRoute});
                } else {
                    this._router.navigate(['../'], {relativeTo: this._activatedRoute});
                }
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

