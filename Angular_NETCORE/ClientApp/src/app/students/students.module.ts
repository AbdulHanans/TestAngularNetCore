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

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { PromoteStudentComponent } from '../promote-student/promote-student.component';
import { DataTablesModule } from 'angular-datatables';




@NgModule({
  declarations: [StudentsComponent,StudentDetailsComponent, StudentRegistrationComponent, StudentEditComponent, ViewOldStudentsComponent, SearchStudentComponent, PromoteStudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forChild([
      
          { path: 'students/student-details', component: StudentDetailsComponent },
          { path: 'students/student-registration', component: StudentRegistrationComponent },
      { path: 'students/student-edit', component: StudentEditComponent },
      { path: 'students/view-old-students', component: ViewOldStudentsComponent },
      { path: 'students/search-student', component: SearchStudentComponent },
      { path: 'students/promote-student', component: PromoteStudentComponent }
    ]),
    MatDatepickerModule,
    MatNativeDateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [],
  bootstrap: [StudentsComponent]
})
export class StudentsModule {}
