import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = environment.BNB_API_URL;

  constructor(private http: HttpClient) { }

  getUser(): object {
    return this.http.get(`${this.baseUrl}/api/user`);
  }
}
