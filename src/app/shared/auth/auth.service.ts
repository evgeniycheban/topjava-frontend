import 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { AuthUser } from './auth-user';
import { AuthUserSessionService } from './auth-user-session.service';

@Injectable()
export class AuthService {

  private baseUrl: string;

  constructor(private http: Http,
              private authHttp: AuthHttp,
              private userSessionService: AuthUserSessionService,
              @Inject('backendPath') private backendPath: string) {
    this.baseUrl = backendPath + '/authentication';
  }

  login(username: string, password: string): Observable<AuthUser> {
    return this.http.post(`${this.baseUrl}/login`, { username, password })
      .map((response: Response) => response.json())
      .map((rawAuthenticationResponse: any) => this.userSessionService.init(rawAuthenticationResponse.token));
  }

  logout(): Observable<any> {
    return this.authHttp.post(`${this.baseUrl}/logout`, '')
      .do(() => this.userSessionService.reset());
  }
}
