import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfirstComponent } from './myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component';
import { MythirdComponent } from './mythird/mythird.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent,
    MysecondComponent,
    MythirdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
