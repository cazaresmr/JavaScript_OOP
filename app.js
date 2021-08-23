console.log("Hello World!\n==========\n")

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n")
class Person {
	constructor(name, pets, residence, hobbies) {
		this.name = name
		this.pets = pets
		this.residence = residence
		this.hobbies = hobbies
	}
	info() {
		console.log(
			`My name is ${this.name}; I live in ${this.residence}; I have ${this.pets} pets; and my hobbies include ${this.hobbies}`
		)
	}

greeting () {
		console.log("Hello!");
	}
}

class Coder extends Person {
	constructor(name, pets, residence, hobbies) {
		super(name, pets, residence, hobbies)
		this.occupation = "Full Stack Web Developer"
	}

greeting() {
	console.log("Hello World!")
}
}

let Mike = new Person("Mike", 0, "Los Angeles", ["reading", "walking", "learning to code"])
let Matt = new Coder("Matt", 2, "Atlanta", ["running", "watching TV", "stamp collecting"])

console.log(Mike)
console.log(Matt)
