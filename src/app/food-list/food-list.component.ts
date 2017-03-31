import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodModule } from '../food/food.module';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() childFoodList: FoodModule[];
  @Output() editFoodSender = new EventEmitter();

  editFoodButton(food: FoodModule) {
      this.editFoodSender.emit(food);
  }
  ngOnInit() {
  }

}
