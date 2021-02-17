import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../models/user.model';
import {catchError, map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.BNB_API_URL;

  constructor(private http: HttpClient, private token: TokenService) { }

  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/api/user`, {headers: new HttpHeaders().set(`Authorization`, `Bearer ${this.token.get()}`)}).pipe(
      map(data => new User().deserialize(data)),
      catchError(() => throwError('User not found'))
    );
  }
}
