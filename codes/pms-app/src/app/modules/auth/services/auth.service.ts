import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AUTH_SERVICE_URL_VALUE } from "src/app/constants/app-constants";
import { ApiResponse } from "src/app/models/api-response";
import { User } from "src/app/models/user";

@Injectable()
export class AuthService {
    constructor(private _http: HttpClient) {

    }
    authenticate(user: User): Observable<ApiResponse<string>> {
        return this._http.post<ApiResponse<string>>(`${AUTH_SERVICE_URL_VALUE}/authenticate`, user)
    }
    register(user: User): Observable<ApiResponse<User>> {
        return this._http.post<ApiResponse<User>>(`${AUTH_SERVICE_URL_VALUE}/register`, user)
    }
}