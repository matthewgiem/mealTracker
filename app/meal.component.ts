import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
      <h2>
        Name: {{ meal.food }}<br>Details: {{ meal.details }}<br>Calories: {{ meal.calories }}
      </h2>
      <hr>
  `
})
export class MealComponent  {
  public meal: Meal;
}
