import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }
  
  getMock(): Observable<any> {
    return this.httpClient.get('assets/mocks/stock.json')
  }
}
