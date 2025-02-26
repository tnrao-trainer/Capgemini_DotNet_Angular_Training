import { Component } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  uname:string = "";
  result:string = "";

  constructor(private  serviceObj:HelloService){

  }

buttonClick():void
{
    this.result = this.serviceObj.greeting(this.uname);
}

 
}
