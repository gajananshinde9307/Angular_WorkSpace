import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashBoardComponent } from '../../user-dash-board/user-dash-board.component';

const routes: Routes = [
   {
      path: '',
      component: UserDashBoardComponent,
      children: [
        { path: '', redirectTo: 'user', pathMatch: 'full' },
       
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
