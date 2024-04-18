import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  testDataUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getTestDataConfig() {
    return this.http.get/* <Config> */(this.testDataUrl);
  }

  getTestData() {
    return this.http.get('assets/test_data.txt', { responseType: 'text' });
  }
}
