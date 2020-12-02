import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../Services/DataService';
import { UserDetailsDataModel, UserDetailsService } from '../../Services/userDetails.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

  constructor(private dataService: DataService, public crudService: UserDetailsService) {
    
  }

  userD: any = [];
  userData: UserDetailsDataModel = new UserDetailsDataModel();
  /*UserID: string;
  UserName: string;
  FatherName: string;
  UserPassword: string;
  UserRole: string;
  FirstName: string;
  IsEnable: string;*/

  updateForm: FormGroup = new FormGroup({
    UserID: new FormControl(),
    UserName: new FormControl(),
    FatherName: new FormControl(),
    UserPassword: new FormControl(),
    UserRole: new FormControl(),
    FirstName: new FormControl(),
    IsEnable: new FormControl(),
  });

  ngOnInit() {
    this.userD = this.dataService.retrievePassedObject();
    console.log('datais', this.userD);
    this.userData.UserId = this.userD['userId'];
    console.log('userid', this.userData.UserId);
  }

  onSubmit(event) {

    

    if (this.updateForm.controls['UserName'].value === null) {
      this.userData.UserName = this.userD['userName'];
      console.log('dt', this.userD['userName'] + " is");
    } else {
      this.userData.UserName = this.updateForm.controls['UserName'].value;
      console.log('dt', this.updateForm.controls['UserName'].value);
    }

    if (this.updateForm.controls['FatherName'].value === null) {
      this.userData.FatherName = this.userD['fatherName'];
      console.log('dt', this.userD['fatherName'] + " is");
    } else {
      this.userData.FatherName = this.updateForm.controls['FatherName'].value;
      console.log('dt', this.updateForm.controls['FatherName'].value);
    }

    if (this.updateForm.controls['UserPassword'].value === null) {
      this.userData.UserPassword = this.userD['userPassword'];
      console.log('dt', this.userD['userPassword'] + " is");
    } else {
      this.userData.UserPassword = this.updateForm.controls['UserPassword'].value;
      console.log('dt', this.updateForm.controls['UserPassword'].value);
    }

    if (this.updateForm.controls['UserRole'].value === null) {
      this.userData.UserRole = this.userD['userRole'];
      console.log('dt', this.userD['userRole'] + " is");
    } else {
      this.userData.UserRole = this.updateForm.controls['UserRole'].value;
      console.log('dt', this.updateForm.controls['UserRole'].value);
    }

    if (this.updateForm.controls['FirstName'].value === null) {
      this.userData.FirstName = this.userD['firstName'];
      console.log('dt', this.userD['firstName'] + " is");
    } else {
      this.userData.FirstName = this.updateForm.controls['FirstName'].value;
      console.log('dt', this.updateForm.controls['FirstName'].value);
    }

    if (this.updateForm.controls['IsEnable'].value === null) {
      this.userData.IsEnable = this.userD['isEnable'];
      console.log('dt', this.userD['isEnable'] + " is");
    } else {
      if (this.updateForm.controls['IsEnable'].value === 'true') {
        this.userData.IsEnable = true;  
      } else if (this.updateForm.controls['IsEnable'].value === 'false') {
        this.userData.IsEnable = false;
      }
      console.log('dt', this.updateForm.controls['IsEnable'].value);
    }

    console.log(this.userData);

    this.crudService.updateUser(this.userData).subscribe((response) => console.log("user updated", response), (error) => console.log("Error While Updating", error));
  }

  changeValue(event: HTMLElement, value) {
    if (event.getAttribute("formcontrolname") === "UserID") {
      console.log("dt", value);
      this.userData.UserId = value;
    }

    if (event.getAttribute("formcontrolname") === "UserName") {
      console.log("dt", value);
      this.userData.UserName = value;
    }

    if (event.getAttribute("formcontrolname") === "FatherName") {
      console.log("dt", value);
      this.userData.FatherName = value;
    }

    if (event.getAttribute("formcontrolname") === "UserPassword") {
      console.log("dt", value);
      this.userData.UserPassword = value;
    }

    if (event.getAttribute("formcontrolname") === "UserRole") {
      console.log("dt", value);
      this.userData.UserRole = value;
    }

    if (event.getAttribute("formcontrolname") === "FirstName") {
      console.log("dt", value);
      this.userData.FirstName = value;
    }

    if (event.getAttribute("formcontrolname") === "IsEnable") {
      console.log("dt", value);
      this.userData.IsEnable = value;
      console.log('enable_changed', typeof(this.userData.IsEnable));
    }
    
  }

}
