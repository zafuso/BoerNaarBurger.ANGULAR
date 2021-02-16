import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = environment.BNB_API_URL;
  private loggedIn = new BehaviorSubject < boolean >(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();


  constructor(private http: HttpClient, private token: TokenService) { }

  postLogin(credentials: any) {
    return this.http.post(`${this.baseUrl}/api/login`, credentials);
  }

  newUser(data: any) {
    return this.http.post(`${this.baseUrl}/api/user/create`, data);
  }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

}
