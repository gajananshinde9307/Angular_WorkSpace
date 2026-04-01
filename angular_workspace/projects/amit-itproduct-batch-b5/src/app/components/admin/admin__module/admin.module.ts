import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from '../../admin-dashboard/admin-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCourseComponent } from '../../admin-dashboard/child_pages/Courses/create-course/create-course.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainersComponent } from '../../admin-dashboard/child_pages/trainers/trainers.component';
import { EnrollmentTableComponent } from '../../admin-dashboard/child_pages/enrollment-table/enrollment-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CoursesComponent } from '../components/courses/courses.component';




@NgModule({
  declarations: [
    TrainersComponent,
    AdminDashboardComponent,
    CreateCourseComponent,
    EnrollmentTableComponent
    // CoursesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ]
})
export class AdminModule { }
