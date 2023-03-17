import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";

const productRoutes: Routes = [
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/add',
        component: AddProductComponent
    },
    {
        path: 'products/view',
        component: ViewProductComponent
    },
    {
        path: 'products/edit/:id',
        component: EditProductComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
    constructor() {
        console.log('ProductsRoutingModule object')
    }
}