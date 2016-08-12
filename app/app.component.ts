import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-app',
  directives: [NewMealComponent],
  template: `
    <h1>Meal Tracker App</h1>
    <new-meal></new-meal>
  `
})
export class AppComponent {

}
