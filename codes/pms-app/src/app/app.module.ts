import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/root/app.component';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { STORAGE_SERVICE_TOKEN, STORAGE_SERVICE_TYPE } from './constants/app-constants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AuthModule, ProductsModule, AppRoutingModule
  ],
  providers: [
    {
      provide: STORAGE_SERVICE_TOKEN,
      useClass: STORAGE_SERVICE_TYPE
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule object')
  }
}
