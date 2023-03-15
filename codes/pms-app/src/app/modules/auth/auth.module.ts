import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordValidatorDirective } from './directives/password-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
