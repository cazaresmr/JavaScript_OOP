// Exercise 1
class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name; // string
    this.pets = pets; // number
    this.residence = residence; // string
    this.hobbies = hobbies; // array
  }

  addHobby(newHobby) {
    this.hobbies.push(newHobby);
  }

  removeHobby(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index > -1) {
      this.hobbies.splice(index, 1);
    }
  }

  greeting() {
    console.log("Hello fellow person!");
  }

  info() {
    return `Name: ${this.name}, Pets: ${this.pets}, Residence: ${
      this.residence
    }, Hobbies: ${this.hobbies.join(", ")}`;
  }

  soundOff() {
    console.log(
      `${this.name} is here with ${this.pets} pets, residing in ${
        this.residence
      }. Enjoys: ${this.hobbies.join(", ")}`
    );
  }
}

// Exercise 2
class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full Stack Web Developer";
  }

  greeting() {
    console.log("Hello fellow coder!");
  }
}

// Exercise 3
const person1 = new Person("Roseann", 2, "Pasadena", [
  "Reading",
  "Traveling",
  "Cooking",
]);

person1.greeting();
console.log(person1.info());
person1.addHobby("Gardening");
console.log(person1.info());
person1.removeHobby("Traveling");
console.log(person1.info());
person1.soundOff();

const coder1 = new Coder("Mike", 3, "Los Angeles", [
  "Coding",
  "Reading",
  "Traveling",
]);

coder1.greeting();
console.log(coder1.info());
coder1.addHobby("Cooking");
console.log(coder1.info());
coder1.removeHobby("Reading");
console.log(coder1.info());
coder1.soundOff();

// Exercise 4
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a, b = this.result) {
    this.result = a + b;
    return this.result;
  }

  subtract(a, b = this.result) {
    this.result = b - a;
    return this.result;
  }

  multiply(a, b = this.result) {
    this.result = a * b;
    return this.result;
  }

  divide(a, b = this.result) {
    if (a === 0) {
      console.log("Error: Division by zero");
      return;
    }
    this.result = b / a;
    return this.result;
  }

  displayResult() {
    console.log(this.result);
  }
}

const calc = new Calculator();

calc.add(5, 3); // 8
calc.displayResult(); // Logs: 8

calc.subtract(2); // 6
calc.displayResult(); // Logs: 6

calc.multiply(4); // 24
calc.displayResult(); // Logs: 24

calc.divide(3); // 8
calc.displayResult(); // Logs: 8

calc.divide(0); // Error: Division by zero
