/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let spy: jasmine.Spy;
    let authService: AuthService;
    let userId: string;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
                declarations: [LoginComponent],
                providers: [AuthService, FormBuilder, Router]
            })
            .compileComponents();
    }));

    beforeEach(() => {
        userId = '35as3da431adasd4asd5';

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        authService = fixture.debugElement.injector.get(AuthService);
        spy = spyOn(authService, 'login').and.returnValue(Observable.of(''));
        // spy = spyOn(authService, 'login').and.returnValue(Observable.of(userId));
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call login method', () => {
        component.login('user@mail.ru', '123');
        expect(spy.calls.any()).toBeTruthy();
    });

    it('should call login method', () => {
        component.login('user@mail.ru', '123');
        expect(component.error).toEqual(true);
    });
});
