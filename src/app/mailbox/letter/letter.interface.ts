export interface Letter {
    id: string;/* Идентификатор письма */
    type: 'inbox'|'sent'|'spam';/* Тип письма */
    name: string; /* Имя отправителя */
    email: string; /* Email отправителя */
    addressee: string; /* Email получателя */
    date: Date; /* Дата отправки */
    subject: string;/*  Тема письма */
    body: string;/* Содержимое письма */
    shortBody?: string;/* Краткое содержимое письма */
}
