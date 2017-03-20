/**
 * Angular
 */
import { Routes } from '@angular/router';
/**
 * Components
 */
import { InboxToolsComponent } from './../inbox/inbox-tools/inbox-tools.component';
import { SentToolsComponent } from './../sent/sent-tools/sent-tools.component';
import { SpamToolsComponent } from './../spam/spam-tools/spam-tools.component';

export let lettersRoutes: Routes = [
    {
        path: 'inbox',
        component: InboxToolsComponent
    },
    {
        path: 'sent',
        component: SentToolsComponent
    },
    {
        path: 'spam',
        component: SpamToolsComponent
    },
]
