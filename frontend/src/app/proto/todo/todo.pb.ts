// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST

/*
  To configure the services you need to provider a configuration for each of them.

  E.g. you can create a module where you configure all of them and then import this module into your AppModule:

  const grpcSettings = { host: environment.grpcHost };

  @NgModule({
    providers: [
      { provide: GRPC_TODO_SERVICE_CLIENT_SETTINGS, useValue: grpcSettings },
    ],
  })
  export class GrpcConfigModule { }
*/

/* tslint:disable */
/* eslint-disable */
import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientSettings,
  GrpcHandler
} from '@ngx-grpc/core';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import {
  AbstractClientBase,
  Error,
  GrpcWebClientBase,
  Metadata,
  Status
} from 'grpc-web';
import { Observable } from 'rxjs';

export class TodoById {
  static fromBinaryReader(instance: TodoById, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }

      switch (reader.getFieldNumber()) {
        case 1:
          instance.id = reader.readInt32();
          break;
        default:
          reader.skipField();
      }
    }

    instance.id = instance.id || 0;
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new TodoById();

    TodoById.fromBinaryReader(instance, new BinaryReader(bytes));

    return instance;
  }

  static toBinaryWriter(instance: TodoById, writer: BinaryWriter) {
    if (instance.id !== undefined && instance.id !== null) {
      writer.writeInt32(1, instance.id);
    }
  }

  static toBinary(instance: TodoById) {
    const writer = new BinaryWriter();

    TodoById.toBinaryWriter(instance, writer);

    return writer.getResultBuffer();
  }

  /**
   * Property id
   */
  public id?: number;

  constructor(value: TodoById = {}) {
    this.id = value.id;
  }
}

export module TodoById {}

export class TodoListRequest {
  static fromBinaryReader(instance: TodoListRequest, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }

      switch (reader.getFieldNumber()) {
        default:
          reader.skipField();
      }
    }
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new TodoListRequest();

    TodoListRequest.fromBinaryReader(instance, new BinaryReader(bytes));

    return instance;
  }

  static toBinaryWriter(instance: TodoListRequest, writer: BinaryWriter) {}

  static toBinary(instance: TodoListRequest) {
    const writer = new BinaryWriter();

    TodoListRequest.toBinaryWriter(instance, writer);

    return writer.getResultBuffer();
  }

  constructor(value: TodoListRequest = {}) {}
}

export module TodoListRequest {}

export class Todo {
  static fromBinaryReader(instance: Todo, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }

      switch (reader.getFieldNumber()) {
        case 1:
          instance.id = reader.readInt32();
          break;
        case 2:
          instance.name = reader.readString();
          break;
        default:
          reader.skipField();
      }
    }

    instance.id = instance.id || 0;
    instance.name = instance.name || '';
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new Todo();

    Todo.fromBinaryReader(instance, new BinaryReader(bytes));

    return instance;
  }

  static toBinaryWriter(instance: Todo, writer: BinaryWriter) {
    if (instance.id !== undefined && instance.id !== null) {
      writer.writeInt32(1, instance.id);
    }
    if (instance.name !== undefined && instance.name !== null) {
      writer.writeString(2, instance.name);
    }
  }

  static toBinary(instance: Todo) {
    const writer = new BinaryWriter();

    Todo.toBinaryWriter(instance, writer);

    return writer.getResultBuffer();
  }

  /**
   * Property id
   */
  public id?: number;

  /**
   * Property name
   */
  public name?: string;

  constructor(value: Todo = {}) {
    this.id = value.id;
    this.name = value.name;
  }
}

export module Todo {}

export class TodoList {
  static fromBinaryReader(instance: TodoList, reader: BinaryReader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }

      switch (reader.getFieldNumber()) {
        case 1:
          (instance.todos = instance.todos || []).push(new Todo());
          reader.readMessage(instance.todos, Todo.fromBinaryReader);
          break;
        default:
          reader.skipField();
      }
    }

    instance.todos = instance.todos || [];
  }

  static fromBinary(bytes: ByteSource) {
    const instance = new TodoList();

    TodoList.fromBinaryReader(instance, new BinaryReader(bytes));

    return instance;
  }

  static toBinaryWriter(instance: TodoList, writer: BinaryWriter) {
    if (instance.todos !== undefined && instance.todos !== null) {
      writer.writeRepeatedMessage(
        1,
        instance.todos as any,
        Todo.toBinaryWriter
      );
    }
  }

  static toBinary(instance: TodoList) {
    const writer = new BinaryWriter();

    TodoList.toBinaryWriter(instance, writer);

    return writer.getResultBuffer();
  }

  /**
   * Property todos
   */
  public todos?: Todo[];

  constructor(value: TodoList = {}) {
    this.todos = value.todos;
  }
}

export module TodoList {}

export const GRPC_TODO_SERVICE_CLIENT_SETTINGS = new InjectionToken(
  'GRPC_TODO_SERVICE_CLIENT_SETTINGS'
);

@Injectable({
  providedIn: 'root'
})
export class TodoServiceClient {
  private client: GrpcClient;

  constructor(
    @Inject(GRPC_TODO_SERVICE_CLIENT_SETTINGS) settings: GrpcClientSettings,
    private handler: GrpcHandler
  ) {
    this.client = new GrpcClient(settings);
  }

  /**
   * Unary RPC
   * @param TodoById request
   * @param Metadata metadata
   * @return Todo
   */
  findOne(requestData: TodoById, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/todo.TodoService/FindOne',
      requestData,
      requestMetadata,
      requestClass: TodoById,
      responseClass: Todo
    }) as Observable<Todo>;
  }

  /**
   * Unary RPC
   * @param TodoListRequest request
   * @param Metadata metadata
   * @return TodoList
   */
  findAll(requestData: TodoListRequest, requestMetadata: Metadata = {}) {
    return this.handler.handle({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/todo.TodoService/FindAll',
      requestData,
      requestMetadata,
      requestClass: TodoListRequest,
      responseClass: TodoList
    }) as Observable<TodoList>;
  }
}
