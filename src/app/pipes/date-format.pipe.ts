import { PipeTransform, Pipe, Inject } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  constructor(@Inject('defaultDateFormat') private backendDateFormat: string) {

  }

  transform(value: Date | moment.Moment, format = this.backendDateFormat): string {
    return _.isNil(value)
      ? null
      : moment(value).format(format);
  }

}
