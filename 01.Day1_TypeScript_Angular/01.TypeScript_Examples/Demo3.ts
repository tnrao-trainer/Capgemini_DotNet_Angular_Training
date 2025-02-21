function twoMultiple(x:number) :  number
{
    return x * 2;
}

let ar1:number[] =  [1,2,3,4,5];

let ar2 = ar1.map(Math.sqrt);
let ar3 = ar1.map(twoMultiple);


let ar4 = ar1.map(function(x:number)
{
    return x * 5;
});

let ar5 = ar1.map((x) =>
{
    return x * 10;
});


let ar6 = ar1.map( x => x * 11);
let ar7 = ar1.map( x => x * x);


console.log(ar1);
console.log(ar2);
console.log(ar3);
console.log(ar4);
console.log(ar5);
console.log(ar6);