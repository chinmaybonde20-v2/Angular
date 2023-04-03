import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userName = '';
  role = '';
  // LoginFormComponent: any;

  constructor() { }

  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('user-info') || '');
    this.userName = userInfo?.userName;
    this.role = userInfo?.role;
    
  }
}


