import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentsEditComponent } from './parents-edit/parents-edit.component';
import { SingleAddComponent } from './single-add/single-add.component';
import { MassAddComponent } from './mass-add/mass-add.component';
import { AccountantAddComponent } from './accountant-add/accountant-add.component';
import { ClassAddComponent } from './class-add/class-add.component';


const routes: Routes = [
	 {
	    path: "",
	    component: DashboardComponent
	  },

	 {
	    path: "login",
	    component: LoginComponent
	  },
	  {
	    path: "register",
	    component: RegisterComponent
	  },

	  {
	    path: "student/list",
	    component: StudentListComponent
	  },
	  {
	    path: "student/add",
	    component: StudentAddComponent
	  },
	  {
	    path: "student/edit/:id",
	    component: StudentEditComponent
	  },
	  
	  {
	    path: "teacher/list",
	    component: TeacherListComponent
	  },
	  {
	    path: "teacher/add",
	    component: TeacherAddComponent
	  },
	  {
	    path: "teacher/edit",
	    component: TeacherEditComponent
	  },

       {
       	path: "parents/list",
       	component: ParentsListComponent
       },
       {
       	path: "parents/edit",
       	component: ParentsEditComponent

       },
       {
       path:"single/add",
	  component:SingleAddComponent
	},
	{
	  path :"mass/add",
	  component:MassAddComponent
	},
     
     {
     	path: "accountant/add",
     	component: AccountantAddComponent
     },
     {
     	path: "class/add",
     	component: ClassAddComponent
     },
	];
	
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
