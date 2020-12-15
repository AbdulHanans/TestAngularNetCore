import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';
import { DataTablesModule } from 'angular-datatables';
import * as $ from 'jquery';

@Component({
  selector: 'app-promote-student',
  templateUrl: './promote-student.component.html',
  styleUrls: ['./promote-student.component.css']
})
export class PromoteStudentComponent implements OnInit {

  classesD = [];

  classD = [];

  dtOptions: DataTables.Settings = {};
  obj: any = new Object();
  objC: Object = new Object();


  constructor(private http: HttpClient, private serviceClasses: ClassesService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getClasses();
    console.log("classes", this.classesD);
    
  }

  getClasses() {
    this.classesD = [];
    this.serviceClasses.getClasses().subscribe((data) => {
      //this.classesD = data;
      this.obj = data;
      this.obj.forEach((data) => {
        this.classesD.push(data);
      });
    });
  }


  getClass(cId: number) {
    this.classD = [];

    this.serviceClasses.getClass(cId).subscribe((data) => {

      this.objC = [{ data }] as Object;
      this.objC.forEach((data) => {
        console.log('da', data);
        this.serviceClasses.getStudents().subscribe((stData) => {

          stData.forEach((data) => {
            // console.log('d', data);
            if (data.currentClass == cId) {

              this.classD.push(data);

            }
          });
        });

      });
    });
  }


  changeValue(event: HTMLElement, value) {
    console.log('changedValueIS', value);
    if (value != 0) {
      this.getClass(value);
      console.log('singleClass', this.classD);
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        lengthMenu: [10, 25, 30],
        processing: true
      };
    }
  }

}
