import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form = {
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null,
  };

  public formFields: any;
  public error = [];

  constructor(private http: HttpClient, private authenticate: AuthenticationService,
              private token: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.authenticate.newUser(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.authenticate.changeAuthStatus(true);
    this.router.navigateByUrl('/account');
  }

  handleError(error) {
    this.error = error.error.errors;
  }
}
