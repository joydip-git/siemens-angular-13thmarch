import { Observable } from "rxjs";
import { ApiResponse } from "./api-response";
import { Product } from "./product";

export interface IProductService {
    getProducts(): Observable<ApiResponse<Product[]>>;
    getProduct(id: number): Observable<ApiResponse<Product>>;
    addProduct(p: Product): Observable<ApiResponse<Product[]>>;
    updateProduct(p: Product): Observable<ApiResponse<Product[]>>;
    deleteProduct(id: number): Observable<ApiResponse<Product[]>>;
}