import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ConverterService } from '../shared/converter/converter.service';
import { MealExceed } from '../shared/meal/meal-exceed';
import { MealService } from '../shared/meal/meal.service';
import { Moment } from 'moment';
import * as toastr from 'toastr';

@Component({
  selector: './app-meal-list',
  templateUrl: './../../../tmp/html/meal-list.component.html',
  styleUrls: ['./meal-list.component.sass']
})
export class MealListComponent implements OnInit {
  startDate: Moment;
  endDate: Moment;

  startTime: Moment;
  endTime: Moment;

  meals: Array<MealExceed> = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private converterService: ConverterService,
              private mealService: MealService) {
  }

  ngOnInit() {
    this.refreshFilteredMeals();
  }

  refreshFilteredMeals() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.startDate = this.converterService.deserializeDate(params['startDate']);
      this.startTime = this.converterService.deserializeTime(params['startTime']);
      this.endDate = this.converterService.deserializeDate(params['endDate']);
      this.endTime = this.converterService.deserializeTime(params['endTime']);

      this.mealService.getAll(
        this.startDate, this.startTime,
        this.endDate, this.endTime
      ).subscribe((meals: Array<MealExceed>) => {
        this.meals = meals;
      });
    });
  }

  delete(id: number) {
    this.mealService.delete(id)
      .subscribe(() => {
        this.refreshFilteredMeals();
        toastr.success('Deleted');
      });
  }

  submit() {
    this.router.navigate(['meals'], {
      queryParams: {
        startDate: this.converterService.serializeDate(this.startDate),
        startTime: this.converterService.serializeTime(this.startTime),
        endDate: this.converterService.serializeDate(this.endDate),
        endTime: this.converterService.serializeTime(this.endTime)
      }
    });
  }
}
