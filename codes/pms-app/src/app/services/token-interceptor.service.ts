import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { TOKEN_STORAGE_SERVICE_TOKEN } from "../constants/app-constants";
// import { IStorageService } from "../models/storage-service.contract";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req.url)
        const token = sessionStorage.getItem('token')
        const clonedRequest = req.clone({
            headers: req.headers.append(
                'Authorization',
                `Bearer ${token}`
            )
        })
        return next.handle(clonedRequest)
    }

}