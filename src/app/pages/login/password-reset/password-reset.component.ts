import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public error = [];
  public loading = false;
  public success = [];
  public form = {
    email: null
  };

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.loading = true;
    this.auth.sendPasswordReset(this.form).subscribe(
      data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.loading = false;
    this.form.email = null;
    this.success = data;

  }

  handleError(error) {
    this.loading = false;
    this.error = error.error.errors;
  }

}
