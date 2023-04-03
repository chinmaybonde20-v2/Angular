import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  isLoggedIn = false;

  constructor() { }
}
