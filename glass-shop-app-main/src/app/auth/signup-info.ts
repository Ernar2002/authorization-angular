export class SignUpInfo {
  firstName: string;
  lastName: string;
  email: string;
  role: string[];
  password: string;

  constructor(firstName: string, email: string, lastName: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = ['user'];
  }
}
