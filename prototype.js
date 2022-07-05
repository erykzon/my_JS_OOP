function Person (name, lastname){
	this.name = name
	this.lastname = lastname
	this.displayName = function (){
		return `${this.name} ${this.lastname}`
	}
}

const chancho = new Person("Chanco", "Feliz")
chancho.name= "Chanchi"
// console.log(chancho.displayName())
const Pato = new Person("Pato","Loco")
// console.log(Pato.displayName())
const Gatito = new Person("Gatito","M")
// console.log(Gatito.displayName())

Person.prototype.greet = function(){
	return `Hello Im ${this.name}`
}

Person.prototype.age = 100

console.log(chancho.age)
console.log(Pato.age)
console.log(Gatito.age)

// Otro ejemplo de prototype

const s = new String("Hello world")

String.prototype.concatTest = function (){
	return this  + "test"
}

console.log("My name is Chancho".concatTest())
console.log(s.concatTest())