import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TodoById } from './interfaces/todo-by-id.interface';
import { Todo, TodoList } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {
  private items: Todo[] = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pay Bills' },
    { id: 3, name: 'Play Games' },
  ];

  @GrpcMethod('TodoService')
  findOne(data: TodoById, metadata: any): Todo {
    return this.items.find(({ id }) => id === data.id);
  }

  @GrpcMethod('TodoService')
  findAll(): TodoList {
    return { todos: this.items };
  }
}
