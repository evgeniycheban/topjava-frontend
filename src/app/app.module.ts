import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AUTH_PROVIDERS, JwtHelper, AuthHttp } from 'angular2-jwt';
import { Ng2BootstrapModule, ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { NavbarComponent } from './navbar';
import { DatepickerComponent } from './datepicker';
import { TimepickerComponent } from './timepicker';
import { DateTimePickerComponent } from './datetimepicker';
import { DateFormatPipe, TimeFormatPipe, DateTimeFormatPipe } from './pipes';
import { MealModalComponent } from './meal-modal';
import { MealListComponent } from './meal-list';

import { routes } from './routes';

import {
  AuthenticationService,
  AuthenticationGuardService,
  AuthorizedUserConverterService,
  UserSessionService,
  ConverterService,
  MealService,
  MealConverterService,
  MealExceedConverterService,
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MealModalComponent,
    MealListComponent,
    NavbarComponent,
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    JwtHelper,
    AuthHttp,
    AUTH_PROVIDERS,
    ComponentsHelper,
    AuthenticationService,
    AuthorizedUserConverterService,
    AuthenticationGuardService,
    UserSessionService,
    ConverterService,
    MealService,
    MealConverterService,
    MealExceedConverterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
