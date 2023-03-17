import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRODUCT_STORAGE_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { Product } from 'src/app/models/product';
import { IStorageService } from 'src/app/models/storage-service.contract';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, OnDestroy {

  private productSubscription?: Subscription;
  product?: Product;
  loadingCompleted = false
  errorMessage = ''

  constructor(
    @Inject(PRODUCT_STORAGE_SERVICE_TOKEN) private _storage: IStorageService<Product>
  ) { }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.productSubscription = this._storage.getPublishedData().subscribe({
      next: (data) => {
        if (data) {
          this.product = data
          this.loadingCompleted = true
          this.errorMessage = ''
        } else {
          this.product = undefined
          this.loadingCompleted = true
          this.errorMessage = 'no product found'
        }
      },
      error: (err: Error) => {
        this.product = undefined
        this.loadingCompleted = true
        this.errorMessage = err.message
      }
    })
  }
}
