import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService';
import { StudentDetailsModel } from '../students/students.component';
import { ClassesService } from '../../Services/classes.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentD: any = [];
  stds: StudentDetailsModel = new StudentDetailsModel();
  obj: any = new Object();

  updateStudentForm: FormGroup = new FormGroup({
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


  constructor(private dataService: DataService, private serviceClasses: ClassesService) {


  }

  ngOnInit() {
    this.studentD = this.dataService.retrievePassedObject();
    this.getStudents(this.studentD);


   // this.updateStudentForm.controls['StudentId'].setValue = this.studentD.studentId;
    this.updateStudentForm.controls['AdmissionNo'].setValue = this.studentD.admissionNo;
    this.updateStudentForm.controls['StudentName'].setValue = this.studentD.studentName;
    this.updateStudentForm.controls['FatherName'].setValue = this.studentD.fatherName;
    this.updateStudentForm.controls['FatherCNIC'].setValue = this.studentD.fatherCnic;
    this.updateStudentForm.controls['DateOfBirth'].setValue = this.studentD.dateOfBirth;
    this.updateStudentForm.controls['MobileNumber'].setValue = this.studentD.mobileNumber;
    this.updateStudentForm.controls['LandLineNumber'].setValue = this.studentD.landLineNumber;
    this.updateStudentForm.controls['ClassAdmited'].setValue = this.studentD.classAdmited;
    this.updateStudentForm.controls['CurrentClass'].setValue = this.studentD.currentClass;
    this.updateStudentForm.controls['MonthlyFee'].setValue = this.studentD.monthlyFee;
    this.updateStudentForm.controls['Address'].setValue = this.studentD.address;
    this.updateStudentForm.controls['MiscellaneousFund'].setValue = this.studentD.miscellaneousFee;
    //this.updateStudentForm.controls['ClassLeftSchool'].setValue = this.studentD.classLeftSchool;
    this.updateStudentForm.controls['SLCIssued'].setValue = this.studentD.slcissued;
    this.updateStudentForm.controls['DateOfSlc'].setValue = this.studentD.dateOfSlc;
    //this.updateStudentForm.controls['UpdatedDate'].setValue = this.studentD.updatedDate;
    //this.updateStudentForm.controls['DeletedBy'].setValue = this.studentD.deletedBy;
    //this.updateStudentForm.controls['MonthlyFeeUpdated'].setValue = this.studentD.monthlyFeeUpdated;
    //this.updateStudentForm.controls['SessionLeftSchool'].setValue = this.studentD.sessionLeftSchool;
    //this.updateStudentForm.controls['LeftBy'].setValue = this.studentD.leftBy;
    //this.updateStudentForm.controls['UpdatedBy'].setValue = this.studentD.updatedBy;
    this.updateStudentForm.controls['AdmissionFee'].setValue = this.studentD.admissionFee;

    console.log('d', this.stds);
  }


  getStudents(sId: number) {
    this.studentD = [];
    this.serviceClasses.getStudent(sId).subscribe((data) => {

      this.obj = [{ data }] as Object;
      this.obj.forEach((data) => {
        console.log('stdData', data);
        this.serviceClasses.getStudents().subscribe((stData) => {

          stData.forEach((data) => {
            // console.log('d', data);
            if (data.studentId == sId) {
              this.studentD.push(data);

            }
          });
        });

      });
    });
  }

  update(event: any) {

    /*if (this.updateStudentForm.controls['StudentName'].value === null) {
      this.stds.StudentName = this.studentD['studentName'];*/
   // console.log('dt', JSON.stringify(JSON.parse(this.studentD).studentName).toString() + " is");
    /*
    } else {
      this.stds.StudentName = this.updateStudentForm.controls['StudentName'].value;
      */
    console.log('dt', event.get('StudentName').value);
    /*
    }*/
  }

}
