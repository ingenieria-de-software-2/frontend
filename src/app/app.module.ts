import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from "ng2-charts";

/* SOCKETS */
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = {
  url: environment.wsurl,
  options: {
    transports: ['websocket', 'polling']
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    NgChartsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
