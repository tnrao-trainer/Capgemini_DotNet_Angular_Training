import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  // 1. Scalar data
  public uname:string  =  "Scott";
  public age:number  =  25;
  public isValidUser:boolean  = true;

  // 2. Arrays
  public skillsArray:string[] = ["HTML5","CSS3","JavaScript","Angular","React"];


  // 3. Object
  public empObj:any = 	{empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10};


  // 4. Array of Objects 
  public  empsArray:any[]  =  [
		{empno :  15454,  ename  : "Scott",  job :  "Manager", deptno : 10},
		{empno :  15455,  ename  : "Smith",  job :  "Lead", deptno : 20},
		{empno :  15456,  ename  : "Sandy",  job :  "Manager", deptno : 30},
		{empno :  15457,  ename  : "Sam",  job :  "Manager", deptno : 10}
	];	
}
