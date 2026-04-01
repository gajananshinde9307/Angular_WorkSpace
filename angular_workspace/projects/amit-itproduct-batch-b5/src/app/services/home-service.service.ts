import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../data_types/user';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  registration(data: user): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8080/public/signup', data, { responseType: 'Text' as 'json' });

  }
  loginUser(data: user): Observable<any> {
    console.log(data);
    return this.http.post<any>('http://localhost:8080/auth/login', data);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    console.log(token);
    return localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  login(token: string) {
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
