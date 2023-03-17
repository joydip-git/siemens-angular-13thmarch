import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  userInfo: User = {
    username: '',
    password: ''
  };
  errorMessage = ''
  private authSubscription?: Subscription;
  constructor(
    private authSvc: AuthService,
    private router: Router) { }

  ngOnDestroy(): void {
    this.authSubscription?.unsubscribe()
  }
  submitUser() {
    this.authSubscription = this.authSvc
      .register(this.userInfo)
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.errorMessage = ''
            window.alert('Registered successfully')
          } else {
            this.errorMessage = response.message
          }
        },
        error: (err: Error) => {
          this.errorMessage = err.message
        },
        complete: () => {
          this.router.navigate(['/login'])
        }
      })
  }
}
