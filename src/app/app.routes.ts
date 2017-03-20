/**
 * Angular
 */
import { Routes } from '@angular/router';
/**
 * Components
 */
import { MailboxComponent } from './mailbox/mailbox.component';
import { LoginComponent } from './login/login.component';
/**
 * Services
 */
import { CanActivateService } from './can-activate.service';
import { AuthService } from './login/auth.service';
/**
 * Routes
 */
import { mailboxRoutes } from './mailbox/mailbox.routes';

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'mailbox',
        component: MailboxComponent,
        canActivate: [CanActivateService],
        children: mailboxRoutes
    },
    {
        path: '**',
        redirectTo: 'mailbox'
    },
]
