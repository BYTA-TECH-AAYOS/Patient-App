import { ComponentsModule } from './../components/components.module';
import { DoctorsListComponent } from './../components/doctors-list/doctors-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

@NgModule({
  
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  entryComponents:[
    DoctorsListComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
