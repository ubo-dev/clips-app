import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  showAlert = false;
  alertMsg = 'Please wait! Your account is being login...';
  alertColor = 'blue';

  login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being logged in...';
    this.alertColor = 'blue';
  }
}
