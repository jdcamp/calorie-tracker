import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calorieFilter'
})
export class CalorieFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
