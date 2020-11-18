import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { logging } from "protractor";
import { log } from "util";
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  appUrl: string = "";
  httpOptionsPut = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(private httpObj: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.appUrl = baseUrl;
  }

  getUsersDetails(): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/Tbl_User");
  }

  createUser(userDetails: UserDetailsDataModel): Observable<any> {
    console.log('UserDetailsDAta', userDetails.UserName);
    return this.httpObj.post(this.appUrl + "api/Tbl_User", userDetails, this.httpOptions);
  }

  updateUser(userDetails: UserDetailsDataModel): Observable<any> {
    console.log('UserDetailsDAta', JSON.stringify(userDetails));

    const body = {
      "UserId": parseInt(userDetails.UserId),
      "userName": userDetails.UserName,
      "FatherName": userDetails.FatherName,
      "UserPassword": userDetails.UserPassword,
      "UserRole": userDetails.UserRole,
      "FirstName": userDetails.FirstName,
      "IsEnable": userDetails.IsEnable
    };

    /*
    return this.httpObj.put<UserDetailsDataModel>(this.baseUrl + "api/Put/UpdateUser", body, {headers, params});*/

    return this.httpObj.put(this.appUrl + "api/Tbl_User/" + 1, body, this.httpOptionsPut);

   // return this.httpObj.put<UserDetailsDataModel>(this.appUrl + "api/Put/UpdateUser", JSON.stringify(userDetails)).map((response: Response) => response.json()).catch(this.errorHandler);  
  }

  deleteUser(userId: string) {
    console.log('del', this.appUrl + "api/Tbl_User/" + parseInt(userId));
    return this.httpObj.delete(this.appUrl + "api/Tbl_User/" + parseInt(userId)); 
  }
  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}

export class UserDetailsDataModel {
  UserId: string;
  UserName: string;
  FatherName: string;
  UserPassword: string;
  UserRole: string;
  FirstName: string;
  IsEnable: boolean;
}
