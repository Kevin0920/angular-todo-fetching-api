import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newValue: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.todos.length === 0) {
      this.todos = [...this.todos, {title: this.newValue, complete: false}];
      this.newValue = '';
    } else {
      
    }
   return this.todos;
  }

  completedTodo(todo) {
    todo.complete = !todo.complete;
  }

}
