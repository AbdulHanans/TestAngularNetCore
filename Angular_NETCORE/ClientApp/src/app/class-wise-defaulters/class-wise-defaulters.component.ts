import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';
import { FeeService } from '../../Services/fee.service';

@Component({
  selector: 'app-class-wise-defaulters',
  templateUrl: './class-wise-defaulters.component.html',
  styleUrls: ['./class-wise-defaulters.component.css']
})
export class ClassWiseDefaultersComponent implements OnInit {

  classesD = [];

  classD = [];

  obj: any = new Object();
  objC: Object = new Object();


  constructor(private http: HttpClient, private serviceFee: FeeService, private serviceClasses: ClassesService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getClasses();
    console.log("classes", this.classesD);
  }

  getClasses() {
    this.serviceClasses.getClasses().subscribe((data) => {
      //this.classesD = data;
      this.obj = data;
      this.obj.forEach((data) => {
        this.classesD.push(data);
      });
    });
  }


  getClass(cId: number) {

    this.serviceFee.getFees().subscribe((data) => {

      this.objC = [{ data }] as Object;
      this.objC.forEach((data) => {

        this.obj = [{ data }] as Object;
         this.obj.forEach((data) => {
          console.log('fe', data);
        });
        
        /*this.serviceClasses.getStudents().subscribe((stData) => {

          stData.forEach((data) => {
            // console.log('d', data);
            if (data.currentClass == cId) {
              console.log('da', data);
              this.classD.push(data);

            }
          });
        });*/

      });
    });
  }


  changeValue(event: HTMLElement, value) {
    console.log('changedValueIS', value);
    if (value != 0) {
      this.getClass(value);
      console.log('singleClass', this.classD);
    }
  }


  studentDetails(selectedStudent: any) {
    console.log('studentDetails', selectedStudent);
    this.router.navigate(['/students/student-details']);
    console.log('selected', selectedStudent);
    this.dataService.allPassedData = selectedStudent;
    //this.dataService.storePassedObject(selectedUserData);

  }

  editStudent(selectedStudent: any) {
    console.log('editStudent', selectedStudent);
    this.router.navigate(['/students/student-edit']);
    this.dataService.allPassedData = selectedStudent;
  }

}
