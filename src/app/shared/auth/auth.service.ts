import 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { AuthorizedUser } from './auth-user';
import { UserSessionService } from './auth-user-session.service';

@Injectable()
export class AuthenticationService {

  private baseUrl: string;

  constructor(private http: Http,
              private authHttp: AuthHttp,
              private userSessionService: UserSessionService,
              @Inject('backendPath') private backendPath: string) {
    this.baseUrl = backendPath + '/authentication';
  }

  login(username: string, password: string): Observable<AuthorizedUser> {
    return this.http.post(`${this.baseUrl}/login`, { username, password })
      .map((response: Response) => response.json())
      .map((rawAuthenticationResponse: any) => this.userSessionService.init(rawAuthenticationResponse.token));
  }

  logout(): Observable<any> {
    return this.authHttp.post(`${this.baseUrl}/logout`, '')
      .do(() => this.userSessionService.reset());
  }
}
