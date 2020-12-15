import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { StudentsComponent } from './students/students.component';
import { InformationComponent } from './information/information.component';
import { FeeComponent } from './fee/fee.component';
import { ReportsComponent } from './reports/reports.component';
import { StudentsModule } from './students/students.module';
import { InformationModule } from './information/information.module';
import { ClassesModule } from './classes/classes.module';
import { ClassesComponent } from './classes/classes.component';
import { AddClassComponent } from './add-class/add-class.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    NavComponent,
    
    InformationComponent,
    FeeComponent,
    ReportsComponent,
    ClassesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    DataTablesModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'update', component: UpdateComponent },
      { path: 'home_admin', component: HomeComponent },
      { path: 'home', component: StudentsComponent },

      { path: 'students', component: StudentsComponent, loadChildren: './students/students.module#StudentsModule' },
      /*{ path: 'information', component: InformationComponent },
      { path: 'fee', component: FeeComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'logout', component: LoginComponent },*/
      { path: 'classes', component: ClassesComponent, loadChildren: './classes/classes.module#ClassesModule' },
      /*{ path: 'add-class', component: AddClassComponent },*/


    ]),
    BrowserAnimationsModule,
    StudentsModule,
    InformationModule,
    ClassesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
