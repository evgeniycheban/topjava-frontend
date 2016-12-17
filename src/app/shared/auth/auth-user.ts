export class AuthorizedUser {
  constructor(public email: string,
              public name: string,
              public admin: boolean) {

  }

  isAdmin() {
    return this.admin;
  }
}
