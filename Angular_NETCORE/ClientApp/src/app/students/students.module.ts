import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentRegistrationComponent } from '../student-registration/student-registration.component';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewOldStudentsComponent } from '../view-old-students/view-old-students.component';



@NgModule({
  declarations: [StudentsComponent,StudentDetailsComponent, StudentRegistrationComponent, StudentEditComponent, ViewOldStudentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      
          { path: 'students/student-details', component: StudentDetailsComponent },
          { path: 'students/student-registration', component: StudentRegistrationComponent },
      { path: 'students/student-edit', component: StudentEditComponent },
      { path: 'students/view-old-students', component: ViewOldStudentsComponent }
      ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [],
  bootstrap: [StudentsComponent]
})
export class StudentsModule {}
