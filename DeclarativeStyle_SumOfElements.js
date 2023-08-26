var arr = [20,40,60,70,80,100,120];
var sumOfArrayElements = arr.reduce((sum, element)=>{
    sum+=element;
    return sum;
},0);
console.log("Sum of array elements = ", sumOfArrayElements);
