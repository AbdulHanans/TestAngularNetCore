import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/DataService';
import { UserDetailsDataModel, UserDetailsService } from '../../Services/userDetails.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {

  userD = [];
  
  obj: any = new Object();

  constructor(private http: HttpClient, private serviceUserDetails: UserDetailsService, private router: Router, private dataService: DataService) {
    
  }

  ngOnInit() {
    this.getUserDetails();
    console.log('datauser', this.userD);
    
  }

  updateUser(selectedUserData: any) {
    console.log('selected', selectedUserData);
    this.dataService.allPassedData = selectedUserData;
    //this.dataService.storePassedObject(selectedUserData);
  }

  deleteUser(userId: any) {
    this.serviceUserDetails.deleteUser(userId).subscribe((response) => console.log("user deleted", response), (error) => console.log("Error While Updating", error));
  }
  
  getUserDetails() {
    this.serviceUserDetails.getUsersDetails().subscribe((data) => {
      //this.userD = data;
      this.obj = data;
      this.obj.forEach((data) => {
        this.userD.push(data);
      });
    });
  }

}
