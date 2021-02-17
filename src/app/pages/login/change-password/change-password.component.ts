import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public error = [];
  public form = {
    password: null,
    password_confirmation: null,
    resetToken: null
  };

  constructor(private route: ActivatedRoute, private auth: AuthenticationService) {
    route.queryParams.subscribe(params => {
      this.form.resetToken = params.token;
    });
  }

  ngOnInit(): void {
  }

  changePassword() {
    this.auth.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(Data) {
  }

  handleError(error) {
  }

}
