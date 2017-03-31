import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { CalorieFilterPipe } from './calorie-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    AddFoodComponent,
    EditFoodComponent,
    CalorieFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
