import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { InsertClassesDataModel, ClassesService } from '../../Services/classes.service';



@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .catch((err: HttpErrorResponse) => {

        console.log('HttpBadResponseError: ', err);
      });
}
  addNewClassForm: FormGroup = new FormGroup({
    ClassName: new FormControl(),
    Priority: new FormControl(),
  });

  classData: InsertClassesDataModel = new InsertClassesDataModel();

  constructor(public fb: FormBuilder, private router: Router, public crudService: ClassesService) { }

  ngOnInit() {
  }

  onSubmit() {

    /*console.log('USERNAME', this.username.value);
    console.log('PASSWORD', this.password.value);*/

    console.log('classFormData', this.addNewClassForm.value);
    
    this.classData.className = this.addNewClassForm.value.ClassName;
    this.classData.priority = parseInt(this.addNewClassForm.value.Priority);
    /*
UserID: number;
      UserName: string;
      FatherName: string;
      UserPassword: string;
      UserRole: string;
      FirstName: string;
      IsEnable: string;
*/
    this.crudService.addNewClass(this.classData).subscribe(res => {
      if (res !== undefined || res !== null) {
        console.log('Class is Created Successfully!');/*
        this.router.navigate(['/classes']);*/
      } else {
        console.log('Unable to Add a New Class!');
      }

    });

  }

}
