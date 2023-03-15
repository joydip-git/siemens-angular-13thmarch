import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userInfo: User = {
    username: '',
    password: ''
  };

  submitUser() {

  }
}
