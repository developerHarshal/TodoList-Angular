import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  query:string;
  constructor() {
    this.query="";
    // localStorage.setItem("todoss",null);
    let localItem = localStorage.getItem("todos");
    if(localItem==null)
      this.todos=[];
    else{
      this.todos=JSON.parse(localItem);
    }
  }

  deleteTodoEvt(todo:Todo){
    //console.log("Delete Clicked");
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    // console.log(this.todos);
  }
  
  addTodoEvt(todo:Todo){
    this.todos.unshift(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    //console.log("Query :"+this.query);
    this.query="";
    // console.log(this.todos);
  }

  toggleDone(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    if(!this.todos[index].active)
      this.moveDoneElementToLast(index);
    else{
      this.moveUnDoneElementToFirst(index);
    }
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.query="";
    // console.log(this.todos);
  }
//splice() adds or deletes the elements

//Moving the element from given index to last 
  moveDoneElementToLast(fromIndex:number) {
    let toIndex = this.todos.length -1;
    var element = this.todos[fromIndex];
    this.todos.splice(fromIndex, 1);
    this.todos.splice(toIndex, 0, element);
}

//Moving the element from given index to First
  moveUnDoneElementToFirst(fromIndex:number) {
    let toIndex = 0;
    var element = this.todos[fromIndex];
    this.todos.splice(fromIndex, 1);
    this.todos.splice(toIndex, 0, element);
  }

  removeAllTodos(todos:Todo[]){
    localStorage.removeItem("todos");
    this.todos=[];
  }

  ngOnInit(): void {
  }
  
}
