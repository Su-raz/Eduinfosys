import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentsEditComponent } from './parents-edit/parents-edit.component';

import { SingleAddComponent } from './single-add/single-add.component';
import { MassAddComponent } from './mass-add/mass-add.component';
import { AccountantAddComponent } from './accountant-add/accountant-add.component';
import { ClassAddComponent } from './class-add/class-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent,
    TeacherAddComponent,
    TeacherListComponent,
    TeacherEditComponent,
    ParentsListComponent,
    ParentsEditComponent,
    
    SingleAddComponent,
    MassAddComponent,
    AccountantAddComponent,
    ClassAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
