import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';
import { passwordChecker } from '../../validators/password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private authSubscription?: Subscription;
  constructor(private authSvc: AuthService) {

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordChecker(6, 12)])
  })
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  submitUser() {
    const loggedInUser = <User>this.loginForm.value
    this.authSvc.authenticate(loggedInUser).subscribe()
  }
}
