import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelper: JwtHelperService) { }

  handle(token) {
    this.set(token);
  }

  checkToken(token, decode64 = false): boolean {
    try {
      if (decode64) {
        token = atob(token);
      }

      return this.jwtHelper.decodeToken(token);
    } catch (e) {
      return false;
    }
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  loggedIn() {
    if (this.get()){
      const isTokenValid = this.checkToken(this.get(), false);

      if (!isTokenValid) {
        this.remove();
      }
    }
    return !this.jwtHelper.isTokenExpired(this.get());
  }

}
