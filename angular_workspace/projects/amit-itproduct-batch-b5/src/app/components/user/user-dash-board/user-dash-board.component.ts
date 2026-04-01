import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  courseData: any[] = [];
  constructor(private router:Router,private courseS:CoursesService) { }

  ngOnInit() {
   this.courseS.getCourses().subscribe(res=>{
    this.courseData = res;
   })
  }

  goToBatch(){

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
