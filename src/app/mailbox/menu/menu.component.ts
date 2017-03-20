/**
 * Angular
 */
import { Component, OnInit, Input } from '@angular/core';
/**
 * Interfaces
 */
import { Mailbox } from './../mailbox.interface';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    @Input() mailbox: Mailbox;

    constructor() {}

    ngOnInit() {}
}
