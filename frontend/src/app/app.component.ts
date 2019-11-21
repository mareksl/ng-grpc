import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceClient } from './proto/todo/todo.pb';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  todoForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private todoService: TodoServiceClient) {}

  ngOnInit() {
    this.fetchTodos();
  }

  onSubmit() {
    if (this.todoForm.value.name !== '') {
      const todo = new Todo({
        id: this.todos.length,
        name: this.todoForm.value.name,
      });
      this.todoService.addOne(todo).subscribe(data => console.log(data));
      this.fetchTodos();
    }
  }

  fetchTodos() {
    this.todoService.findAll({}).subscribe(data => {
      this.todos = data.todos;
    });
  }
}
