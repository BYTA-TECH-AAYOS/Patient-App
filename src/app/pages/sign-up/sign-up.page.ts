import { Util } from './../../core/util/util';
import { NavController } from '@ionic/angular';
import { KeycloakService } from './../../core/services/keycloak.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  username: string;
  password: string;
  email: string;
  constructor(
    private keycloakService: KeycloakService,
    private navController: NavController,
    private util: Util
  ) { }

  ngOnInit() {

  }

  register(){
    this.keycloakService.createAccount(
      {
        username: this.username,
        email: this.email 
      },this.password,(data)=>{
        this.navController.navigateForward('/login');
      },(err)=>{
        this.util.createToast("can't Register")
        .then(
          loader => loader.present()
        )
      })
  }
}
