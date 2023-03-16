import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from 'src/app/models/product';
import { IProductService } from 'src/app/models/product-service.contract';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  title = 'List of Products'
  products?: Product[];
  loadingCompleted = false
  errorMessage = ''

  private productsSubscription?: Subscription;
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private _ps: IProductService) {

  }
  ngOnDestroy(): void {
    this.productsSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.productsSubscription = this._ps.getProducts().subscribe({
      next: (response: ApiResponse<Product[]>) => {
        if (response.data !== null) {
          this.products = response.data
          this.loadingCompleted = true
          this.errorMessage = ''
        } else {
          this.products = undefined
          this.loadingCompleted = true
          this.errorMessage = response.message
        }
      },
      error: (err: Error) => {
        this.products = undefined
        this.loadingCompleted = true
        this.errorMessage = err.message
      }
    })
  }


}
