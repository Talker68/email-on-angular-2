/**
 * Angular
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
/**
 * Services
 */
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public error: boolean = false;

    constructor(private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router) {
        this.loginForm = this._createForm();
    }

    /**
     * Вход в приложение.
     */
    public login (email, password): void {
        this._authService.login(email, password)
            .subscribe((response: string): void => {
                if (response !== '') {
                    this._router.navigateByUrl('/');
                } else {
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    }, 3000);
                }
            });
    }
    /**
     * Создает модель формы.
     */
    private _createForm (): FormGroup {
        return this._formBuilder.group({
            email: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit() {}
}
