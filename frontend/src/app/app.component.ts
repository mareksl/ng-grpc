import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceClient } from './proto/todo/todo.pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoServiceClient) {}

  ngOnInit() {
    this.todoService.findAll({}).subscribe(data => {
      this.todos = data.todos;
    });
  }
}
