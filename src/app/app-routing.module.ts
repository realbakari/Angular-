import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';

const route: Routes = [

  { 
    path: "account", 
    redirectTo: "/login", 
    pathMatch: "full" },

  {
    path: 'login', 
    component: LoginComponent
  }, 
  {
    path: 'account', 
    component: AccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
