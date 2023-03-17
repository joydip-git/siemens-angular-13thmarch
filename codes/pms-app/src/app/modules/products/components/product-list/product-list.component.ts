import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN, PRODUCT_STORAGE_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from 'src/app/models/product';
import { IProductService } from 'src/app/models/product-service.contract';
import { IStorageService } from 'src/app/models/storage-service.contract';

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
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: IProductService,
    @Inject(PRODUCT_STORAGE_SERVICE_TOKEN) private _storage: IStorageService<Product>,
    private _router: Router
  ) {

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
  saveProduct(p: Product) {
    this._storage.publish(p)
    this._router.navigate(['/products/view'])
  }
}
