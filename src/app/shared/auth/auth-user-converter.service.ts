import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { AuthUser } from './auth-user';

import * as _ from 'lodash';

@Injectable()
export class AuthUserConverterService {
  constructor(private jwtHelper: JwtHelper) {
    _.bindAll(this, ['deserialize']);
  }

  deserialize(token: string): AuthUser {
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      return new AuthUser(decodedToken.sub, decodedToken.name, decodedToken.admin);
    }
    return null;
  }
}
