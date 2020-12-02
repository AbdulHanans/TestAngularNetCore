import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { StudentDetailsModel } from "../app/students/students.component";

@Injectable({
  providedIn: 'root'
})
export class FeeService {


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

  getFees(): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/TblFees");
  }
}
