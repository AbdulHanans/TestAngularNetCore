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

  sessionsD = [];
  sessionObjM = new Object();
  sessionObjC = new Object();

  obj: any = new Object();
  objC: Object = new Object();


  constructor(private http: HttpClient, private serviceFee: FeeService, private serviceClasses: ClassesService, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.getClasses();
    this.getSessions();
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


  getClass(cId: number, sessionId: number) {
    console.log('cl', cId + " \ " + sessionId);

    this.serviceFee.getFees().subscribe((data) => {

      this.objC = [{ data }] as Object;
      this.objC.forEach((data) => {

        this.obj = [{ data }] as Object;
        this.obj.forEach((data) => {
          //if (data.classId === cId && data.sessionId === sessionId) {
          this.sessionObjM.forEach((ds) => {
            console.log('fe', ds);
          });
            
          //}
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

  classID = 0;

  changeValue(event: HTMLElement, value) {
    console.log('changedValueIS', value);
    if (value != 0) {
      this.classID = value;
      console.log('singleClass', this.classD);
    }
  }

  changeValueSession(event: HTMLElement, value) {
    if (value != 0) {
      //this.getSessions();
      this.getClass(this.classID, value);
      console.log('changedSessionValueIS', value);
    }
  }

  getSessions() {
    this.serviceClasses.getSessions().subscribe((data) => {
      //this.classesD = data;
      this.sessionObjM = data;
      this.sessionObjM.forEach((data) => {
        if (data.isEnable = true) {
          this.sessionsD.push(data);
        }
      });
    });
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
