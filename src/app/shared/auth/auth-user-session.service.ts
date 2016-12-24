import { Injectable } from '@angular/core';
import { AuthUser } from './auth-user';
import { AuthUserConverterService } from './auth-user-converter.service';

@Injectable()
export class AuthUserSessionService {
  constructor(private authorizedUserConverterService: AuthUserConverterService) {
  }

  init(token: string) {
    localStorage.setItem('id_token', token);
    return this.getAuthorizedUser();
  }

  reset() {
    localStorage.clear();
  }

  getAuthorizedUser(): AuthUser {
    const token = localStorage.getItem('id_token');
    return this.authorizedUserConverterService.deserialize(token);
  }

}
