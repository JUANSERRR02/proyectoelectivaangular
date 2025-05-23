import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(environment.apiUrl + '/hello');
  }
}
