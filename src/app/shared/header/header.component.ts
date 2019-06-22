import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus = ['หน้าหลัก', 'สินค้า', 'โปรโมชั่น', 'ติดต่อเรา']

  constructor() { }

  ngOnInit() {
  }

}
