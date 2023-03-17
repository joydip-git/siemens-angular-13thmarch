import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TOKEN_STORAGE_SERVICE_TOKEN } from 'src/app/constants/app-constants';
import { IStorageService } from 'src/app/models/storage-service.contract';
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
  errorMessage = ''
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordChecker(6, 12)])
  })

  constructor(
    private authSvc: AuthService,
    private _router: Router,
    private route: ActivatedRoute
  ) {

  }
  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe()
  }

  submitUser() {
    const loggedInUser = <User>this.loginForm.value
    this.authSubscription = this.authSvc
      .authenticate(loggedInUser)
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            console.log(response.data)
            sessionStorage.setItem('token', response.data)
          } else {
            this.errorMessage = response.message
          }
        },
        error: (err: Error) => {
          this.errorMessage = err.message
        },
        complete: () => {
          const snapshot = this.route.snapshot
          const returnUrl = snapshot.queryParams['returnUrl']
          if (returnUrl) {
            this._router.navigate([`/${returnUrl}`])
          } else
            this._router.navigate(['/products'])
        }
      })
  }
}
