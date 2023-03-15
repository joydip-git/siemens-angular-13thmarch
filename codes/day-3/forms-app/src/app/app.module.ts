import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherComponent } from "./another/another.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEntryFormComponent } from './product-entry-form/product-entry-form.component';

@NgModule({
  declarations: [
    AppComponent, AnotherComponent, CalculatorComponent, ProductEntryFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
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
