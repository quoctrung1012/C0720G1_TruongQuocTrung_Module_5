import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentEditComponent} from './student-edit/student-edit.component';


const routes: Routes = [
  {path: 'list-student', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'list-student/detail-student/:id', component: StudentDetailComponent},
  {path: 'list-student/edit-student/:id', component: StudentEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
