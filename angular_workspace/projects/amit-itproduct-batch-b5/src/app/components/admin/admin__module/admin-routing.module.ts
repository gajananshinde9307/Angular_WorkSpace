import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AdminDashboardComponent } from '../../admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from '../../courses/courses.component';
import { TrainersComponent } from '../../admin-dashboard/child_pages/trainers/trainers.component';
import { CreateCourseComponent } from '../../admin-dashboard/child_pages/Courses/create-course/create-course.component';
import { authGuard } from '../../Auth_guard/auth.guard';
import { EnrollmentTableComponent } from '../../admin-dashboard/child_pages/enrollment-table/enrollment-table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CoursesComponent },
      { path: 'trainers', component: TrainersComponent },
      { path: 'enrollment', component: EnrollmentTableComponent, canActivate: [authGuard] },
      { path: 'createCourseFrm', component: CreateCourseComponent, canActivate: [authGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }