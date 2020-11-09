import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminPanelComponent } from './components/Admin/admin-panel/admin-panel.component';
import { LoginComponent } from './components/common/login/login.component';
import { RegisterComponent } from './components/common/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'about', component : AboutComponent },
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'adminPanel', component : AdminPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
