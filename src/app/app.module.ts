/**
 * Angular
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
/**
 * Components
 */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { FoldersComponent } from './mailbox/folders/folders.component';
import { LetterComponent } from './mailbox/letter/letter.component';
import { MenuComponent } from './mailbox/menu/menu.component';
import { SearchComponent } from './mailbox/menu/search/search.component';
import { InboxToolsComponent } from './mailbox/tools/inbox-tools/inbox-tools.component';
import { NewLetterComponent } from './mailbox/new-letter/new-letter.component';
import { ContactsComponent } from './mailbox/contacts/contacts.component';
import { ContactComponent } from './mailbox/contacts/contact/contact.component';
import { UserThumbComponent } from './mailbox/menu/user-thumb/user-thumb.component';
import { SentToolsComponent } from './mailbox/tools/sent-tools/sent-tools.component';
import { SpamToolsComponent } from './mailbox/tools/spam-tools/spam-tools.component';
import { LettersComponent } from './mailbox/letters/letters.component';
import { ToolsComponent } from './mailbox/tools/tools.component';
import { InboxLetterToolsComponent } from './mailbox/tools/inbox-letter-tools/inbox-letter-tools.component';
import { SentLetterToolsComponent } from './mailbox/tools/sent-letter-tools/sent-letter-tools.component';
import { SpamLetterToolsComponent } from './mailbox/tools/spam-letter-tools/spam-letter-tools.component';
import { ContactsToolsComponent } from './mailbox/contacts/contacts-tools/contacts-tools.component';
import { ContactFormComponent } from './mailbox/contact-form/contact-form.component';
/**
 * Directives
 */
import { OutsideClickDirective } from './mailbox/new-letter/outside-click.directive';
/**
 * Services
 */
import { CanActivateService } from './can-activate.service';
import { AuthService } from './login/auth.service';
import { MailboxService } from './mailbox/mailbox.service';
import { SearchService } from './mailbox/menu/search/search.service';
import { LettersService } from './mailbox/letters.service';
import { ToolsService } from './mailbox/tools/tools.service';
import { ContactsService } from './mailbox/contacts/contacts.service';

/**
 * Pipes
 */
import { LetterDatePipe } from './mailbox/letter-date.pipe';
import { LetterFilterPipe } from './mailbox/letters/letter-filter.pipe';
import { SortPipe } from './mailbox/letters/sort.pipe';
import { NoLettersPipe } from './mailbox/letters/no-letters.pipe';
import { ContactFilterPipe } from './mailbox/contacts/contact-filter.pipe';
/**
 * Routes
 */
import { appRoutes } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MailboxComponent,
        LetterComponent,
        LetterDatePipe,
        MenuComponent,
        FoldersComponent,
        SearchComponent,
        LetterFilterPipe,
        InboxToolsComponent,
        NewLetterComponent,
        ContactsComponent,
        ContactComponent,
        OutsideClickDirective,
        UserThumbComponent,
        SentToolsComponent,
        SpamToolsComponent,
        SortPipe,
        LettersComponent,
        ToolsComponent,
        InboxLetterToolsComponent,
        SentLetterToolsComponent,
        SpamLetterToolsComponent,
        NoLettersPipe,
        ContactsToolsComponent,
        ContactFormComponent,
        ContactFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CanActivateService,
        AuthService,
        MailboxService,
        SearchService,
        LettersService,
        ToolsService,
        ContactsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
