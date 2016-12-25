/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { JwtHelper, AuthHttp } from 'angular2-jwt';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MealModalComponent } from './meal-modal/meal-modal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DateTimePickerComponent } from './datetimepicker/datetimepicker.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TimeFormatPipe } from './pipes/time-format.pipe';
import { DateTimeFormatPipe } from './pipes/date-time-format.pipe';

import { AuthHttpFactory } from './app.module';
import { routes } from './routes';

import {
  AuthService,
  AuthGuardService,
  AuthUserConverterService,
  AuthUserSessionService,
  ConverterService,
  UserConverterService,
  MealService,
  MealConverterService,
  MealExceedConverterService,
} from './shared';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        MealModalComponent,
        MealListComponent,
        DatepickerComponent,
        TimepickerComponent,
        DateTimePickerComponent,
        DateFormatPipe,
        TimeFormatPipe,
        DateTimeFormatPipe
      ],
      imports: [
        Ng2BootstrapModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterTestingModule.withRoutes(routes)
      ],
      providers: [
        JwtHelper,
        AuthHttp,
        { provide: AuthHttp, deps: [Http, RequestOptions], useFactory: AuthHttpFactory },
        AuthService,
        AuthUserConverterService,
        AuthGuardService,
        AuthUserSessionService,
        ConverterService,
        UserConverterService,
        MealService,
        MealConverterService,
        MealExceedConverterService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
