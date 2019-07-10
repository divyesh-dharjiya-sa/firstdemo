import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
