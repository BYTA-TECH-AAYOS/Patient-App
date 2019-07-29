
import { Component, OnInit, Input } from '@angular/core';
import { Util } from '../util/util';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  constructor(
    private util: Util
  ) { }

  ngOnInit() {
    
  }

  profilePage() {
    this.util.navigateProfile();
  }

  settingsPage() {
    this.util.navigateSettings();
  }

  
}
