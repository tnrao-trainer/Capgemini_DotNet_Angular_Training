import { Component } from '@angular/core';
import { Dept } from '../models/dept.class';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrl: './dept-list.component.css'
})
export class DeptListComponent {

  deptsArray:Dept[]  = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 40, dname : "Operations",  loc :  "Chnnai"},
    {deptno : 50, dname : "Admin",  loc :  "Pune"},
    {deptno : 60, dname : "Finance",  loc :  "Hyd"},
    {deptno : 70, dname : "Testing",  loc :  "Mumbai"}
];


public deptRemove_parent(deptNumber:number):void
{
    
    let index = this.deptsArray.findIndex(x => x.deptno == deptNumber);
    this.deptsArray.splice(index, 1);

    // alert("Message from Parent - Deptno :" + deptNumber);
}
     

}
