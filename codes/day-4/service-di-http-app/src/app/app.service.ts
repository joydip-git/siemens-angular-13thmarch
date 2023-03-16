import { IAppService } from "./app-service.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService implements IAppService {
    private url = 'https://jsonplaceholder.typicode.com/posts'
    // private _http: HttpClient;
    constructor(private _http: HttpClient) {
        // this._http = _http
    }

    getValue(): string {
        return 'hello from service'
    }
}