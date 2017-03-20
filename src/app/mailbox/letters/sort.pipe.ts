/**
 * Angular
 */
import { Pipe, PipeTransform } from '@angular/core';
/**
 * Interfaces
 */
import { Letter } from './../letter/letter.interface';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(letters: Array<Letter>, sortBy: string): any {
        if (sortBy === 'date') {
            return letters.sort((a: Letter, b: Letter): number => {
                if (a.date >= b.date) return -1;
                return 1;
            });
        }
    }
}
