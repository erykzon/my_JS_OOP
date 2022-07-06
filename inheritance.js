function Person() {
	this.name = ""
	this.lastname = ""
}

function Programer() {

	this.language = ""
}
Programer.prototype = new Person

console.log (Programer)
console.log (Person)

const person = new Person
person.name = "pato"
person.lastname = "enojado"
console.log(person)



const programer = new Programer()
programer.name = "chancho"
programer.lastname = "feliz"
programer.language = " java"

console.log(programer)

// segundo ejemplo
// este etodo es mejor por uso y estetica

class Person {
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}
}

class Programer extends Person {
	constructor(name , lastname, language){
		super(name, lastname) // se agrega para completar la extencion de la clase padre
		this.language = language
	}
}

const person = new Person("Pato", "Enojado")

console.log(person)

const programer = new Programer("Chancho","Feliz", "Java")

console.log(programer)

