// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};
var john = new Employee("Bob", 30, "Manager");

john.greet();
john.jobGreet();


// Do not change code below this line

it("should log the correct messages", () => {
  cy.visit(baseUrl + "/main.html");

  cy.window().then(win => {
    const Person = win.Person;
    const Employee = win.Employee;

    const person = new Person("Alice", 25);
    const employee = new Employee("Bob", 30, "Manager");

    // Stub the console.log method
    cy.stub(win.console, "log").as("consoleLog");

    // Test the greet method of Person
    person.greet();
    cy.get("@consoleLog").then(log => {
      console.log("Actual log for person.greet():", log);
    });

    cy.get("@consoleLog").should(
      "be.calledWith",
      `Hello, my name is Alice and I am 25 years old.`
    );

    // Test the jobGreet method of Employee
    employee.jobGreet();
    cy.get("@consoleLog").then(log => {
      console.log("Actual log for employee.jobGreet():", log);
    });

    cy.get("@consoleLog").should(
      "be.calledWith",
      `Hello, my name is Bob and I am 30 years old, and my job title is Manager.`
    );
  });
});

