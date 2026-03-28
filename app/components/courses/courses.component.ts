import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseData: any[] = [];

  constructor(private courses: CoursesService, private router: Router) {

  }
  ngOnInit(): void {

    this.courses.getCourses().subscribe((res: any) => {

      console.log(res);
      this.courseData = res;

    })
  }
  createCourse() {

    this.router.navigate(['admin/createCourseFrm']);
  }

}
