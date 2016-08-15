import { Component } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [SortPipe],
  directives: [MealComponent],
  templateUrl: 'app/meal-list.component.html'
})
export class MealListComponent  {
  public mealList: Meal[];
  public selectedSort: string = "none";

  onChange(optionFromMenu)  {
    this.selectedSort = optionFromMenu;
  }
}
