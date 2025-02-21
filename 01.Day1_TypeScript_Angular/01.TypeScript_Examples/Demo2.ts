function getMessage():void
{
     console.log("Welcome to TypeScript");
}

function greeting(uname:string):void
{
    console.log("Welcome to " + uname);
}

function add(x:number, y:number):number
{
    return x + y;
}


// Default Parameters
function getTotal(price:number,  qty:number = 1) : void
{
    let total:number = 0;
    total = price * qty; 
    console.log(`Price  : ${price}, Quantity  : ${qty}, Total Amount  : ${total}`);
}


function sum(...ar:number[]) : void
{
    let total:number = 0;

    // block scope
    for (let i:number = 0; i < ar.length; i++)
    {
        total = total + ar[i];
    }    

    //console.log("The value of i : " + i);  // error
    console.log("Sum Result  : " + total);
}




// Function calling
getMessage();
getMessage();
console.log("----------------------------");
greeting("Scott");
greeting("Smith");
console.log("----------------------------");
let result  =  add(10,20);
console.log("Addition Result : " + result);

console.log("----------------------------");
getTotal(2500,3);
getTotal(1500);
console.log("----------------------------");

sum(10);
sum(10, 20, 30);
sum(10, 20, 30, 40, 50, 60, 70);
sum(10, 20);
sum(10, 20, 30, 40, 50, 60, 70, 80, 90);