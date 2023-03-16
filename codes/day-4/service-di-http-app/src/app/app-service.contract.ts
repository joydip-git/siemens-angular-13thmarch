import { Observable } from "rxjs";
import { Post } from "./post";

export interface IAppService {
    getPosts(): Observable<Post[]>;
}