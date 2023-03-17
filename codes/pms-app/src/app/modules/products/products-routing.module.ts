import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ViewProductComponent } from "./components/view-product/view-product.component";
import { ProductRoutesGuard } from "./services/product-routes.guard";

const productRoutes: Routes = [
    {
        path: 'products',
        canActivate: [ProductRoutesGuard],
        children: [
            {
                path: '',
                component: ProductListComponent
            },
            {
                path: 'add',
                component: AddProductComponent
            },
            {
                path: 'view',
                component: ViewProductComponent
            },
            {
                path: 'edit/:id',
                component: EditProductComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
    constructor() {
        console.log('ProductsRoutingModule object')
    }
}