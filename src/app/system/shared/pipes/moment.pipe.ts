import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'pmrMoment'
})

export class MomentPipe implements PipeTransform {
  transform(value: any, formatFrom: string, formatTo: string = 'DD.MM.YYYY'): string {
   return moment(value, formatFrom).format(formatTo);
  }

}
