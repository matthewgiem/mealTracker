import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div>
      <h3>Edit Food Name: {{ meal.food }}</h3>
      <input [(ngModel)]="meal.food"/>
      <h3>Edit Details: {{ meal.details }}</h3>
      <input [(ngModel)]="meal.details"/>
      <h3>Edit Number of Calories: {{ meal.calories }}</h3>
      <input [(ngModel)]="meal.calories"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
