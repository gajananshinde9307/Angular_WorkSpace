import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../../data_types/user';
import { HomeServiceService } from '../../services/home-service.service';


//Hello

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  switchForm: boolean = false;
  signUpForm!: FormGroup;
  loginForm!: FormGroup;
  messagebox: boolean = false;
  successMessage = '';
  errorMessage = '';
  constructor(private router: Router, private http: HttpClient, private homeService: HomeServiceService) {

  }
  ngOnInit(): void {



    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      mobileNo: new FormControl('', [
        Validators.pattern('^[6-9][0-9]{9}$'),
        Validators.required
      ]),
      password: new FormControl('', Validators.required)
    });

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  signUp(data: user) {
    this.homeService.registration(data).subscribe({

      next: res => {
        console.log(res);
        this.successMessage = res;
        this.errorMessage = '';
        this.signUpForm.reset();
      },
      error: err =>
        console.error(err)
      // this.errorMessage = err;
    })
    setTimeout(() => {
      this.messagebox = true

    }, 3000)

  }
  removeBox() {
    this.messagebox = false;
  }

  login(data: user) {
    this.homeService.loginUser(data).subscribe((res) => {
      console.log(res);
      if (!this.loginForm.invalid) {
        localStorage.setItem('token', res.token);
        // this.router.navigate(['admin']);
      if (res.roles == 'ROLE_ROLE_ADMIN') {
           this.router.navigate(['admin']);
         }
         else if (res.roles == 'ROLE_ROLE_USER') {
           this.router.navigate(['user']);
         }
         else {
           this.errorMessage = 'Not Found please try again'
         } 

      }
    })

    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['admin']);
    }

  }

  switch_form() {

    this.switchForm = !this.switchForm

  }
}
