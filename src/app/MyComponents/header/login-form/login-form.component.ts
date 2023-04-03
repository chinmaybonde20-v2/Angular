import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDataService } from 'src/app/MyServices/LoginData/login-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  // ngModel names
  email: string = '';
  password: string = '';
  isLoggedIn = false;

  constructor(private http: HttpClient, private loginDataService: LoginDataService) { }

  userLoginFunction(email: string, password: string) {
    this.http.get<any[]>('http://localhost:3000/users').subscribe(data => {
      const user = data.find(user => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('user-info', JSON.stringify(user));
        alert('Successfully logged in');
        this.loginDataService.isLoggedIn = true;
        window.location.href = '/';
      } else {
        alert('User not found, please sign up first');
        window.location.href = '/login-form';
      }
    });
  }
}
