export class JwtResponse {
  token: string;
  type: string;
  roles: string[];

  constructor(token: string, type: string) {
    this.token = token;
    this.type = type;
    this.roles = ['user'];
  }
}
