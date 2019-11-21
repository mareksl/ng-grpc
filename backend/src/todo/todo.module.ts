import { Module } from '@nestjs/common';
import { TodoService } from './todo.controller';

@Module({
  controllers: [TodoService],
})
export class TodoModule {}
