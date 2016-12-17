import { PipeTransform, Pipe, Inject } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {
  constructor(@Inject('defaultTimeFormat') private backendTimeFormat: string) {

  }

  transform(value: Date | moment.Moment, format=this.backendTimeFormat): string {
    return _.isNil(value)
      ? null
      : moment(value).format(format);
  }

}
