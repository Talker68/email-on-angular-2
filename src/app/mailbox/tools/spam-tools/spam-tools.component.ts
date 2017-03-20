/**
 * Angular
 */
import { Component } from '@angular/core';
/**
 * Services
 */
import { ToolsService } from './../tools.service';

@Component({
    selector: 'app-spam-tools',
    templateUrl: './spam-tools.component.html',
    styleUrls: ['./spam-tools.component.css']
})
export class SpamToolsComponent {
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
        this._toolsService.deleteSelectedLetters('spam')
            .checkedAll().next(false);
    }
    /**
     * Событие клика по кнопке убирания из спам.
     */
    public onNotSpam () {
        this._toolsService.markSelectedLettersAsNotSpam()
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
