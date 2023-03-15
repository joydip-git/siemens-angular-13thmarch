import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEntryFormComponent } from './components/product-entry-form/product-entry-form.component';


@NgModule({
  declarations: [
    ProductEntryFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductEntryFormComponent]
})
export class ProductsModule { }
