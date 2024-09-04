import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component'; 
import { HomeComponent } from './Home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
export const routes: Routes = [
     { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }