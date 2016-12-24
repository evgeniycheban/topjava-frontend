import { Moment } from 'moment';

export class User {
  constructor(public id: number,
              public name: string,
              public email: string,
              public password: string,
              public enabled: boolean,
              public registered: Moment,
              public roles: Set<any>,
              public caloriesPerDay: number) {
  }
}
