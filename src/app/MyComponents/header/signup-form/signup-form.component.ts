import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  // ngModel names
  userName: string = '';
  email: string = '';
  role: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  storeSignupDataFunc(signReset: NgForm) {
    // Object
    const signupDataObj = {
      userName: this.userName,
      email: this.email,
      role: this.role,
      password: this.password
    };
    // Json server
    this.http.post('http://localhost:3000/users', signupDataObj)
      .subscribe(() => {
        alert('successfully registered the user');
        window.location.href = '/login-form';
      });
    // Reset form
    signReset.resetForm();
    this.userName = '';
    this.email = '';
    this.role = '';
    this.password = '';
  };
}
