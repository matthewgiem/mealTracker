import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import {  } from './'

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <label>
        <hr> what {{ meal.calories}}
      </label>
    </div>
  `
})
export class MealComponent  {
  public meal: Meal[];
}

      // name: {{ meal.food }}<br>Details: {{ meal.details }}<br>Calories: {{ meal.calories }}
