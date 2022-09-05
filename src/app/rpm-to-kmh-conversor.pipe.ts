import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rpmToKmhConversion'
})
export class RpmToKmhConversionPipe implements PipeTransform {

  transform(values: Array<any>, ...args: any[]): any {
    const KMH_DEFAULT_VALUE = 0;
    console.log('transform values: ', values);
    console.log('transform args: ', args);
    const carTierRadio = args[0];

    values.forEach((value) => {
      if (carTierRadio < 0) {
        value.kmh = KMH_DEFAULT_VALUE;
        return;
      }
      const kmhConverted = (3 / 25) * Math.PI * carTierRadio * value;
      if (kmhConverted > KMH_DEFAULT_VALUE) {
        value.kmh = kmhConverted;
      } else {
        value.kmh = KMH_DEFAULT_VALUE;
      }
    });

    return values;
  }

}
