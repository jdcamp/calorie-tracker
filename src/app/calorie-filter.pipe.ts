import { Pipe, PipeTransform } from '@angular/core';
import { FoodModule } from './food/food.module';

@Pipe({
  name: 'calorieFilter',
  pure: true
})
export class CalorieFilterPipe implements PipeTransform {

  transform(input: FoodModule[], operator: string, number = 500) {

    let output: FoodModule[] = [];
    for (let i = 0; i < input.length; i++) {
      if (operator === '<=') {
        if (input[i].calories <= number) {
          output.push(input[i]);
        }
      } else if (operator === '>=') {
        if (input[i].calories >= number) {
          output.push(input[i]);
        }
      } else {
        return input;
      }
      return output;
    }
  }
}
