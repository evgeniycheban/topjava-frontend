import { Moment } from 'moment';

export class Meal {
  constructor(public id: number,
              public dateTime: Moment,
              public description: string,
              public calories: string) {

  }
}
