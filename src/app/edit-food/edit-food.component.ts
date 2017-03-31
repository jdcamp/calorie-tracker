import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodModule } from '../food/food.module';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {
    @Input() childSelectedFood: FoodModule;
    @Output() editFoodSender = new EventEmitter();

    doneButtonClicked() {
        alert("TODO: Set masterEditFoodView to null");
    }
  ngOnInit() {
  }

}
