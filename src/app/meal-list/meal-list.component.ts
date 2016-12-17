import { OnInit, Component } from '@angular/core';
import { MealExceed } from '../shared/meal/meal-exceed';
import { MealService } from '../shared/meal/meal.service';
import { Moment } from 'moment';

@Component({
  selector: './app-meal-list',
  templateUrl: './../../../tmp/html/meal-list.component.html'
})
export class MealListComponent implements OnInit {
  startDate: Moment;
  endDate: Moment;

  startTime: Moment;
  endTime: Moment;

  meals: Array<MealExceed> = [];

  constructor(private mealService: MealService) {
  }

  ngOnInit() {
    this.refreshFilteredMeals();
  }

  refreshFilteredMeals() {
    this.mealService.getAll(
      this.startDate, this.startTime,
      this.endDate, this.endTime
    ).subscribe((meals: Array<MealExceed>) => {
      this.meals = meals;
    });
  }
}
