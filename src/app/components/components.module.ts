import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [
    DoctorsListComponent
  ],
  declarations: [
    DoctorsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
