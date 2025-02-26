import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-demo2',
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component { 

  public customersArray:any[] = [];


  constructor(private dataServiceObj:DataService)
  {

  }

  getDataButtonClick()
  {    
     this.dataServiceObj.getCustomers().subscribe( (resData:any) => 
      {
        // console.log(resData.records);
           this.customersArray = resData.records;
      } );
  }

}
