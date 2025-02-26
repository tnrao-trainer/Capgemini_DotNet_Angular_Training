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
  public selecedStudentId:number = 0;
  

  constructor(private dataServiceObj:DataService){}

  public getDataButtonClick()
  {     
    /*           
      this.dataServiceObj.getAllStudents().subscribe((resData:any) =>
      {
        this.studentsArray = resData;
        //console.log(this.studentsArray);    
      });        
    */
   
      this.dataServiceObj.getAllStudents().subscribe({
        next: (resData:any) => {
            console.log(resData);
            this.studentsArray = resData;
        },
        error: (error:any) => console.log(error.message)
      });
      
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
       this.clearFields();
    });

  }

  public deleteButtonClick(id:number)
  {
     this.dataServiceObj.deleteStudent(id).subscribe((response:any) => 
      {  
         alert(response.status);
         this.getDataButtonClick();
      });
  }

  public selectButtonClick(id:number)
  {
     this.dataServiceObj.getStudentById(id).subscribe((response:any) => 
      {  
          this.name = response.name;
          this.course = response.course;
          this.email = response.email;
          this.selecedStudentId = response.studentId;
      });
  }


  public updateButtonClick()
  {
    let studentObj:any = {};
    studentObj.studentId = this.selecedStudentId;
    studentObj.name = this.name;
    studentObj.email = this.email;
    studentObj.course = this.course;

    this.dataServiceObj.updateStudent(studentObj).subscribe((response:any) => 
    {  
       alert(response.status);
       this.getDataButtonClick();
       this.clearFields();
    });
  }


  public clearFields()
  {
    this.name = "";
    this.course = "";
    this.email  ="";
  }

}
