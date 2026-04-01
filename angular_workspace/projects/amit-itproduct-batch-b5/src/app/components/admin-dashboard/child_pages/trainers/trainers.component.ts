import { Component, OnInit } from '@angular/core';
import { AdmindashboardService } from '../../dashboard_services/admindashboard.service';
import { trainer } from 'projects/amit-itproduct-batch-b5/src/app/data_types/trainer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  trainers: any = [];
  constructor(private aadminService: AdmindashboardService) { }
  ngOnInit() {

    this.aadminService.getTrainer().subscribe(res => {
      console.log(res);
      this.trainers = res;
    })

  }

  createTrainer() {

  }

}
