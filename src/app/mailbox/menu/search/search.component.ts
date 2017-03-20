/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
/**
 * Services
 */
import { SearchService } from './search.service';
/**
 * Rxjs
 */
import 'rxjs/'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public searchForm: FormGroup;

    constructor(private _searchService: SearchService,
        private _formBuilder: FormBuilder) {
        // Создаем модель формы.
        this.searchForm = this._createForm();
        // Отслеживаем ввод данных в поле поиска.
        this.searchForm.controls['input'].valueChanges
            .subscribe((value: string): void => {
                this.seek(value);
            });
    }

    /**
     * Поиск по значению.
     */
    public seek (value: string): void {
        this._searchService.filter().next(value);
    }
    /**
     * Создает модель формы.
     */
    private _createForm () {
        return this._formBuilder.group({
            input: new FormControl('')
        });
    }

    ngOnInit() {}
}
