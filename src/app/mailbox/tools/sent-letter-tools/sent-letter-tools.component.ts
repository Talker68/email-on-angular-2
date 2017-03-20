/**
 * Angular
 */
import { Component, Input } from '@angular/core';
/**
 * Services
 */
import { ToolsService } from './../tools.service';

@Component({
    selector: 'app-sent-letter-tools',
    templateUrl: './sent-letter-tools.component.html',
    styleUrls: ['./sent-letter-tools.component.css']
})
export class SentLetterToolsComponent {
    @Input()
    public letterId: string;

    constructor (private _toolsService: ToolsService) {}

    /**
     * Событие клика по кнопке удаления.
     */
    public onDelete () {
        this._toolsService.deleteLetter(this.letterId);
   }
}
