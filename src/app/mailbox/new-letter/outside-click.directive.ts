/**
 * Angular
 */
import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
    selector: '[outsideClick]'
})
export class OutsideClickDirective {
    @Output() public outsideClick: EventEmitter<MouseEvent>;

    constructor(private _el: ElementRef) {
        this.outsideClick = new EventEmitter<MouseEvent>();
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick (event: MouseEvent, targetElement: HTMLElement): void {
        if (!this._el.nativeElement.contains(targetElement)) {
            this.outsideClick.emit(event);
        }
    }
}
