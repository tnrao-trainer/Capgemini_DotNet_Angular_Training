import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpsComponent } from './emps/emps.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
 
const appRoutes: Routes = [ 
  {path : "", component : HomeComponent},
  {path : "Aboutus", component : AboutusComponent},
  {path : "Depts", component : DeptsComponent},  
  {path : "Emps", component : EmpsComponent}  ,
  {path : "Details/:id", component : DetailsComponent},
  {path : "**", component : NotFoundComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
