import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';

@Component({
  selector: "meal-list",
  inputs: ["mealList"],
  // directives: [NewMealComponent],
  template: `
    <div *ngFor="#meal of mealList">{{ meal.food }}</div>
  `
})
export class MealListComponent  {
  public mealList: Meal[];
}
