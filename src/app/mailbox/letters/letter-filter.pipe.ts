/**
 * Angular
 */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * Interfaces
 */
import { Letter } from './../letter/letter.interface';

@Pipe({
    name: 'letterFilter'
})
export class LetterFilterPipe implements PipeTransform {
    transform(letters: Array<Letter> , filter: string): Array<Letter> {
        if (!filter) {
            return letters;
        }

        filter = filter.toLowerCase();

        let dateOptions = {
            era: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        return letters.filter((letter: Letter): boolean => {
            if (letter.name.toLowerCase().includes(filter)) {
                return true;
            } else if (letter.email.toLowerCase().includes(filter)) {
                return true;
            } else if (letter.addressee.toLowerCase().includes(filter)) {
                return true;
            } else if (letter.date.toLocaleString('ru', dateOptions).toLowerCase().includes(filter)) {
                return true;
            } else if (letter.subject.toLowerCase().includes(filter)) {
                return true;
            } else if (letter.shortBody.toLowerCase().includes(filter)) {
                return true;
            } else {
                return false;
            }
        });
    }
}
