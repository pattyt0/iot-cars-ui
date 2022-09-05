import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yesNoPipe'
})
export class YesNoPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? 'No' : 'Yes';
  }
}
