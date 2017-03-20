/**
 * Angular
 */
import { Injectable } from '@angular/core';
/**
 * Rxjs
 */
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {
    private _filter: Subject<string> = new Subject<string>();

    constructor () {}

    public filter (): Subject<string> {
        if (this._filter.closed) {
            this._filter = new Subject<string>();
        }
        return this._filter;
    }
}
