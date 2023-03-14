import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherComponent } from "./another/another.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, AnotherComponent, CalculatorComponent
  ],
  imports: [
    BrowserModule, FormsModule
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
