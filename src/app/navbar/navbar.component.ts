import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizedUser } from '../shared/auth/auth-user';
import { UserSessionService } from '../shared/auth/auth-user-session.service';
import { AuthenticationService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './../../../tmp/html/navbar.component.html'
})
export class NavbarComponent implements OnInit {
  authorizedUser: AuthorizedUser;

  constructor(private router: Router,
              private userSessionService: UserSessionService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authorizedUser = this.userSessionService.getAuthorizedUser();
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['']));
  }
}
