import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAppService } from './app-service.contract';
import { SERVICE_TOKEN } from './constants';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AppService]
})
export class AppComponent implements OnInit, OnDestroy {
  private postSubscription?: Subscription;

  title = 'All Posts'
  posts?: Post[];
  loadingCompleted = false
  errorMessage = ''

  constructor(@Inject(SERVICE_TOKEN) private _svc: IAppService) {

  }
  ngOnDestroy(): void {
    this.postSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.postSubscription = this._svc.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data.slice(0, 10)
        this.loadingCompleted = true
        this.errorMessage = ''
      },
      error: (err: Error) => {
        this.posts = undefined
        this.loadingCompleted = true
        this.errorMessage = err.message
      },
      //complete: () => { }
    })
  }
}
