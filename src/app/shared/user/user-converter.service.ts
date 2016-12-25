import { Injectable } from '@angular/core';
import { ConverterService } from '../converter/converter.service';
import { User } from './user';

import * as _ from 'lodash';

@Injectable()
export class UserConverterService {
  constructor(private converterService: ConverterService) {
    _.bindAll(this, ['serialize', 'deserialize']);
  }

  serialize(user: User) {
    return _.assign({}, user, {
      registered: this.converterService.serializeDateTime(user.registered)
    });
  }

  deserialize(rawUser: any): User {
    return new User(
      rawUser.id,
      rawUser.name,
      rawUser.email,
      rawUser.password,
      rawUser.enabled,
      this.converterService.deserializeDateTime(rawUser.registered),
      rawUser.roles,
      rawUser.caloriesPerDay
    );
  }
}
