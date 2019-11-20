import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GRPC_TODO_SERVICE_CLIENT_SETTINGS } from './proto/todo/todo.pb';
import { environment } from '../environments/environment';
import { GRPC_INTERCEPTORS } from '@ngx-grpc/core';
import { GrpcWebDevtoolsInterceptor } from './grpc-web-devtools.interceptor';

@NgModule({
  providers: [
    {
      provide: GRPC_INTERCEPTORS,
      useClass: GrpcWebDevtoolsInterceptor,
      multi: true,
    },
    {
      provide: GRPC_TODO_SERVICE_CLIENT_SETTINGS,
      useValue: { host: environment.host },
    },
  ],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
