import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meal } from '../shared/meal/meal';
import { MealService } from '../shared/meal/meal.service';
import { Observable } from "rxjs";
import { Response } from "@angular/http";


@Component({})
export class MealComponent implements OnInit {
  meal: Meal;

  constructor(private activatedRoute: ActivatedRoute,
              private mealService: MealService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this.mealService.get(Number.parseInt(params['id']))
          .subscribe((meal: Meal) => {
            this.meal = meal;
          });
      } else {
        this.meal = new Meal(null, null, null, null);
      }
    });
  }

  submit() {
    const result: any = this.meal.id
      ? this.mealService.update(this.meal, this.meal.id)
      : this.mealService.save(this.meal);

    result.subscribe(() => {
      //todo
    });
  }

}
