import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc:string;
  //form = new FormGroup({});
  @Output() addTodoEmitter:EventEmitter<Todo>= new EventEmitter();
  constructor(public datePipe:DatePipe) { }

  ngOnInit(): void {
    //this.resetAddTodoForm();
  }
  addTodo(form:FormGroup){
    let todo:Todo={
      title:this.title,
      desc:this.desc,
      active:true,
      addDate: new Date()
    }
    this.addTodoEmitter.emit(todo);
    form.reset();
    //this.resetAddTodoForm();
  }
  resetAddTodoForm(){
    this.title="";
    this.desc="";
  }
}
