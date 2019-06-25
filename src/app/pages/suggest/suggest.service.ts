import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item';

@Injectable({
  providedIn: 'root'
})
export class SuggestService {

  constructor(
    private httpService: HttpService
  ) { }

  getMockData(): Observable<Array<Item>> {
    return this.httpService.getMock().pipe();
  }
}
