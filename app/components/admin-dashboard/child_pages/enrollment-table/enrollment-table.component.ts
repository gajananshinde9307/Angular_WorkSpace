import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from '../../dashboard_services/admindashboard.service';

@Component({
  selector: 'app-enrollment-table',
  templateUrl: './enrollment-table.component.html',
  styleUrls: ['./enrollment-table.component.css']
})
export class EnrollmentTableComponent implements OnInit {

  enrollments: any = [];

  constructor(private adminservice: AdmindashboardService) {

  }
  ngOnInit() {

    this.adminservice.getEnrollments().subscribe(res => {
      this.enrollments = res;
      console.log(res);
    })

  }

}
