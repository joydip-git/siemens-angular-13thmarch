import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherComponent } from "./another/another.component";

@NgModule({
  declarations: [
    AppComponent, AnotherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    //AnotherComponent
  ]
})
export class AppModule {
  constructor() {
    console.log('App module created')
  }
}
