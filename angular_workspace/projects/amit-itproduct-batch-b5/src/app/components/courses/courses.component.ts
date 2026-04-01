import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';
import { clippingParents } from '@popperjs/core';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseData: any[] = [];

  constructor(private courses: CoursesService, private router: Router) {

  }
  ngOnInit() {

    this.courses.getCourses().subscribe((res: any) => {

      console.log(res);
      this.courseData = res;

    })
  }
  createCourse() {

    this.router.navigate(['admin/createCourseFrm']);
  }
  remove(id:number){
    // console.log(id);
    // this.courses.deleteCourses(id).subscribe(res =>{
    //   console.log(res);
    //   alert(res);
    // })

    this.courses.deleteCourses(id).subscribe(() => {
    alert("Course Succssfully Deleted");
    this.courseData = this.courseData.filter(c => c.courseid !== id);

  });
  }
  editCourse(id:number){
    
  }

}
