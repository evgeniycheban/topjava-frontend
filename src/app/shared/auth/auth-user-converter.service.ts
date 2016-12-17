import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AuthorizedUser } from './auth-user';

import * as _ from 'lodash';

@Injectable()
export class AuthorizedUserConverterService {
  constructor(private jwtHelper: JwtHelper) {
    _.bindAll(this, ['deserialize']);
  }

  deserialize(token: string): AuthorizedUser {
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return new AuthorizedUser(decodedToken.sub, decodedToken.name, decodedToken.admin);
    }
    return null;
  }
}
