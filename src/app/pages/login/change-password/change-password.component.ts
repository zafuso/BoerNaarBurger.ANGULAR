import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public error = [];
  public loading = false;
  public form = {
    password: null,
    password_confirmation: null,
    resetToken: null,
    email: null
  };

  constructor(private route: ActivatedRoute, private auth: AuthenticationService, private router: Router) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params.token;
      this.form.email = params.email;
    });
  }

  ngOnInit(): void {
  }

  changePassword() {
    this.loading = true;
    this.auth.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.loading = false;
    this.router.navigateByUrl('/login');
  }

  handleError(error) {
    this.loading = false;
    this.error = error.error.errors;
  }

}
