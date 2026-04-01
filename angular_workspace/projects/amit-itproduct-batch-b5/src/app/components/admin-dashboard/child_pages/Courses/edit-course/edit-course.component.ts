import { Component, OnInit } from '@angular/core';
import { course_data } from 'projects/amit-itproduct-batch-b5/src/app/data_types/course_Data';
import { CoursesService } from 'projects/amit-itproduct-batch-b5/src/app/services/courses.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{

  isEditMode:boolean = true;
  constructor(private courses:CoursesService){

  }
  ngOnInit() {
  
  }

  updateCourse(data:course_data) {
   this.courses.editCourseById(data).subscribe(res =>{
      console.log(res);
    })
  }
  closePopup(){
    this.isEditMode = false;
  }
}
