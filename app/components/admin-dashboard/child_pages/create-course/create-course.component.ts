import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { course_data } from 'projects/amit-it/src/app/data_types/course_Data';
import { AdmindashboardService } from '../../dashboard_services/admindashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  courseForm!: FormGroup;
  constructor(private courses: AdmindashboardService, private router: Router) {

  }

  ngOnInit() {

    this.courseForm = new FormGroup({
      coursename: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      videoRecording: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }
  saveCourse(data: course_data) {
    this.courses.createCourse(data).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(["admin/courses"]);
  }

}
