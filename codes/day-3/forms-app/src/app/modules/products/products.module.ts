import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEntryFormComponent } from './components/product-entry-form/product-entry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductEntryFormComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [ProductEntryFormComponent]
})
export class ProductsModule { }
