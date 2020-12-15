import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  obj: Object = new Object();
  classesD = [];

  constructor(private http: HttpClient, private serviceClasses: ClassesService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getClasses();
    console.log(this.classesD);
  }

  getClasses() {
    this.classesD = [];
    this.serviceClasses.getClasses().subscribe((data) => {
      
      //this.classesD = data;
      this.obj = data;
      this.obj.forEach((data) => {
        this.classesD.push(data);
        console.log(data);
      });
    });
  }

}
