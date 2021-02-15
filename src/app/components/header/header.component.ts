import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
  }
}
