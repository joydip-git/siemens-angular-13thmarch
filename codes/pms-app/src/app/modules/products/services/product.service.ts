import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/models/api-response';
import { Product } from 'src/app/models/product';
import { IProductService } from 'src/app/models/product-service.contract';
import { HttpClient } from "@angular/common/http";
import { PRODUCT_SERVICE_URL_TOKEN } from 'src/app/constants/app-constants';

@Injectable()
export class ProductService implements IProductService {

  constructor(
    private http: HttpClient,
    @Inject(PRODUCT_SERVICE_URL_TOKEN) private url: string
  ) { }

  getProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(this.url)
  }

  getProduct(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(`${this.url}/${id}`)
  }

  addProduct(p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(this.url, p)
  }

  updateProduct(p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.put<ApiResponse<Product[]>>(`${this.url}/${p.productId}`, p)
  }

  deleteProduct(id: number): Observable<ApiResponse<Product[]>> {
    return this.http.delete<ApiResponse<Product[]>>(`${this.url}/${id}`)
  }
}
