import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SERVICE_TOKEN, SERVICE_TOKEN_TYPE } from './constants';

// export function factory() {
//   return new AppService()
// }
//const svc = new AppService()
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TOKEN_TYPE
    }
    //AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
