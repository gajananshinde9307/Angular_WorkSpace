import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './components/Auth_guard/auth.guard';

const routes: Routes = [

  // {
  //   path: '', component: NavBarComponent
  // },

  { path: 'home', component: HomeComponent },

  { path: 'about_us', component: AboutUsComponent },

  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin__module/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user-module/user/user.module').then(m => m.UserModule),
    canActivate: [authGuard]
  },


  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }