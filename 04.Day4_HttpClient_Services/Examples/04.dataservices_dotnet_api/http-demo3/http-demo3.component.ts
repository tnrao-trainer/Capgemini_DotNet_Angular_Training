import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-demo3',
  templateUrl: './http-demo3.component.html',
  styleUrl: './http-demo3.component.css'
})
export class HttpDemo3Component {

  studentsArray:any[] = [];

  public name:string = "";
  public course:string = "";
  public email:string = "";
  

  constructor(private dataServiceObj:DataService){}

  public getDataButtonClick()
  {                
      this.dataServiceObj.getAllStudents().subscribe((resData:any) =>
      {
        this.studentsArray = resData;
        //console.log(this.studentsArray);    
      })        
  }

  public addButtonClick()
  {
    let studentObj:any = {};
    studentObj.studentId = 0;
    studentObj.name = this.name;
    studentObj.email = this.email;
    studentObj.course = this.course;

    this.dataServiceObj.addStudent(studentObj).subscribe((response:any) => 
    { 
      // alert("New Student details added to server");
       alert(response.status);
       this.getDataButtonClick();
    });

  }


}
