import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{
    uid:string  = "admin";
    pwd:string  = "admin123";
    result:string  = "";

    constructor(private router:Router, private activatedRoute:ActivatedRoute) { }
    
    loginButton_click():void
    { 

      let str = this.activatedRoute.snapshot.queryParams["returnUrl"];

      if(str == undefined || str == null)
      {
        str = "/";
      }


      if(this.uid == "admin"  && this.pwd == "admin123")
      {
        // Usually we will get the token from the server
        // JWT Tokens are popular auth token libraries
        const strToken = '1d38d128-0671-4121-8084-f6332a992a40';
        sessionStorage.setItem("AUTH_TOKEN", strToken);
        this.router.navigate([str]);
      }
      else
      {
        this.result  = "Invalid user id or password";
      }
    }     
     
}
