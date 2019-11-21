import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TodoById } from './interfaces/todo-by-id.interface';
import { Todo, TodoList } from './interfaces/todo.interface';

@Controller('todo')
export class TodoService {
  private items: Todo[] = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pay Bills' },
    { id: 3, name: 'Play Games' },
  ];

  @GrpcMethod()
  findOne(data: TodoById, metadata: any): Todo {
    return this.items.find(({ id }) => id === data.id);
  }

  @GrpcMethod()
  findAll(): TodoList {
    return { todos: this.items };
  }

  @GrpcMethod()
  addOne(data: Todo, metadata: any): Todo {
    this.items.push(data);
    return data;
  }
}
