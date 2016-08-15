import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [SortPipe],
  directives: [MealComponent, EditMealDetailsComponent],
  templateUrl: 'app/meal-list.component.html'
})
export class MealListComponent  {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public selectedSort: string = "none";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  onChange(optionFromMenu)  {
    this.selectedSort = optionFromMenu;
  }
}
