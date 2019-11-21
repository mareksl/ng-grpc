import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceClient, TodoList } from './proto/todo/todo.pb';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Observable<Todo[]>;
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
        name: this.todoForm.value.name,
      });
      this.todoService.addOne(todo).subscribe(data => this.fetchTodos());
    }
  }

  fetchTodos() {
    this.todos = this.todoService.findAll({}).pipe(pluck('todos'));
  }
}
