import { IAppService } from "./app-service.contract";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Post } from "./post";

@Injectable()
export class AppService implements IAppService {
    private url = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private _http: HttpClient) {

    }
    getPosts(): Observable<Post[]> {
        const postObservable: Observable<Post[]> = this._http.get<Post[]>(this.url)
        return postObservable;

        /*
        const observableResponse: Observable<any> = this._http.get(this.url)
        const postsObservable: Observable<Post[]> =
            observableResponse
                .pipe(
                    map(
                        (resp: any) => {
                            // return resp.map(
                            //     (jsonObj: any) => {
                            //         const p: Post = {
                            //             userId:jsonObj.userId
                            //         }
                            //         return p
                            //     }
                            // )
                            return <Post[]>resp
                        }
                    )
                )
        return ''
        */
    }
}