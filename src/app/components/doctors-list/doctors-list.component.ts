import { Doctor } from './../../api/models/doctor';
import { Component, OnInit } from '@angular/core';
import { QueryResourceService } from 'src/app/api/services';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {

  doctors: Doctor[] = [];
  constructor(
   private query: QueryResourceService
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors(){
    this.query.findAllDoctorsUsingGET({size:5,page:1}).subscribe(
      doctors => {
        this.doctors = doctors
        console.log(doctors);
      }
      
    ),
    err => console.log("Error getting Doctors");
    

  }
}
