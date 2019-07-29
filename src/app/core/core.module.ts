
import { Util } from './util/util';

import { AuthInterceptor } from './guards/auth-interceptor';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeycloakService } from './services/keycloak.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [

    Util,
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
        ngModule: CoreModule,
        providers: [KeycloakService]
    };
}
}
