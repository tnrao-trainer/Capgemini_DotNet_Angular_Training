import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string  = "https://localhost:7235/api/StudentsApi";

  constructor(private httpObj:HttpClient) { } 
  
  getAllStudents():any
  {
    return  this.httpObj.get(this.url);
  }

  addStudent(studentObj:any):any
  {
        return this.httpObj.post(this.url, studentObj);
  }


}
