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
  selector: 'app-timepicker',
  templateUrl: './../../../tmp/html/timepicker.component.html',
  styleUrls: ['./timepicker.component.sass']
})
export class TimepickerComponent implements OnInit {
  @Input()
  timeModel: Moment;

  @Output()
  timeModelChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  showPopup: boolean;

  constructor(@Inject(ElementRef) private elementRef: ElementRef) {
  }

  ngOnInit() {
    document.addEventListener('click', event => {
      if (!this.isIncludesInEventPath(event)) {
        this.close();
        this.changeTimeModel();
      }
    });
  }

  showOrHidePopup() {
    this.showPopup = !this.showPopup;
    this.timeModel = this.timeModel ? this.timeModel : moment();
    this.changeTimeModel();
  }

  clearTimeModel() {
    this.close();
    this.timeModel = null;
    this.changeTimeModel();
  }

  private isIncludesInEventPath(event) {
    return _.includes(event.path, this.elementRef.nativeElement);
  }

  private changeTimeModel() {
    this.timeModelChange.emit(this.timeModel);
  }

  private close() {
    this.showPopup = false;
  }
}
