import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {User} from "../core/models/user.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  @Output() isLogedInChanged = new EventEmitter<boolean>();

  hide = true;
  user: User;
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    if (username && password) {
      this.authService.login(username);
      this.authService.saveToken(password);
      this.user = this.authService.getUserInfo();
      console.log(localStorage, this.user);
      this.isLogedInChanged.emit(true);
    }
  }
}
