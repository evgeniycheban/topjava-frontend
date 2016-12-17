import { Moment } from "moment";

export class MealExceed {
  constructor(public id: number,
              public dateTime: Moment,
              public description: string,
              public calories: string,
              public exceed: boolean,) {

  }
}
