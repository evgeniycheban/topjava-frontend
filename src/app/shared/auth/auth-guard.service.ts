import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserSessionService } from './auth-user-session.service';

@Injectable()
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router,
              private userSessionService: UserSessionService) {
  }

  canActivate() {
    const authorizedUser = this.userSessionService.getAuthorizedUser();
    if (!authorizedUser) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
