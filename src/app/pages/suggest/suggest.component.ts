import { Component, OnInit } from '@angular/core';
import { SuggestService } from './suggest.service';
import { Item } from 'src/app/shared/models/item';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {

  mockData: Array<Item> = Array();

  constructor(
    private suggestService: SuggestService
  ) { }

  ngOnInit() {
    this.getMockData();
  }

  getMockData(): void{
    this.suggestService.getMockData().pipe(take(1)).subscribe((mockData: Array<Item>) => {
      this.mockData = mockData;
    })
  }

}
