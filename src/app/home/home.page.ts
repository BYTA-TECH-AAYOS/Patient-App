import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  segment : "";
  constructor() {}

segmentChanged(event){
  this.segment = event.detail.value;
  console.log("selected segment :",this.segment);
}
}