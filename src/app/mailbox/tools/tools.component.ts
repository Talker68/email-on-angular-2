import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
    @Input() mailboxName: string;
    @Input() letterId: string;

    constructor() {}
}
