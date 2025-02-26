import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {

  public customersArray:any[] = [];


  constructor(private httpObj:HttpClient)
  {

  }

  getDataButtonClick()
  {
     let url = "https://www.w3schools.com/angular/customers.php";

     this.httpObj.get(url).subscribe( (resData:any) => 
      {
        // console.log(resData.records);
           this.customersArray = resData.records;
      } );
  }

}
