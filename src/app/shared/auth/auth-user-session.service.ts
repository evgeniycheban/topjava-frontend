import { Injectable } from '@angular/core';
import { AuthorizedUser } from './auth-user';
import { AuthorizedUserConverterService } from './auth-user-converter.service';

@Injectable()
export class UserSessionService {
  constructor(private authorizedUserConverterService: AuthorizedUserConverterService) {
  }

  init(token: string) {
    localStorage.setItem('id_token', token);
    return this.getAuthorizedUser();
  }

  reset() {
    localStorage.clear();
  }

  getAuthorizedUser(): AuthorizedUser {
    const token = localStorage.getItem('id_token');
    return this.authorizedUserConverterService.deserialize(token);
  }

}
