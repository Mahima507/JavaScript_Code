function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
}
Student.prototype.total = function(){
    return this.phyMarks+this.chemMarks+this.mathMarks;
}
Student.prototype.grade = function () {
    let grd;
    if(this.total()>90)grd = 'A';
    else if(this.total()>80)grd = 'B';
    else grd = 'C';
    return grd;
}

var mahima = new Student(101, 'Mahima', 21, 90, 95, 91);
console.log(mahima)
console.log("mahima.total() :",mahima.total());
console.log("mahima.grade() :",mahima.grade());
console.log("mahima.__proto__.total.call(mahima) :",mahima.__proto__.total.call(mahima));
console.log("mahima.__proto__.grade.call(mahima) :",mahima.__proto__.grade.call(mahima));
console.log("mahima instanceof Student : ", mahima instanceof Student);
console.log("mahima instanceof Object : ", mahima instanceof Object);

var pritam = new Student(101, 'Pritam', 23, 96, 98, 78);
console.log(pritam)
console.log("pritam.total() :",pritam.total());
console.log("pritam.grade() :",pritam.grade());
console.log("pritam.__proto__.total.call(pritam) :",pritam.__proto__.total.call(pritam));
console.log("pritam.__proto__.grade.call(pritam) :",pritam.__proto__.grade.call(pritam));
console.log("pritam instanceof Student : ", pritam instanceof Student);
console.log("pritam instanceof Object : ", pritam instanceof Object);
