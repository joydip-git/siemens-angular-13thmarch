import { Product } from "../models/product"
import { ProductService } from "../modules/products/services/product.service"
import { StorageService } from "../services/storage.service"

export const PRODUCT_SERVICE_TOKEN = 'PRODUCT_SERVICE_TOKEN'
export const PRODUCT_SERVICE_TYPE = ProductService

export const PRODUCT_STORAGE_SERVICE_TOKEN = 'PRODUCT_STORAGE_SERVICE_TOKEN'
export const PRODUCT_STORAGE_SERVICE_TYPE = StorageService<Product>

export const PRODUCT_SERVICE_URL_TOKEN = 'PRODUCT_SERVICE_URL_TOKEN'
export const PRODUCT_SERVICE_URL_VALUE = 'http://127.0.0.1:3003/products'