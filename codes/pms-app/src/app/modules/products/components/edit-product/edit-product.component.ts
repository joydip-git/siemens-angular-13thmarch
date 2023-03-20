import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
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

  private fetchProductSubscription?: Subscription;
  private updateProductSubscription?: Subscription;
  product?: Product;
  loadingCompleted = false
  errorMessage = ''
  editProductForm?: FormGroup;
  imgLabelText = 'Select a new Image file'
  currentFile?: File | null;
  updatedReleaseDate = ''
  initialReleaseDate?: Date;

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private _ps: IProductService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    this.fetchProductSubscription = this._ps
      .getProduct(+snapshot.params['id'])
      .subscribe({
        next: (response: ApiResponse<Product>) => {
          if (response.data !== null) {
            this.product = response.data
            this.initialReleaseDate = new Date(this.product.releaseDate)
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
            price: [this.product?.price],
            starRating: [this.product?.starRating]
          })
        }
      })
  }

  updateDate(event: any) {
    //new Date().toDateString
    this.updatedReleaseDate = event.target.valueAsDate.toDateString()
    console.log(this.updatedReleaseDate)
  }

  //this method will be called when a file is uploaded though <input type='file'> elemnt
  imageSelected(event: any) {
    //target returns the reference of the object for which this event (change) has been fired
    const imageElement = event.target

    //since the elememnt in our case id a file type input element, that has a property 'files', giving you all the files uploaded
    const uploadedFiles: FileList = imageElement.files

    //checking whether any file has been uploaded or not at all
    if (uploadedFiles) {
      //storing the current uploaded file information in the property, since in our case we are uploading just one file
      this.currentFile = uploadedFiles.item(0)
    }
  }

  updateProduct() {
    //get all the form data, except the newly uploaded image file
    const updatedPartialProduct = this.editProductForm?.value
    console.log(updatedPartialProduct)

    //check whether the currently uploaded is defined or undefined
    if (this.currentFile) {
      //then start converting the image data im blob, by using FileReader
      const reader = new FileReader()
      //reader, upon comversion of image data into blob data asynchronously, fires 'load' event, which we need to handle in order to get the blob data
      reader.addEventListener('load',
        () => {
          const blobData = reader.result
          //now complete the updatableProduct object 
          //a.by copying all the property and their values from updatedPartialProduct object and then
          //b. by adding the imageUrl and releaseDate property value additionally
          //to copy the properties and their values from an existing objet to another object, use spread operator (...)

          const updatedProduct: Product = {
            ...updatedPartialProduct,
            releaseDate: this.updatedReleaseDate,
            imageUrl: blobData
          }
          //now send a HTTP request to RESTful API backend server through ProductService object method
          this.updateProductSubscription =
            this._ps
              .updateProduct(updatedProduct)
              .subscribe({
                next: (response: ApiResponse<Product[]>) => {
                  if (response.data !== null) {
                    window.alert('product updated successfully')
                  } else {
                    this.errorMessage = response.message
                  }
                },
                error: (err: Error) => {
                  this.errorMessage = err.message
                },
                complete: () => {
                  this.router.navigate(['/products'])
                }
              })
        }
      )
      //now start converting image data into blob data asynchronously
      reader.readAsDataURL(this.currentFile)
    }
  }

  ngOnDestroy(): void {
    this.fetchProductSubscription?.unsubscribe()
    this.updateProductSubscription?.unsubscribe()
  }

}
