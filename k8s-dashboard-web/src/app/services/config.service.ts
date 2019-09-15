import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  setConfig(payload) {
    return this.httpClient.post('/api/config/', payload);
  }

  getConfig() {
    return this.httpClient.get('/api/config/');
  }
}
