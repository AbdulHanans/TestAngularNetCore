import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserDetailsDataModel, UserDetailsService } from '../../Services/userDetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  userDetailsDM: UserDetailsDataModel = new UserDetailsDataModel();

  constructor(private http: HttpClient, private serviceUserDetails: UserDetailsService, private router: Router) {
    this.getUserDetails();
  }

  ngOnInit() {
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onSubmit() {
    const user: string = this.userDetailsDM[0].userName;
    const pass: string = this.userDetailsDM[0].userPassword;
    if (this.username.value == undefined || this.password.value == undefined) {
      alert("Please Fill all required Fields!");
    } else {
      if (user === this.username.value && pass === this.password.value) {
        /*this.http.post<any[]>(this.baseUrl + 'api/Get/UserDetails', this.userDetails).subscribe(result => {
          result = JSON.parse(result.toString());
          if (result != null && result.length > 0) {
           */
        this.router.navigate(['/home']);
        //alert("Successfully Logged in!");
      } else {
        alert("Please Enter a valid Username or Password!");
        //connection string Server=DESKTOP-3H036CO\SQLEXPRESS;Database=test_core;Trusted_Connection=True;
      }
    }
    console.log('USERNAME', user);
    console.log('PASSWORD', pass);

  }

  get username(): any {
    return this.loginForm.get('username');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  getUserDetails() {
    this.serviceUserDetails.getUsersDetails().subscribe(data => this.userDetailsDM = data);
  }

}

