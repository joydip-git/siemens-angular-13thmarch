import { Component, Inject } from '@angular/core';
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
export class AppComponent {
  title = 'Welcome to Service and Http Requests'

  private postSubscription: Subscription;
  posts?: Post[];
  constructor(@Inject(SERVICE_TOKEN) private _svc: IAppService) {
    this.postSubscription = this._svc.getPosts().subscribe({
      next: (data: Post[]) => { this.posts = data },
      error: (err: Error) => { console.log(err.message) },
      complete: () => { }
    })
  }
}
