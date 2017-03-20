import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'letterDate'
})
export class LetterDatePipe implements PipeTransform {
    transform(date: string): string {
        let nowMs: number = Date.now(),
            letterDate: Date = new Date(date),
            letterMs: number = letterDate.getTime(),
            difference = nowMs - letterMs,
            oneYear: number = 1000 * 60 * 60 * 24 * 365,
            oneDay: number = 1000 * 60 * 60 * 24,
            months: Array<string> = ['Янв', 'Фев', 'Мар', 'Апр', 'Мая', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];

        if (difference >= oneYear) {
            return `${letterDate.getFullYear()}`;
        } else if (difference >= oneDay) {
            let day: number = letterDate.getDate(),
            dayStr: string;
            if (day < 10) dayStr = '0' + day;
            else dayStr = '' + day;
            return `${day} ${months[letterDate.getMonth()]}`;
        }
        let hours: number = letterDate.getHours(),
            hoursStr: string;
        if (hours < 10) hoursStr = '0' + hours;
        else hoursStr = '' + hours;
        let minutes: number = letterDate.getMinutes(),
            minutesStr: string;
        if (minutes < 10) minutesStr = '0' + minutes;
        else minutesStr = '' + minutes;
        return `${hoursStr}:${minutesStr}`;
    }
}
