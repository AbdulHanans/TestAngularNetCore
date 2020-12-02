import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassesService } from '../../Services/classes.service';
import { StudentDetailsModel } from '../students/students.component';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  studentData: StudentDetailsModel = new StudentDetailsModel();

  obj: any = new Object();
  classesData = [];

  StudentRegistrationForm: FormGroup = new FormGroup({
    StudentId: new FormControl(),
    StudentName: new FormControl(),
    FatherName: new FormControl(),
    AdmissionNo: new FormControl(),
    DateOfBirth: new FormControl(),
    LandLineNumber: new FormControl(),
    CurrentClass: new FormControl(),
    Address: new FormControl(),
    SLCIssued: new FormControl(),
    AdmissionFee: new FormControl(),
    FatherCNIC: new FormControl(),
    MobileNumber: new FormControl(),
    ClassAdmited: new FormControl(),
    MonthlyFee: new FormControl(),
    MiscellaneousFund: new FormControl(),
    DateOfSlc: new FormControl()
  });
    


  constructor(private classesService: ClassesService, private router: Router) {
    this.getClasses();
    /*// this.StudentRegistrationForm.controls['StudentId'].setValue("");
    this.StudentRegistrationForm.controls['AdmissionNo'].setValue("");
    this.StudentRegistrationForm.controls['StudentName'].setValue("");
    this.StudentRegistrationForm.controls['FatherName'].setValue("");
    this.StudentRegistrationForm.controls['FatherCNIC'].setValue("");
    this.StudentRegistrationForm.controls['DateOfBirth'].setValue("");
    this.StudentRegistrationForm.controls['MobileNumber'].setValue("");
    this.StudentRegistrationForm.controls['LandLineNumber'].setValue("");
    this.StudentRegistrationForm.controls['ClassAdmited'].setValue("");
    this.StudentRegistrationForm.controls['CurrentClass'].setValue("");
    this.StudentRegistrationForm.controls['MonthlyFee'].setValue("");
    this.StudentRegistrationForm.controls['Address'].setValue("");
    this.StudentRegistrationForm.controls['MiscellaneousFund'].setValue("");
    //this.StudentRegistrationForm.controls['ClassLeftSchool'].setValue("");
    this.StudentRegistrationForm.controls['SLCIssued'].setValue("");
    this.StudentRegistrationForm.controls['DateOfSlc'].setValue("");
    //this.StudentRegistrationForm.controls['UpdatedDate'].setValue("");
    //this.StudentRegistrationForm.controls['DeletedBy'].setValue("");
    //this.StudentRegistrationForm.controls['MonthlyFeeUpdated'].setValue("");
    //this.StudentRegistrationForm.controls['SessionLeftSchool'].setValue("");
    //this.StudentRegistrationForm.controls['LeftBy'].setValue("");
    //this.StudentRegistrationForm.controls['UpdatedBy'].setValue("");
    this.StudentRegistrationForm.controls['AdmissionFee'].setValue("");*/
  }

  ngOnInit() {
  }

  register() {
    this.studentData.StudentId = null;
    this.studentData.StudentName = this.StudentRegistrationForm.controls['StudentName'].value;
    this.studentData.FatherName = this.StudentRegistrationForm.controls['FatherName'].value;
    this.studentData.FatherCnic = parseInt(this.StudentRegistrationForm.controls['FatherCNIC'].value);
    this.studentData.MobileNumber = this.StudentRegistrationForm.controls['MobileNumber'].value;
    this.studentData.LandLineNumber = this.StudentRegistrationForm.controls['LandLineNumber'].value;
    this.studentData.AdmissionNo = this.StudentRegistrationForm.controls['AdmissionNo'].value;
    this.studentData.AdmissionFee = parseInt(this.StudentRegistrationForm.controls['AdmissionFee'].value);
    this.studentData.DateOfBirth = this.StudentRegistrationForm.controls['DateOfBirth'].value;
    this.studentData.ClassAdmited = parseInt(this.StudentRegistrationForm.controls['ClassAdmited'].value);
    this.studentData.CurrentClass = parseInt(this.StudentRegistrationForm.controls['CurrentClass'].value);
    this.studentData.Address = this.StudentRegistrationForm.controls['Address'].value;
    this.studentData.Slcissued = this.StudentRegistrationForm.controls['SLCIssued'].value;
    this.studentData.DateOfSlc = this.StudentRegistrationForm.controls['DateOfSlc'].value;
    this.studentData.MiscellaneousFee = parseInt(this.StudentRegistrationForm.controls['MiscellaneousFund'].value);
    this.studentData.MonthlyFee = parseInt(this.StudentRegistrationForm.controls['MonthlyFee'].value);
    this.studentData.UpdatedBy = 12;
    this.studentData.LeftBy = 12;
    this.studentData.SessionLeftSchool = 2020;
    this.studentData.MonthlyFeeUpdated = true;
    this.studentData.DeletedBy = null;
    this.studentData.UpdatedDate = this.StudentRegistrationForm.controls['DateOfSlc'].value;
    this.studentData.ClassLeftSchool = 26;


    console.log(this.studentData);
    this.classesService.registerStudent(this.studentData).subscribe((res) => {
      if (res !== undefined || res !== null) {
        console.log('Student Registered Successfully!');
        //this.router.navigate(['/login']);
      } else {
        console.log('Unable to Create a New User!');
      }
    });
  }

  getClasses() {
    this.classesService.getClasses().subscribe((data) => {
      //this.classesD = data;
      this.obj = data;
      this.obj.forEach((data) => {
        this.classesData.push(data);
      });
    });
  }

}
