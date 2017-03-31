import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FoodModule } from '../food/food.module';


@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
    @Output() newFoodSender = new EventEmitter();

  submitForm(name: string, calories: number, details: string) {
    if (name === '' || calories < 0 || details === '') {
        alert('form not completed');
        return;
    }
    let newFoodToAdd = new FoodModule(name, calories, details);
    this.newFoodSender.emit(newFoodToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
