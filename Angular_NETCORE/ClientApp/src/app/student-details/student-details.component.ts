import { Component, OnInit } from '@angular/core';
import { ClassesService } from '../../Services/classes.service';
import { DataService } from '../../Services/DataService';
import { UserDetailsDataModel } from '../../Services/userDetails.service';
import { StudentDetailsModel } from '../students/students.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentD: any = [];
  stds: StudentDetailsModel = new StudentDetailsModel();
  obj: any = new Object();

  constructor(private dataService: DataService, private serviceClasses: ClassesService) {
    

  }

  ngOnInit() {
    this.studentD = this.dataService.retrievePassedObject();
    this.getStudents(this.studentD);


    this.stds.StudentId = this.studentD.studentId;
    this.stds.AdmissionNo = this.studentD.admissionNo;
    this.stds.StudentName = this.studentD.studentName;
    this.stds.FatherName = this.studentD.fatherName;
    this.stds.FatherCnic = this.studentD.fatherCnic;
    this.stds.DateOfBirth = this.studentD.dateOfBirth;
    this.stds.MobileNumber = this.studentD.mobileNumber;
    this.stds.LandLineNumber = this.studentD.landLineNumber;
    this.stds.ClassAdmited = this.studentD.classAdmited;
    this.stds.CurrentClass = this.studentD.currentClass;
    this.stds.MonthlyFee = this.studentD.monthlyFee;
    this.stds.Address = this.studentD.address;
    this.stds.MiscellaneousFee = this.studentD.miscellaneousFee;
    this.stds.ClassLeftSchool = this.studentD.classLeftSchool;
    this.stds.Slcissued = this.studentD.slcissued;
    this.stds.DateOfSlc = this.studentD.dateOfSlc;
    this.stds.UpdatedDate = this.studentD.updatedDate;
    this.stds.DeletedBy = this.studentD.deletedBy;
    this.stds.MonthlyFeeUpdated = this.studentD.monthlyFeeUpdated;
    this.stds.SessionLeftSchool = this.studentD.sessionLeftSchool;
    this.stds.LeftBy = this.studentD.leftBy;
    this.stds.UpdatedBy = this.studentD.updatedBy;
    this.stds.AdmissionFee = this.studentD.admissionFee;

    console.log('d',this.stds);
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

}
