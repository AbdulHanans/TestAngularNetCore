import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClassComponent } from '../add-class/add-class.component';
import { RouterModule } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddClassComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'classes', component: ClassesComponent },
      { path: 'classes/add-class', component: AddClassComponent },
      ])
  ],
  bootstrap: [ClassesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [],
})
export class ClassesModule { }
