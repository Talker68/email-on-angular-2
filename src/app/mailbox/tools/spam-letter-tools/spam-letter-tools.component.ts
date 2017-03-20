/**
 * Angular
 */
import { Component, Input } from '@angular/core';
/**
 * Services
 */
import { ToolsService } from './../tools.service';

@Component({
    selector: 'app-spam-letter-tools',
    templateUrl: './spam-letter-tools.component.html',
    styleUrls: ['./spam-letter-tools.component.css']
})
export class SpamLetterToolsComponent {
    @Input()
    public letterId: string;

    constructor (private _toolsService: ToolsService) {}

    /**
     * Событие клика по кнопке удаления.
     */
    public onDelete () {
        this._toolsService.deleteLetter(this.letterId);
   }
    /**
     * Событие клика по кнопке добавления в спам.
     */
    public onNotSpam () {
        this._toolsService.markLetterAsNotSpam(this.letterId);
    }
}
