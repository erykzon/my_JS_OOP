// function Person (){
// 	this.name = ""
// 	this.lastname = ""
// }

class Person {
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}
	greet () {
		return `Hello i am + ${this.name} ${this.lastname}`
	}
}

const user = new Person ("chancho", "Feliz")
const user2 = new Person ("Pato","loco")

console.log(user2.greet())
console.log(user.greet())