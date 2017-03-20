/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
/**
 * Data
 */
import { user } from './../app.data';

@Injectable()
export class AuthService {

    constructor(private _router: Router) {}

    /**
     * Проверяет данные ввода и, в случае успеха,
     * добавляет пользователя в localStorage.
     */
    public login (email: string, password: string): Observable<string> {
        return this._auth(email, password)
            .do((response: string): void => {
                if (response !== '') {
                    localStorage.setItem('user', response);
                }
            })
    }
    /**
     * Выход (удаляет пользователя из localStorage
     * и делает редирект).
     */
    public logout (): void {
        localStorage.removeItem('user');
        this._router.navigateByUrl('/login');
    }
    /**
     * Проверяет авторизован ли пользователь.
     */
    public isAuth (): Observable<boolean> {
        if (localStorage.getItem('user')) {
            return Observable.of(true);
        } else {
            return Observable.of(false);
        }
    }
    /**
     * Отсылает данные входа на сервер (в данном случае,
     * сервером является файл app.data) для проверки.
     */
    private _auth (email: string, password: string): Observable<string> {
        return Observable.of((user.email === email && user.password === password) ? user.id : '');
    }
}
