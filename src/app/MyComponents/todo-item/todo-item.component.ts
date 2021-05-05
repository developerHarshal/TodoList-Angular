import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';
import {Todo} from 'src/app/Todo';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Input() i: Number;
@Output() deleteTodoEmitter:EventEmitter<Todo> = new EventEmitter();
@Output() toggleDoneEmitter:EventEmitter<Todo> = new EventEmitter();

constructor(public datePipe:DatePipe) {}

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    //console.log("HEY");
    this.deleteTodoEmitter.emit(todo);
  }

  toggleDone(todo:Todo){
    this.toggleDoneEmitter.emit(todo);
  }
}
