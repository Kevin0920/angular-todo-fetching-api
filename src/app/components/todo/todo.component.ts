import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { 
    let todo1: Todo = {
      title: "Hello World !",
      complete: false
    };
    let todo2: Todo = {
      title: "Hey it is rainning day !",
      complete: false
    };
    let todo3: Todo = {
      title: "Let's go somewhere !",
      complete: false
    };

    this.todos.push(todo1);
    this.todos.push(todo2);
    this.todos.push(todo3);
    
  }

  ngOnInit() {
  }

  addTodo(newTodo) {
    if (newTodo.value !== "") {
      let text: Todo = {title: newTodo.value, complete: false};
      this.todos.push(text);
      newTodo.value = "";
    }
    else {
      alert("No Empty Value !")
    }
  }

  completedTodo(todo) {
    todo.complete = !todo.complete;
  }

}
