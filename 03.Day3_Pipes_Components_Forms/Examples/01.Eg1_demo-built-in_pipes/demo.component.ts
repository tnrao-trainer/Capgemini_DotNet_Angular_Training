import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public  sid:number  = 545645;
	public  sname:string  =  "naraSimHa rao";
	public  course:string  =  "angUlaR";	 
	public  email:string  =  "tNrAo.TraIneR@Gmail.com";	 	 
	public  joinDate:Date =  new Date(); 	 
	public  fee:number =  12500;
}
