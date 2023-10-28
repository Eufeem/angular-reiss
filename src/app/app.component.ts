import { Component } from '@angular/core';
import { environment } from './../environments/environment';

import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-reiss';

  constructor(private loadingBar: LoadingBarService) {
    console.log(environment.production); 
    // Logs false for development environment
  }

}
