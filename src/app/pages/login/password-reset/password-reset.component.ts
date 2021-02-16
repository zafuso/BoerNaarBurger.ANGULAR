import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  public form = {
    email: null
  };

  constructor(private auth: AuthenticationService, private notify: SnotifyService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.auth.sendPasswordReset(this.form).subscribe(
      data => this.handleResponse(data),
        error => this.notify.error(error.error.error)
    );
  }

  handleResponse(res) {
    console.log(res);
    this.form.email = null;
  }

}
