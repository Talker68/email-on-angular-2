/**
 * Angular
 */
import { Routes } from '@angular/router';
/**
 * Components
 */
import { LettersComponent } from './letters/letters.component';
import { LetterComponent } from './letter/letter.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export let mailboxRoutes: Routes = [
    {
        path: 'letters/:mailboxName',
        component: LettersComponent
    },
    {
        path: 'letter/new',
        component: NewLetterComponent
    },
    {
        path: 'letters/:mailboxName/:letterId',
        component: LetterComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'contacts/new',
        component: ContactFormComponent
    },
    {
        path: 'contacts/edit/:contactId',
        component: ContactFormComponent
    },
    {
        path: '',
        redirectTo: 'letters/inbox',
        pathMatch: 'full'
    }
]
