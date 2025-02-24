import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public uid:string = "";
  public pwd:string = "";
  public result:string = "";
  public count:number = 0;
  public isDisabled:boolean = false;

  public loginButtonClick():void
  {
    // logic to check the credentails 
    if(this.uid == "admin"  && this.pwd == "admin123")
    {
      this.result = "Welcome to Admin";
    }
    else
    {
      this.count++;

      if(this.count == 3)
      {
        this.isDisabled = true;
      }
      
      this.result ="Invalid User id or password";
    }
  }

}
