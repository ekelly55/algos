//a class is like a blueprint for objects with pre-defined properties and methods

//things like arrays and common data structures are included in js, and thus have build-in methods

//less common DS are not included, so we have to create them as classes, including their associated methods

//does js technically have real classes? no
//introduced in ES15 they're "sytactical sugar" over js existing prototype-based inheritance. class syntax does not introduce a new object-oriented inheritancwe model to js

//js is never been truly OO. it takes advantage of prototype-based inheritance. the introduction of class syntax doesn't change how things work behind the scenes, but makes it easier to create class-like objects

//example syntax
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        //we can set default values at creation
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        console.log(`Your full name is ${this.firstName} ${this.lastName}`)
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            return "YOU'RE IN TROUBLE!"
        }
        return`${this.firstName} ${this.lastName} has been late ${this.tardies} times.`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length
    }
    static contactStudents(...students){
        //do something like email all students in the array
        return `emailing students`
    }
    static assignPartners(student1, student2){
        return `${student1.firstName} partnered with ${student2.firstName}`
    }
}

//constructor is a special method to instantiate new instanes of a class

//class keyword creates a constant. you can't change it

let firstStudent = new Student("kaye", "alfred-kelly", "k");
let nextStudent = new Student("milo", "alfred-kelly", "k", "5");

// console.log(nextStudent)

//this in a constructor, this refers to the individual instance. i.e. this Student object's firstname key will equal whatever firstname is passed in to the constructor

//the new keyword tells it to run the constructor method

//instance methods and static methods, or class methods
//syntax is <instanceName>.<classMethod> = return specific to that instance. i.e.

console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent.markLate())
console.log(firstStudent)

console.log(nextStudent.addScore(100))
console.log(nextStudent.addScore(90))
console.log(nextStudent.addScore(84))
console.log(nextStudent.addScore(95))
console.log(nextStudent.calculateAverage())

console.log(nextStudent)

//class methods
//pertinent to classes, but not necessarily to instances
//rare, but good to know
//uses static keyword: defines a static method for a class. called without intantiating the class and can't be called through a class instance. often used to create utility functions for an application...what does that mean?
//can maybe think of it as something you want to do to all instances, or want to do it to select instances. a good example is a static method to find the distance between any two instances of a class Point
//i.e. the static contact students method we added above. call it like:

Student.contactStudents([firstStudent, nextStudent])
console.log(Student.assignPartners(firstStudent, nextStudent))

