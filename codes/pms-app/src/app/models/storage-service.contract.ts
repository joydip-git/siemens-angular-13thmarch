import { Observable } from "rxjs";

export interface IStorageService<T> {
    publish(data: T): void;
    getPublishedData(): Observable<T | undefined>
}