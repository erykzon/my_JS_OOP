function Person (name , lastname){
	this.name = name
	this.lastname = lastname
	this.age = ""
	this.showfullname = function (){
		return `${this.name} ${this.lastname}`
	}
}

const Erick = new Person("erick", "G")
console.log(Erick)

const Pato = new Person("Pato", "Loco")

console.log(Pato)
