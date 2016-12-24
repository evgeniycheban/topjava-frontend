import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { JwtHelper, AuthHttp, AuthConfig } from 'angular2-jwt';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { ComponentLoaderFactory } from 'ng2-bootstrap/component-loader';
import { PositioningService } from 'ng2-bootstrap/positioning';
import { DatepickerConfig } from 'ng2-bootstrap/datepicker';
import { TimepickerConfig } from 'ng2-bootstrap/timepicker';

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
  AuthService,
  AuthGuardService,
  AuthUserConverterService,
  AuthUserSessionService,
  ConverterService,
  MealService,
  MealConverterService,
  MealExceedConverterService,
} from './shared';

//fixme workaround custom AUTH_PROVIDERS
export function AuthHttpFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

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
    { provide: AuthHttp, deps: [Http, RequestOptions], useFactory: AuthHttpFactory },
    ComponentLoaderFactory,
    PositioningService,
    DatepickerConfig,
    TimepickerConfig,
    AuthService,
    AuthUserConverterService,
    AuthGuardService,
    AuthUserSessionService,
    ConverterService,
    MealService,
    MealConverterService,
    MealExceedConverterService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
