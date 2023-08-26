var arr = [20,40,60,70,80,100,120];
var sumOfArrayElements = arr.reduce((sum, element)=>{
    sum+=element;
    return sum;
},0);

var sum = sumOfArrayElements;
var n = arr.length;
var avg = sum/n;
console.log("Average of array elements = ", avg);
