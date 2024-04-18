import { Component } from '@angular/core';
import { TestDataService } from './test-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-rate-limiter';

  clicks = 0;

  constructor(private tds: TestDataService) {}

  add_click() {
    this.clicks++;
  }

  getTestDataConfig() {
    this.tds.getTestDataConfig().subscribe(data => console.log('json'));
  }

  getTestData() {
    this.tds.getTestData().subscribe(data => console.log('txt'));
  }
}
