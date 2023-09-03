function Student(rollNo, name, age, phyMarks, chemMarks, mathMarks) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
    this.phyMarks = phyMarks;
    this.chemMarks = chemMarks;
    this.mathMarks = mathMarks;
    this.total = function(){
        return this.phyMarks+this.chemMarks+this.mathMarks;
    }
    this.grade = function () {
        let grd;
        if(this.total()>90)grd = 'A';
        else if(this.total()>80)grd = 'B';
        else grd = 'C';
        return grd;
    }
}

var mahima = new Student(101, 'Mahima', 21, 90, 95, 91);
console.log(mahima)
console.log(mahima.total());
console.log(mahima.grade());
console.log("mahima instanceof Student : ", mahima instanceof Student);
console.log("mahima instanceof Object : ", mahima instanceof Object);

var priya = new Student(101, 'Priya', 20, 76, 93, 85);
console.log(priya)
console.log(priya.total());
console.log(priya.grade());
console.log("priya instanceof Student : ", priya instanceof Student);
console.log("priya instanceof Object : ", priya instanceof Object);

var pritam = new Student(101, 'Pritam', 23, 96, 98, 78);
console.log(pritam)
console.log(pritam.total());
console.log(pritam.grade());
console.log("pritam instanceof Student : ", pritam instanceof Student);
console.log("pritam instanceof Object : ", pritam instanceof Object);
