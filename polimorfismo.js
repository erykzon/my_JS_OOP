class Person {
	constructor( name, lastname){
		this.name = name
		this.lastname = lastname
		
	}
}

class Progrmaer extends Person {
	constructor(name , lastname , language){
		super(name , lastname)
		this.language = language
	}
}

const chanchito = new Person ("chanchito ", "Feliz")
const gatito = new Progrmaer ("gatito ", "b", "javas")

console.log(chanchito)
console.log(gatito)

function wirteFullname (p){
	console.log(p.name + " " + p.lastname)	
}

wirteFullname(chanchito)
wirteFullname(gatito)