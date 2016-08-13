import { Component } from 'angular2/core';
import { AppComponent } from './app.component';
import { Meal } from './meal.model';
import { SortPipe } from './sort.pipe';
import { MealComponent } from './meal.component';

@Component({
  selector: "meal-list",
  inputs: ["mealList"],
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
