import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course_data } from '../data_types/course_Data';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  // createCourse(data: course_data): Observable<course_data> {
  //   return this.http.post<course_data>('http://localhost:8080/admin/course', data);
  // }
  getCourses(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/courses');
  }
  editCourseById(data:course_data):Observable<number>{
 return this.http.put<number>(`http://localhost:8080/admin/course/${data}`,{responseType: 'text' as 'json'})
  }
  deleteCourses(id:number):Observable<number>{
    return this.http.delete<number>(`http://localhost:8080/admin/course/${id}`,{responseType: 'text' as 'json'});
  }

}
