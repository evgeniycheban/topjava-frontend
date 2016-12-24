import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthUserSessionService } from './auth-user-session.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,
              private userSessionService: AuthUserSessionService) {
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
