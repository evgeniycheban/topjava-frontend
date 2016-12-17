import { Injectable } from "@angular/core";
import { ConverterService } from "../converter/converter.service";
import * as _ from "lodash";
import { Meal } from "./meal";

@Injectable()
export class MealConverterService {
  constructor(private converterService: ConverterService) {
    _.bindAll(this, ['serialize', 'deserialize']);
  }

  serialize(meal: Meal) {
    return _.assign({}, meal, {
      dateTime: this.converterService.serializeDateTime(meal.dateTime)
    });
  }

  deserialize(rawMeal: any): Meal {
    return new Meal(
      rawMeal.id,
      this.converterService.deserializeDateTime(rawMeal.dateTime),
      rawMeal.description,
      rawMeal.calories
    );
  }
}
