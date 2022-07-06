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