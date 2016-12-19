import { Injectable, Inject } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { Moment } from 'moment';
import { ConverterService } from '../converter/converter.service';
import { Meal } from './meal';
import { MealExceed } from './meal-exceed';
import { MealConverterService } from './meal-converter.service';
import { MealExceedConverterService } from './meal-exceed-converter.service';

import * as _ from 'lodash';

@Injectable()
export class MealService {
  baseUrl: string;

  constructor(private authHttp: AuthHttp,
              private converterService: ConverterService,
              private mealConverterService: MealConverterService,
              private mealExceedConverterService: MealExceedConverterService,
              @Inject('backendPath') backendPath: string) {
    this.baseUrl = `${backendPath}/profile/meals`;
  }

  getAll(startDate: Moment, startTime: Moment,
         endDate: Moment, endTime: Moment): Observable<Array<MealExceed>> {
    const params = this.getParams(
      startDate, startTime,
      endDate, endTime
    );

    const meals = _.isEmpty(params.paramsMap)
      ? this.authHttp.get(this.baseUrl)
      : this.authHttp.get(`${this.baseUrl}/filter`, { search: params });

    return meals
      .map((response: Response) => response.json())
      .map((rawMeals: Array<any>) => {
        return _.map(rawMeals, this.mealExceedConverterService.deserialize);
      });
  }

  getParams(startDate: Moment, startTime: Moment,
            endDate: Moment, endTime: Moment): URLSearchParams {
    const filterMap = this.getFilterMap(
      startDate, startTime,
      endDate, endTime
    );

    return _(filterMap)
      .omit(_.isNil)
      .reduce((params: any, value, key) => {
        params.set(key, value);
        return params;
      }, new URLSearchParams());
  }

  private getFilterMap(startDate: Moment, startTime: Moment,
                       endDate: Moment, endTime: Moment) {
    return {
      startDate: this.converterService.serializeDate(startDate),
      startTime: this.converterService.serializeTime(startTime),
      endDate: this.converterService.serializeDate(endDate),
      endTime: this.converterService.serializeTime(endTime)
    };
  }

  get(id: number): Observable<Meal> {
    return this.authHttp.get(`${this.baseUrl}/${id}`)
      .map((response: Response) => response.json())
      .map((rawMeal: any) => this.mealConverterService.deserialize(rawMeal));
  }

  save(meal: Meal): Observable<Meal> {
    const serializedMeal = this.mealConverterService.serialize(meal);
    return this.authHttp.post(this.baseUrl, serializedMeal)
      .map((response: Response) => response.json())
      .map((rawMeal: any) => this.mealConverterService.deserialize(rawMeal));
  }

  update(meal: Meal, id: number): Observable<Response> {
    const serializedMeal = this.mealConverterService.serialize(meal);
    return this.authHttp.put(`${this.baseUrl}/${id}`, serializedMeal);
  }

  delete(id: number): Observable<Response> {
    return this.authHttp.delete(`${this.baseUrl}/${id}`);
  }

}
