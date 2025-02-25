import { Component } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {

  public fname: string = "";
  public lname: string = "";
  public city: string = "";
  public email: string = "";
  public pincode: string = "";

  public submitClick():void
  {
      // make an ajax call to send data to server
      alert("Customer Details are registered.");
  }

}
