// EmployeeInfo function
function EmployeeInfo(name, salary) {
    console.log(`Welcome ${name}, Your monthly Salary is ${salary}`);
}

const EmpSkills = (skills) => {
    console.log(`Expert in ${skills}`);
};

// Importing local modules
const student = require('./StudentInfo');
const person = require('./Person');

// Calling EmployeeInfo
EmployeeInfo('John', 50000);
EmpSkills('Java');

// Using StudentInfo module
console.log(`Student Name: ${student.getName()}`);
console.log(`Location: ${student.Location()}`);
console.log(`DOB: ${student.dob}`);
console.log(`Grade: ${student.Studentgrade(75)}`);

// Using Person module
const Person = require('./Person');
const person1 = new Person('Jim', 25, 'jim@gmail.com');
console.log(person1.getPersonInfo());
