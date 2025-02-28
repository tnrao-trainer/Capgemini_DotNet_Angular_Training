import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpsComponent } from './emps/emps.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
 
 
const appRoutes: Routes = [ 
  {path : "", component : HomeComponent},
  {path : "Aboutus", component : AboutusComponent},
  {path : "Depts", component : DeptsComponent, canActivate : [AuthGuardService]}  ,  
  {path : "Emps", component : EmpsComponent, canActivate : [AuthGuardService]}  ,
  {path : "Details/:id", component : DetailsComponent},
  {path : "Login", component : LoginComponent},
  {path : "**", component : NotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
