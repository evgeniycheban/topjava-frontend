import { PipeTransform, Inject, Pipe } from '@angular/core';
import { Moment } from 'moment';

import * as moment from 'moment';
import * as _ from 'lodash';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {
  constructor(@Inject('defaultDateTimeFormat') private defaultDateTimeFormat: string) {

  }

  transform(value: Date | Moment, format = this.defaultDateTimeFormat): string {
    return _.isNil(value)
      ? null
      : moment(value).format(format);
  }

}
