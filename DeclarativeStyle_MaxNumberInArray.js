var arr = [7,89,71,6,0,8,104,8];
var maxElement = arr.reduce((max, element)=>{
    if(element>max)
        max = element;
    return max;
}, 0);

console.log("Maximum number = ", maxElement);
