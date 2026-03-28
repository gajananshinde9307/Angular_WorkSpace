import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { course_data } from '../../../data_types/course_Data';
import { trainer } from '../../../data_types/trainer';
import { enroll } from '../../../data_types/enrollments';

@Injectable({
  providedIn: 'root'
})
export class AdmindashboardService {

  constructor(private http: HttpClient) { }

  createCourse(data: course_data): Observable<course_data> {

    const token = localStorage.getItem('token');
    console.log(token);

    return this.http.post<course_data>('http://localhost:8080/admin/course', data, {
      responseType: 'text' as 'json'
    });
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getTrainer(): Observable<trainer> {
    return this.http.get<trainer>('http://localhost:8080/trainers');
  }
  getEnrollments(): Observable<enroll> {
    return this.http.get<enroll>('http://localhost:8080/admin/enrollments',
      {
        headers: new HttpHeaders({
          Authorization: "Bearer " + localStorage.getItem("token")
        })
      });
  }
}
