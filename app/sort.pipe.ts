import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform  {
  transform(input: Meal[], args)  {
    var desiredSort = args[0];
    var output = []
    if(desiredSort === "greaterThan500") {
      for (var i = 0; i < input.length; i++)
      if (input[i].calories > 500) {
        output.push(input[i]);
      }
    } else if(desiredSort === "lessThan500")  {
      for (var i = 0; i < input.length; i++)
      if (input[i].calories < 500) {
        output.push(input[i]);
      }
    } else if(desiredSort === "500")  {
      for (var i = 0; i < input.length; i++)
      if (input[i].calories === 500) {
        output.push(input[i]);
      }
    } else  {
      output = input;
    }
    return output;
  }
}
