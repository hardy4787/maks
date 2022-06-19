import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Output() isLogedInChanged = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  onLogout() {
    this.authService.logout();
    this.isLogedInChanged.emit(false);
  }
}
