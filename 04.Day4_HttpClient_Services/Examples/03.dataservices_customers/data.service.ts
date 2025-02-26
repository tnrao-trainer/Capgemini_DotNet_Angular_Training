import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private httpObj:HttpClient) { }

  getCustomers():any
  {
   this.url = "https://www.w3schools.com/angular/customers.php";
    return this.httpObj.get(this.url);
  }

   
}
