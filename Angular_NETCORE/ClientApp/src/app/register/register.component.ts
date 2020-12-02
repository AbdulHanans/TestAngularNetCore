import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsDataModel, UserDetailsService } from '../../Services/userDetails.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    UserName: new FormControl(),
    FatherName: new FormControl(),
    /*password: new FormControl(),
    confirmPassword: new FormControl(),*/
    UserPassword: new FormControl(),
    UserRole: new FormControl(),
    FirstName: new FormControl(),
    IsEnable: new FormControl(),

  });

  userData: UserDetailsDataModel = new UserDetailsDataModel();

  constructor(public fb: FormBuilder, private router: Router, public crudService: UserDetailsService) { }

  onSubmit() {

    /*console.log('USERNAME', this.username.value);
    console.log('PASSWORD', this.password.value);*/

    console.log('registerFormData', this.registerForm.value);
    //this.userData.UserId = this.registerForm.value.UserID;
    this.userData.UserName = this.registerForm.value.UserName;
    this.userData.FatherName = this.registerForm.value.FatherName;
    this.userData.UserPassword = this.registerForm.value.UserPassword;
    this.userData.UserRole = this.registerForm.value.UserRole;
    this.userData.FirstName = this.registerForm.value.FirstName;
    this.userData.IsEnable = true;
    /*
UserID: number;
      UserName: string;
      FatherName: string;
      UserPassword: string;
      UserRole: string;
      FirstName: string;
      IsEnable: string;
*/
    this.crudService.createUser(this.userData).subscribe(res => {
      if (res !== undefined || res !== null) {
        console.log('User is Created Successfully!');
        this.router.navigate(['/login']);
      } else {
        console.log('Unable to Create a New User!');
      }

      });
    
  }

  get username(): any {
    return this.registerForm.get('UserName');
  }

  get password(): any {
    return this.registerForm.get('UserPassword');
  }

 /* get confirmPassword(): any {
    return this.registerForm.get('confirmPassword');
  }*/
}
