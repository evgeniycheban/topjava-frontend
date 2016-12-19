import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Inject,
  ElementRef
} from '@angular/core';

import { Moment } from 'moment';

import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-datepicker',
  templateUrl: './../../../tmp/html/datepicker.component.html',
  styleUrls: ['./datepicker.component.sass']
})
export class DatepickerComponent implements OnInit {
  @Input()
  dateModel: Moment;

  @Output()
  dateModelChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  showPopup: boolean;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {
  }

  ngOnInit() {
    document.addEventListener('click', event => {
      if (!this.isIncludesInEventPath(event) && this.showPopup) {
        this.close();
        this.changeDateModel();
      }
    });
  }

  showOrHidePopup() {
    this.showPopup = !this.showPopup;
    this.dateModel = this.dateModel ? this.dateModel : moment();
    this.changeDateModel();
  }

  hidePopup(event) {
    this.close();
    this.dateModel = event;
    this.changeDateModel();
  }

  clearDateModel() {
    this.close();
    this.dateModel = null;
    this.changeDateModel();
  }

  private isIncludesInEventPath(event) {
    return _.includes(event.path, this.elementRef.nativeElement);
  }

  private changeDateModel() {
    this.dateModelChange.emit(this.dateModel);
  }

  private close() {
    this.showPopup = false;
  }
}
