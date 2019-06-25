import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sendToggleMenu: EventEmitter<boolean> = new EventEmitter();
  toggleMenuStatus: boolean = false;

  menus = ['หน้าหลัก', 'สินค้า', 'โปรโมชั่น', 'ติดต่อเรา']

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggleMenuStatus = !this.toggleMenuStatus
    this.sendToggleMenu.emit(this.toggleMenuStatus)
  }

}
