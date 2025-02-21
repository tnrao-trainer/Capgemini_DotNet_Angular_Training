class Student
 {
    public sid: number  = 0;	
    public sname: string  = "";
     
  public showDetails():void
   {
        //  console.log("Student Id : " +  this.sid + ", Student Name : " + this.sname); 
          console.log(`Student Id : ${this.sid},  Student Name :  ${this.sname}`); 
   }
}	


let obj1:Student = new Student();
obj1.sid = 5454;
obj1.sname  = "Scott";
obj1.showDetails();