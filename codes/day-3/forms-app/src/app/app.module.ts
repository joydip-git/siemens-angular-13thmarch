import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherComponent } from "./another/another.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsModule } from './modules/products/products.module';


@NgModule({
  declarations: [
    AppComponent, AnotherComponent, CalculatorComponent
  ],
  imports: [
    BrowserModule, ProductsModule
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
