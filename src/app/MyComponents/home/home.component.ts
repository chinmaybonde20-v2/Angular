import { Component,Inject } from '@angular/core';
import { LoginDataService } from 'src/app/MyServices/LoginData/login-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(@Inject(LoginDataService) public loginDataService: LoginDataService) { }

}
