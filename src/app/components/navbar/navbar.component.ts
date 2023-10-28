import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  constructor(private loadingBar: LoadingBarService) {}

  isMenuCollapsed = true;

  startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }
}
