import { Injectable } from "@angular/core";
import * as _ from "lodash";
import { MealExceed } from "./meal-exceed";
import { ConverterService } from "../converter/converter.service";

@Injectable()
export class MealExceedConverterService {
  constructor(private converterService: ConverterService) {
    _.bindAll(this, ['serialize', 'deserialize']);
  }

  serialize(mealExceed: MealExceed) {
    return _.assign({}, mealExceed, {
      dateTime: this.converterService.serializeDateTime(mealExceed.dateTime)
    });
  }

  deserialize(mealExceed: any) {
    return new MealExceed(
      mealExceed.id,
      mealExceed.dateTime ? this.converterService.deserializeDateTime(mealExceed.dateTime) : null,
      mealExceed.description,
      mealExceed.calories,
      mealExceed.exceed
    );
  }
}
