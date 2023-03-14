import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { products } from '../data/products';
import { Product } from '../models/product';

@Component({
    selector: 'app-product-entry-form',
    templateUrl: './product-entry-form.component.html'
})

export class ProductEntryFormComponent {
    submitProduct(data: any) {
        const p = <Product>data
        products.push(p)
        console.log(products)
    }
}