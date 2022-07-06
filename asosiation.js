class Person {
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}
	greet () {
		return `Hello i am + ${this.name} ${this.lastname}`
	}
}

const chancho = new Person ("chancho", "Feliz")
const pato = new Person ("Pato","loco")

pato.parent = chancho;

console.log(pato)
console.log(chancho)