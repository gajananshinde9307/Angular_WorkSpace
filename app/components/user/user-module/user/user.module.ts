import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashBoardComponent } from '../../user-dash-board/user-dash-board.component';


@NgModule({
  declarations: [
    UserDashBoardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
