import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'meal-app',
  directives: [NewMealComponent, MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker App</h1>
      <new-meal (onSubmitNewMeal)="addMealToList($event)"></new-meal>
      <hr>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("pizza", "aweful", 1025),
      new Meal("PBJ", "awesome", 250)
    ];
  }
  addMealToList(newMeal: Meal): void {
    this.meals.push(newMeal);
  }
}
