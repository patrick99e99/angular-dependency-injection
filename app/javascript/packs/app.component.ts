import { inject, Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: '<p>this {{ status }}</p>'
})
export class AppComponent {
  status: string
  service: AppService;
//  constructor () {
//    this.service = inject(AppService);
//    this.status = 'works!';
//  }

  constructor (private service: AppService) {
    this.status = 'does not work!';
  }
}
