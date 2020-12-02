import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';

@Component({
  selector: 'app-view-old-students',
  templateUrl: './view-old-students.component.html',
  styleUrls: ['./view-old-students.component.css']
})
export class ViewOldStudentsComponent implements OnInit {

  classesD = [];

  classD = [];

  obj: any = new Object();
  objC: Object = new Object();


  constructor(private http: HttpClient, private serviceClasses: ClassesService, private router: Router, private dataService: DataService) { }

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

    this.serviceClasses.getClass(cId).subscribe((data) => {

      this.objC = [{ data }] as Object;
      this.objC.forEach((data) => {
        console.log('da', data);
        this.serviceClasses.getStudents().subscribe((stData) => {

          stData.forEach((data) => {
            console.log(data.deletedBy);
            // console.log('d', data);
            if (data.currentClass == cId) {
              
              if (data.leftBy !== null) {
                
                this.classD.push(data);
              }

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
