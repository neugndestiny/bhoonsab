import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showSubMenu: boolean = false

  constructor(
  ) { }

  ngOnInit() {
  }

  receivedToggle(event) {
    this.showSubMenu = event
  }
  
  showSlide(e) {
    let i;
  }

}
