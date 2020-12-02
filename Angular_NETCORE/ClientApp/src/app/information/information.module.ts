import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassWiseDefaultersComponent } from '../class-wise-defaulters/class-wise-defaulters.component';
import { MiscFeeDefaultersComponent } from '../misc-fee-defaulters/misc-fee-defaulters.component';
import { StudentsComponent } from '../students/students.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ClassWiseDefaultersComponent, MiscFeeDefaultersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([

      { path: 'students', component: StudentsComponent },
      { path: 'information/class-wise-defaulters', component: ClassWiseDefaultersComponent },
      { path: 'information/misc-fee-defaulters', component: MiscFeeDefaultersComponent },
    ])
  ]
})
export class InformationModule { }
