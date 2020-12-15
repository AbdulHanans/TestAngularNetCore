import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

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

export class StudentDetailsModel {
  StudentId: number;
  AdmissionNo: string;
  StudentName: string;
  FatherName: string;
  FatherCnic: number;
  DateOfBirth: string;
  MobileNumber: string;
  LandLineNumber: string;
  ClassAdmited: number;
  CurrentClass: number;
  MonthlyFee: number;
  Address: string;
  MiscellaneousFee: number;
  ClassLeftSchool: number;
  Slcissued: string;
  DateOfSlc: string;
  UpdatedDate: string;
  DeletedBy: number;
  MonthlyFeeUpdated: boolean;
  SessionLeftSchool: number;
  LeftBy: number;
  UpdatedBy: number;
  AdmissionFee: number;
}

export class InsertStudentDetailsModel {
  StudentId: number;
  AdmissionNo: string;
  StudentName: string;
  FatherName: string;
  FatherCnic: string;
  DateOfBirth: Date;
  MobileNumber: string;
  LandLineNumber: string;
  ClassAdmited: number;
  CurrentClass: number;
  MonthlyFee: number;
  Address: string;
  MiscellaneousFee: number;
  ClassLeftSchool: number;
  Slcissued: string;
  DateOfSlc: Date;
  UpdatedDate: Date;
  DeletedBy: number;
  MonthlyFeeUpdated: boolean;
  SessionLeftSchool: number;
  LeftBy: number;
  UpdatedBy: number;
  AdmissionFee: number;
}
