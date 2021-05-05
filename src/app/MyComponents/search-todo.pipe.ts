import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTodo',
  pure:false
})
export class SearchTodoPipe implements PipeTransform {

  transform(pipeData,pipeModifier): any {
    return pipeData.filter(eachItem => {
        return(
            eachItem['title'].toLowerCase().includes(pipeModifier.toLowerCase())||
            eachItem['desc'].toLowerCase().includes(pipeModifier.toLowerCase())
          )
    });
  }
}
