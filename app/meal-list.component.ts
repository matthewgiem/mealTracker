import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';
import { SortPipe } from './sort.pipe';

@Component({
  selector: "meal-list",
  inputs: ["mealList"],
  pipes: [SortPipe],
  // directives: [NewMealComponent],
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="lessThan500">less than 500 calories</option>
      <option value="greaterThan500">greater than 500</option>
      <option value="500">equal to 500</option>
      <option value="none" selected="selected">show all</option>
    </select>
    <br>
    <div *ngFor="#meal of mealList | sort:selectedSort">name: {{ meal.food }}<br>Details: {{ meal.details }}<br>Calories: {{ meal.calories }}<hr></div>
  `
})
export class MealListComponent  {
  public mealList: Meal[];
  public selectedSort: string = "none";

  onChange(optionFromMenu)  {
    this.selectedSort = optionFromMenu;
  }
}
