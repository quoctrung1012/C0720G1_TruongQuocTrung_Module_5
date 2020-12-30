import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private router: Router) {
  }

  isCardNameRoute() {
    return this.router.url.includes('/name-card');
  }
  isProgressBar(){
    return this.router.url.includes('/progress-bar');
  }
}
