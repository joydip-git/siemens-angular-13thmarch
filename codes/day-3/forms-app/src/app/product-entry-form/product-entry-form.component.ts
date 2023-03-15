import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { products } from '../data/products';
import { Product } from '../models/product';

@Component({
    selector: 'app-product-entry-form',
    templateUrl: './product-entry-form.component.html'
})

export class ProductEntryFormComponent {

    productForm = new FormGroup({
        productid: new FormControl(0, [Validators.required, Validators.max(100)]),
        productname: new FormControl(''),
        description: new FormControl(''),
        price: new FormControl(0),
        imagePath: new FormControl('')
    })
    get productid() {
        return this.productForm.get('productid')
    }
    get productname() {
        return this.productForm.get('productname')
    }

    submitProduct() {

    }
}