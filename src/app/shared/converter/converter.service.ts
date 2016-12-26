import { Injectable, Inject } from '@angular/core';
import { Moment } from 'moment';

import * as _ from 'lodash';
import * as moment from 'moment';

@Injectable()
export class ConverterService {
  constructor(@Inject('backendDateFormat') private backendDateFormat,
              @Inject('backendTimeFormat') private backendTimeFormat,
              @Inject('backendDateTimeFormat') private backendDateTimeFormat: string) {
  }

  serializeDate(date: Moment): string {
    return _.isNil(date)
      ? null
      : moment(date).format(this.backendDateFormat);
  }

  deserializeDate(rawDate: string): Moment {
    return this.deserialize(rawDate, this.backendDateFormat);
  }

  deserializeTime(rawTime: string): Moment {
    return this.deserialize(rawTime, this.backendTimeFormat);
  }

  serializeTime(time: Moment): string {
    return _.isNil(time)
      ? null
      : moment(time).format(this.backendTimeFormat);
  }

  serializeDateTime(dateTime: Moment): string {
    return this.serialize(dateTime, this.backendDateTimeFormat);
  }

  deserializeDateTime(rawDateTime: string): Moment {
    return this.deserialize(rawDateTime, this.backendDateTimeFormat);
  }

  private serialize(date: Moment, format: string): string {
    return _.isNil(date)
      ? null
      : date.format(format);
  }

  private deserialize(rawDate: string, format: string): Moment {
    return _.isNil(rawDate)
      ? null
      : moment(rawDate, format);
  }
}
