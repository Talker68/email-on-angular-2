/**
 * Angular
 */
import { Component, Input } from '@angular/core';
/**
 * Services
 */
import { ToolsService } from './../tools.service';

@Component({
    selector: 'app-inbox-letter-tools',
    templateUrl: './inbox-letter-tools.component.html',
    styleUrls: ['./inbox-letter-tools.component.css']
})
export class InboxLetterToolsComponent {
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
    public onSpam () {
        this._toolsService.markLetterAsSpam(this.letterId);
    }
}
