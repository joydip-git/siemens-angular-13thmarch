import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TOKEN_STORAGE_SERVICE_TOKEN, TOKEN_STORAGE_SERVICE_TYPE } from 'src/app/constants/app-constants';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    AuthService,
    {
      provide: TOKEN_STORAGE_SERVICE_TOKEN,
      useClass: TOKEN_STORAGE_SERVICE_TYPE
    }
  ]
})
export class AuthModule {
  constructor() {
    console.log('AuthModule object')
  }
}
