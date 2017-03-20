/**
 * Angular
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noLetters'
})
export class NoLettersPipe implements PipeTransform {
    transform(mailboxName: string): string {
        switch (mailboxName) {
            case 'inbox':
                return 'У вас нет входящих писем!';
            case 'sent':
                return 'У вас нет исходящих писем!';
            case 'spam':
                return 'У вас нет спама!';
        }
    }
}
