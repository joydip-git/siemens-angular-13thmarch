import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from 'src/app/models/product';
import { IProductService } from 'src/app/models/product-service.contract';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  private productSubscription?: Subscription;
  product?: Product;
  loadingCompleted = false
  errorMessage = ''
  editProductForm?: FormGroup;

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: IProductService,
    private builder: FormBuilder
  ) { }

  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    this.productSubscription = this._ps
      .getProduct(+snapshot.params['id'])
      .subscribe({
        next: (response: ApiResponse<Product>) => {
          if (response.data !== null) {
            this.product = response.data
            this.loadingCompleted = true
            this.errorMessage = ''
          } else {
            this.product = undefined
            this.loadingCompleted = true
            this.errorMessage = response.message
          }
        },
        error: (err: Error) => {
          this.product = undefined
          this.loadingCompleted = true
          this.errorMessage = err.message
        },
        complete: () => {
          this.editProductForm = this.builder.group({
            productId: [this.product?.productId],
            productName: [this.product?.productName],
            productCode: [this.product?.productCode],
            description: [this.product?.description],
            releaseDate: [this.product?.releaseDate],
            price: [this.product?.price],
            starRating: [this.product?.starRating],
            imageUrl: [this.product?.imageUrl],
          })
        }
      })
  }
}
