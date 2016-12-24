import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from '../shared/auth/auth-user';
import { AuthUserSessionService } from '../shared/auth/auth-user-session.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './../../../tmp/html/navbar.component.html'
})
export class NavbarComponent implements OnInit {
  authorizedUser: AuthUser;

  constructor(private router: Router,
              private userSessionService: AuthUserSessionService,
              private authenticationService: AuthService) {
  }

  ngOnInit() {
    this.authorizedUser = this.userSessionService.getAuthorizedUser();
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['']));
  }
}
