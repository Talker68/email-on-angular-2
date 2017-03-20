/**
 * Angular
 */
import { Component, Input } from '@angular/core';
/**
 * Services
 */
import { AuthService } from './../../../login/auth.service';
/**
 * Interfaces
 */
import { Mailbox } from './../../mailbox.interface';

@Component({
    selector: 'app-user-thumb',
    templateUrl: './user-thumb.component.html',
    styleUrls: ['./user-thumb.component.css']
})
export class UserThumbComponent {
    @Input() mailbox: Mailbox;

    constructor(private _authService: AuthService) {}

    /**
     * Выход из почтового ящика.
     */
    public onExit (): void {
        this._authService.logout();
    }
}
