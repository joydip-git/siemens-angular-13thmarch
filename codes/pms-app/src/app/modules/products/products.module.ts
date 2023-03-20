import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCT_SERVICE_TOKEN, PRODUCT_SERVICE_TYPE, PRODUCT_SERVICE_URL_TOKEN, PRODUCT_SERVICE_URL_VALUE } from 'src/app/constants/app-constants';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductRoutesGuard } from './services/product-routes.guard';
import { ErrorTemplateComponent } from './components/error-template/error-template.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';



@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent,
    FilterProductComponent,
    ErrorTemplateComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductRoutesGuard,
    {
      provide: PRODUCT_SERVICE_URL_TOKEN,
      useValue: PRODUCT_SERVICE_URL_VALUE
    },
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE_TYPE
    }
  ],
  exports: [ProductListComponent]
})
export class ProductsModule {
  constructor() {
    console.log('ProductsModule object')
  }
}
