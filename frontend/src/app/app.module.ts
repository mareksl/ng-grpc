import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GRPC_TODO_SERVICE_CLIENT_SETTINGS } from './proto/todo/todo.pb';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: GRPC_TODO_SERVICE_CLIENT_SETTINGS, useValue: environment.host },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
