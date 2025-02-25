import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/dept.class';
 

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrl: './dept-details.component.css'
})
export class DeptDetailsComponent {
  
  @Input()
  public deptObj:Dept = new Dept(); 

  @Output()
  public onDeptRemove:EventEmitter<number> = new EventEmitter<number>();


  removeLinkClick():void{
      
      if(window.confirm("Do you want to delete this dept?") == true)
      {
        this.onDeptRemove.emit(this.deptObj.deptno);
      }
      
  }
}
