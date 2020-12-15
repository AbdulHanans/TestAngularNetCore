import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  studentsD = [];
  showButtons = true;
  showTh = false;
  constructor(private serviceClasses: ClassesService) { }

  ngOnInit() {
  }


  searchStudent(searchBy: any, cnic: boolean, mobile: boolean, admission: boolean) {
    
    if (cnic) {
      console.log('cnic:', searchBy);
      this.getStudentByCNIC(searchBy);
      console.log(this.studentsD);
     // console.log(this.studentsD[0].studentId);
    } else if (mobile) {
      console.log('mobile:', searchBy);
      this.getStudentByMobileNo(searchBy);
     
      
      console.log(this.studentsD);
    } else if (admission) {
      console.log('admission:', searchBy);
      this.getStudentByAdmissionNo(searchBy);
     
      
      console.log(this.studentsD);
    }
    
    if (this.studentsD.length <= 0) {
      this.studentsD.push({ 'studentId': 'No Record found' });
      this.showButtons = false;
      this.showTh = false;
    }
  }

  getStudentByAdmissionNo(searchBy) {
    
    this.serviceClasses.getStudents().subscribe((stData) => {

      stData.forEach((data) => {
        // console.log('d', data);
        if (data.admissionNo == searchBy) {
          this.studentsD = [];
          this.studentsD.push(data);
          this.showTh = true;
          this.showButtons = true;
        } else {
          if (this.studentsD.length <= 0) {
            this.studentsD = [];
          }
        }
      });
    });
  }

  getStudentByMobileNo(searchBy) {
    
    this.serviceClasses.getStudents().subscribe((stData) => {

      stData.forEach((data) => {
        // console.log('d', data);
        if (data.mobileNumber == searchBy) {
          this.studentsD = [];
          this.studentsD.push(data);
          this.showTh = true;
          this.showButtons = true;
        } else {
          if (this.studentsD.length <= 0) {
            this.studentsD = [];
          }
        }
      });
    });
  }


  getStudentByCNIC(searchBy) {
    
    this.serviceClasses.getStudents().subscribe((stData) => {

      stData.forEach((data) => {
        // console.log('d', data);
        if (data.fatherCnic == searchBy) {
          this.studentsD = [];
          this.studentsD.push(data);
          this.showTh = true;
          this.showButtons = true;
        } else {
          if (this.studentsD.length <= 0) {
            this.studentsD = [];
          }
        }
      });
    });
  }
}
