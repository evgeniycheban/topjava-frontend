import {
  OnInit,
  EventEmitter,
  Input,
  Inject,
  ElementRef,
  Component, Output
} from '@angular/core';

import { Moment } from 'moment';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './../../../tmp/html/datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.sass']
})
export class DateTimePickerComponent implements OnInit {
  dateModel: Moment;
  timeModel: Moment;

  @Input()
  dateTimeModel: Moment;

  @Output()
  dateTimeModelChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  showPopup: boolean;

  constructor(@Inject(ElementRef) private elementRef: ElementRef,
              @Inject('backendDateFormat') private backendDateFormat: string,
              @Inject('backendTimeFormat') private backendTimeFormat: string) {
  }

  ngOnInit() {
    document.addEventListener('click', event => {
      if (!this.isIncludesInEventPath(event) && this.showPopup) {
        if (!this.dateTimeModel) {
          this.changeDateTimeModel();
        }
        this.close();
      }
    });
  }

  showOrHidePopup() {
    this.showPopup = !this.showPopup;
    this.dateTimeModel = this.dateTimeModel ? this.dateTimeModel : moment();
    this.dateModel = this.dateTimeModel;
    this.timeModel = this.dateTimeModel;
    this.dateTimeModelChange.emit(this.dateTimeModel);
  }

  changeDateTimeModel() {
    this.dateTimeModel = this.getDateTimeModel();
    this.dateTimeModelChange.emit(this.dateTimeModel);
  }

  getDateTimeModel(): Moment {
    return moment(this.getDate() + ' ' + this.getTime());
  }

  getDate(): string {
    return moment(this.dateModel).format(this.backendDateFormat);
  }

  getTime(): string {
    return moment(this.timeModel).format(this.backendTimeFormat);
  }

  changeDateModel(event) {
    this.dateModel = event;
    this.changeDateTimeModel();
  }

  changeTimeModel(event) {
    this.timeModel = event;
    this.changeDateTimeModel();
  }

  clearDateTimeModel() {
    this.showPopup = false;
    this.dateModel = null;
    this.timeModel = null;
    this.dateTimeModel = null;
    this.dateTimeModelChange.emit(this.dateTimeModel);
  }

  private isIncludesInEventPath(event) {
    return _.includes(event.path, this.elementRef.nativeElement);
  }

  private close() {
    this.showPopup = false;
  }

}
