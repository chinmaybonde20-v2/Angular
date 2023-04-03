import { Component, Inject } from '@angular/core';
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

  constructor(private http: HttpClient, @Inject(LoginDataService) private loginDataService: LoginDataService) { }


  userLoginFunction(email: string, password: string) {
    console.log("before", this.loginDataService.isLoggedIn)
    this.http.get<any[]>('http://localhost:3000/users').subscribe(data => {
      const user = data.find(user => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('user-info', JSON.stringify(user));
        // localStorage.setItem('isLoggedIn', 'true');
        this.loginDataService.isLoggedIn = true;
        alert('Successfully logged in');
        console.log("after", this.loginDataService.isLoggedIn)
        window.location.href = '/';
      } else {
        alert('User not found, please sign up first');
        window.location.href = '/login-form';
      }
    });
  }
}
