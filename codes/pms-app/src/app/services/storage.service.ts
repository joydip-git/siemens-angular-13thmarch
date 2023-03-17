import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IStorageService } from "../models/storage-service.contract";

//@Injectable({ providedIn: "root" })
@Injectable()
export class StorageService<T> implements IStorageService<T> {

    private storage = new BehaviorSubject<T | undefined>(undefined)
    private storageObservable = this.storage.asObservable()

    publish(data: T) {
        this.storage.next(data)
    }
    getPublishedData() {
        return this.storageObservable
    }
}