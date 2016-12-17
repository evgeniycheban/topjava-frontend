import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './../../../tmp/html/login.component.html'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  submit() {
    this.authenticationService.login(this.username, this.password)
      .subscribe(() => {
        this.router.navigate(['/meals']);
      });
  }
}
