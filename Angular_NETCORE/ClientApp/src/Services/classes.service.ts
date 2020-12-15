import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { StudentDetailsModel } from "../app/students/students.component";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  appUrl: string = "";
  httpOptionsPut = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpObj: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.appUrl = baseUrl;
  }

  getClasses(): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/TblClasses");
  }

  getClass(classId: number): Observable<any> {
    return this.httpObj.get<any[]>(this.baseUrl + "api/TblClasses/"+ classId);
  }

  getStudents(): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/TblStudents");
  }

  getStudent(studentId: number): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/TblStudents/" + studentId);
  }

  getSessions(): Observable<any> {
    return this.httpObj.get(this.baseUrl + "api/TblSessions");
  }

  addNewClass(classDetails: any): Observable<any> {
    console.log('classsd', classDetails);
    return this.httpObj.post(this.baseUrl + "api/TblClasses", classDetails, this.httpOptions).pipe();
  }

  registerStudent(studentDetails: any): Observable<any> {
    return this.httpObj.post(this.baseUrl + "api/TblStudents", studentDetails, this.httpOptions).pipe();
  }

  updateStudent(studentDetails: StudentDetailsModel): Observable<any> {
    console.log('UserDetailsDAta', JSON.stringify(studentDetails));

    const body = {
      studentDetails
    };

    /*
    return this.httpObj.put<UserDetailsDataModel>(this.baseUrl + "api/Put/UpdateUser", body, {headers, params});*/

    return this.httpObj.put(this.appUrl + "api/TblStudents/" + studentDetails.StudentId, body, this.httpOptionsPut);

    // return this.httpObj.put<UserDetailsDataModel>(this.appUrl + "api/Put/UpdateUser", JSON.stringify(userDetails)).map((response: Response) => response.json()).catch(this.errorHandler);  
  }

}

export class ClassesDataModel {
  classId: number;
  className: string;
  priority: number;
}

export class InsertClassesDataModel {
  className: string;
  priority: number;
}

