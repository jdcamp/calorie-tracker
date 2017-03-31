import { Component } from '@angular/core';
import { FoodModule } from './food/food.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works this is a test of gh pages!';
  masterFoodList: FoodModule[] = [
    new FoodModule('Taco', 120, 'One taco from the carts'),
    new FoodModule('Cinnabun', 1200, 'It was good'),
    new FoodModule('apple', 80, 'Fiji apple')
];
}
