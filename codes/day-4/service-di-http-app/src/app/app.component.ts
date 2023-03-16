import { Component, Inject } from '@angular/core';
import { IAppService } from './app-service.contract';
import { SERVICE_TOKEN } from './constants';
//import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AppService]
})
export class AppComponent {
  title = ''
  private svc: IAppService;
  constructor(@Inject(SERVICE_TOKEN) _svc: IAppService) {
    this.svc = _svc
    this.title = this.svc.getValue()
  }
}
