const user = {
  name: "eri",
  lastnanme: "key",
  showfullname() {
      return `${this.name} ${this.lastnanme}`
    },
  age: 30,
  hobbie: ["leer", "progrmar", "runb"],
  address: {
    street: "some",
    city: "somewhere",
  }
}
console.log(user.showfullname())
console.log(Object.keys(user))
console.log(Object.values(user))

function Person (){
	this.name = ""
	this.lastname = ""
	this.age = ""
	this.showfullname = function (){
		return `${this.name} ${this.lastname}`
	}
}

const user2 = new Person()
user2.name = "Pato"
user2.lastname = "Loco"
user2.age = 25
console.log(user2.showfullname())

const user3 = new Person()
user3.name = "Chganchitoi"
user3.lastname = "Feliz"
user3.age = 45
console.log(user3.showfullname())


const number = new Object (12)
console.log(number)