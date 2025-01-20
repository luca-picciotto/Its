import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentiComponent } from './studenti/studenti.component';
import { StudenteComponent } from './studenti/studente/studente.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentiComponent,
    StudenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
