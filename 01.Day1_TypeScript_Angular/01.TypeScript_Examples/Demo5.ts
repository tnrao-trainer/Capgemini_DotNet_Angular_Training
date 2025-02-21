class Student
 {
    public sid: number  = 0;	
    public sname: string  = "";
     
    constructor(sid:number = 0, sname:string = "")
    {
        this.sid = sid;
        this.sname = sname;
    }
     
  public showDetails():void
   {
        //  console.log("Student Id : " +  this.sid + ", Student Name : " + this.sname); 
          console.log(`Student Id : ${this.sid},  Student Name :  ${this.sname}`); 
   }
}	


let s1:Student = new Student();
let s2:Student = new Student(2056);
let s3:Student = new Student(1025, "Scott");
s1.showDetails();
s2.showDetails();
s3.showDetails();
 