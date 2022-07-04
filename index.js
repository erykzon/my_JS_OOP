const user = {
  name: "eri",
  lastnanme: "key",
  showfullname() {
      return `${this.name} ${this.lastnanme}`
    },
  age: 30
/*   hobbie: ["leer", "progrmar", "runb"],
  address: {
    street: "some",
    city: "somewhere",
  } */
}
console.log(user.showfullname())

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
