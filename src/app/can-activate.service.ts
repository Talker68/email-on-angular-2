/**
 * Angular
 */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
/**
 * Services
 */
import { AuthService } from './login/auth.service';
/**
 * Rxjs
 */
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanActivateService implements CanActivate {

    constructor(private _authService: AuthService,
        private _router: Router) {}

    public canActivate (): Observable<boolean> {
        return this._authService.isAuth()
            .do((response: boolean): void => {
                if (response === false) {
                    this._router.navigateByUrl('/login');
                }
            });
    }
}
