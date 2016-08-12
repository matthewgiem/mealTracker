import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div>
      <h3>Add the last meal you ate:</h3>
      <input placeholder="food" #newFood>
      <input placeholder="details" #newDetails>
      <input placeholder="calories" #newCalories>
      <button class="btn-success btn-lg" (click)="addMeal(newFood, newDetails, newCalories)">Add</button>
    </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newFood: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newMeal = new Meal(newFood.value, newDetails.value, parseFloat(newCalories.value));
    console.log(newMeal);
    this.onSubmitNewMeal.emit(newMeal);
    newFood.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
