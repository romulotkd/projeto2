import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfirstComponent } from './myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component';
import { MythirdComponent } from './mysecond/mythird/mythird.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MaterialComponent } from './material/material.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent,
    MysecondComponent,
    MythirdComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
