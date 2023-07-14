// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
var john = new Employee("John", 30, "Software Engineer");

john.greet();
john.jobGreet();


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
