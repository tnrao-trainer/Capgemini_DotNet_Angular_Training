import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router:Router) { }

  public  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    // alert("Message from AuthGuard Service");

    // alert(state.url);

    if(sessionStorage.getItem("AUTH_TOKEN") == null)
    {
      //this.router.navigate(["/Login"]);
       this.router.navigate(["/Login"], { queryParams : {  returnUrl : state.url }});
      return false;
    }
    else
    {
      return true;
    }   
  }
}
