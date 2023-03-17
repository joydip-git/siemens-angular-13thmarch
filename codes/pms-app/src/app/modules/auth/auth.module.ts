import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';



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
  providers: [AuthService]
})
export class AuthModule {
  constructor() {
    console.log('AuthModule object')
  }
}
