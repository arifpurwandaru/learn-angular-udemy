import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';

import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from "./warning-alert/warning-alert.component";
import { SuccessMsgComponent } from "./success-msg/success-msg.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessMsgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
