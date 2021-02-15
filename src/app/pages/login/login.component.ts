import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  };
  public error = null;
  public formFields: any;

  constructor(private http: HttpClient, private authenticate: AuthenticationService,
              private token: TokenService, private auth: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    this.authenticate.postLogin(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/account-overview');
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
