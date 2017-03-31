import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class FoodModule {
    constructor(public name: string, public calories: number, public details: string){}
}
