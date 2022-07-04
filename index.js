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