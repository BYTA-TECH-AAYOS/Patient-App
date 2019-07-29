import { NavController } from '@ionic/angular';
import { KeycloakService } from './../../core/services/keycloak.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;

  constructor(
    private keyCloak: KeycloakService,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  authenticate(){
    this.keyCloak.authenticate(this.username,this.password).then(
      data => this.navController.navigateForward('')
    ),
    err => console.log("Error Login",err);
    
  }
  register(){
    this.navController.navigateForward('/signup');
  }

}
