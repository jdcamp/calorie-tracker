import { Component, OnInit, Input } from '@angular/core';
import { FoodModule } from '../food/food.module';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
    @Input() childFoodList: FoodModule[];
  ngOnInit() {
      console.log(this.childFoodList);
  }

}
