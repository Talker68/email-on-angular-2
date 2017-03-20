/**
 * Angular
 */
import { Component } from '@angular/core';
/**
 * Services
 */
import { ToolsService } from './../tools.service';

@Component({
    selector: 'app-inbox-tools',
    templateUrl: './inbox-tools.component.html',
    styleUrls: ['./inbox-tools.component.css']
})
export class InboxToolsComponent {
    public checkedAll: boolean = false;

    constructor(private _toolsService: ToolsService) {
        // Выбор всех писем.
        this._onCheckedAll();
    }

    /**
     * Добавляет все письма в список выбранных к действию.
     * или, наоборот, удаляет из него.
     */
    public onSelectAll (checked: boolean): void {
        if (checked === true) {
            this._toolsService.addToSelected();
        } else {
            this._toolsService.removeFromSelected();
        }
    }
    /**
     * Событие клика по кнопке удаления.
     */
    public onDelete () {
        this._toolsService.deleteSelectedLetters('inbox')
            .checkedAll().next(false);
    }
    /**
     * Событие клика по кнопке добавления в спам.
     */
    public onSpam () {
        this._toolsService.markSelectedLettersAsSpam()
            .checkedAll().next(false);
    }
    /**
     * Подписывается на выделение всех писем.
     */
    private _onCheckedAll (): void {
        this._toolsService.checkedAll()
            .subscribe((checkedAll: boolean): void => {
                this.checkedAll = checkedAll;
            });
    }
}
