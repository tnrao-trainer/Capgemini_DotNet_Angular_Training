import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/student.class';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string  = "https://localhost:7235/api/StudentsApi/";

  constructor(private httpObj:HttpClient) { }

 
  
 
  getAllStudents():Observable<Student[]>
  {
      let authToken = "akjdflk8a7sdfasdfas7df98as7df987asd98f7";

      //    const authToken = localStorage.getItem('token'); // Get token dynamically
    
          // Define headers with Authorization token
          const headers = new HttpHeaders({
            Authorization: `Bearer ${authToken}`
          });
  
          
   // return  this.httpObj.get<Student[]>(this.url);
    return  this.httpObj.get<Student[]>(this.url, {headers});
  }

  addStudent(studentObj:any):any
  {
        return this.httpObj.post(this.url, studentObj);
  }

  updateStudent(studentObj:any):any
  {
        return this.httpObj.put(this.url, studentObj);
  }

  deleteStudent(id:number):any
  {
        return this.httpObj.delete(this.url +  id);
  }

  getStudentById(id:number):Observable<Student>
  {
        return this.httpObj.get<Student>(this.url +  id);
  }



}
