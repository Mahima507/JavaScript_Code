function createStudent(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    var student = {};
    student.rollNo = rollNo;
    student.name = name;
    student.age = age;
    student.phyMarks = phyMarks;
    student.chemMarks = chemMarks;
    student.mathMarks = mathMarks;
    student.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    student.grade = function () {
        let grd ='';
        if((this.total()/3)>=90)grd = 'A';
        else if((this.total()/3)>=80 && (this.total()/3)<90)grd = 'B';
        else grd = 'C';
        return grd;
    }
    return student;
}
var mahima = createStudent(101, 'Mahima', 21, 90, 95, 91);
console.log(mahima)
console.log(mahima.total());
console.log(mahima.grade());
console.log("mahima instanceof createStudent : ", mahima instanceof createStudent);
console.log("mahima instanceof Object : ", mahima instanceof Object);


var priya = createStudent(101, 'Priya', 20, 76, 93, 85);
console.log(priya)
console.log(priya.total());
console.log(priya.grade());
console.log("priya instanceof createStudent : ", priya instanceof createStudent);
console.log("priya instanceof Object : ", priya instanceof Object);

var pritam = createStudent(101, 'Pritam', 23, 96, 98, 78);
console.log(pritam)
console.log(pritam.total());
console.log(pritam.grade());
console.log("pritam instanceof createStudent : ", pritam instanceof createStudent);
console.log("pritam instanceof Object : ", pritam instanceof Object);
