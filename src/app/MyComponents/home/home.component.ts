import { Component, Inject, OnInit } from '@angular/core';
import { LoginDataService } from 'src/app/MyServices/LoginData/login-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginDataService: LoginDataService) { }
  isLoggedIn = false;
  ngOnInit(): void {
    console.log("chinmay")
    this.isLoggedIn = this.loginDataService.isLoggedIn;
  }

}
