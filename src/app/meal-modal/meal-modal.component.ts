import {
  OnInit,
  Component,
  ViewChild,
  Inject,
  ElementRef
} from '@angular/core';

import { Meal } from '../shared/meal/meal';
import { MealService } from '../shared/meal/meal.service';
import { ModalDirective } from 'ng2-bootstrap';
import { MealListComponent } from '../meal-list/meal-list.component';
import { DateTimePickerComponent } from '../datetimepicker/datetimepicker.component';
import * as _ from 'lodash';
import * as toastr from 'toastr';

@Component({
  selector: 'app-meal-modal',
  templateUrl: './../../../tmp/html/meal-modal.component.html',
  styleUrls: ['./meal-modal.component.sass'],
  exportAs: 'mealModal'
})
export class MealModalComponent implements OnInit {
  @ViewChild('mealModal') public mealModal: ModalDirective;

  @ViewChild(DateTimePickerComponent) public dateTime;

  meal: Meal;

  constructor(private mealService: MealService,
              private mealListComponent: MealListComponent,
              @Inject(ElementRef) private elementRef: ElementRef) {
  }

  ngOnInit() {
    document.addEventListener('click', (event) => {
      if (!this.isIncludesInEventPath(event)) {
        this.dateTime.dateTimeModel = null;
      }
    });
    this.createEmptyMeal();
  }

  private isIncludesInEventPath(event) {
    return _.includes(event.path, this.elementRef.nativeElement);
  }


  submit() {
    const result: any = this.meal.id
      ? this.mealService.update(this.meal, this.meal.id)
      : this.mealService.save(this.meal);

    result.subscribe(() => {
      this.mealListComponent.refreshFilteredMeals();
      this.hideModal();
      this.dateTime.dateTimeModel = null;
      toastr.success('Saved');
    });
  }

  showAddModal() {
    this.createEmptyMeal();
    this.mealModal.show();
  }

  showEditModal(id: number) {
    this.mealService.get(id)
      .subscribe((meal: Meal) => {
        this.meal = meal;
      });
    this.mealModal.show();
  }

  hideModal() {
    this.mealModal.hide();
    this.dateTime.dateTimeModel = null;
  }

  createEmptyMeal() {
    this.meal = new Meal(null, null, null, null);
  }

}
