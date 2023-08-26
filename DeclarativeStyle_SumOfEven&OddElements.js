var arr = [20,40,60,70,80,100,120];
var evenSum = arr.reduce((eSum, element)=>{
    if(element%2==0)
        eSum+=element;
    return eSum;
},0);

var oddSum = arr.reduce((oSum, element)=>{
    if(element%2!=0)
        oSum+=element;
    return oSum;
},0);

console.log("Sum of even elements = ", evenSum);
console.log("Sum of odd elements = ", oddSum);
