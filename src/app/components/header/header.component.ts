import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private auth: AuthenticationService, private router: Router, private token: TokenService) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    this.token.remove();
  }
}
