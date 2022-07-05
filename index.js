function Person (){
	this.name = ""
	this.lastname = ""
	this.age = ""
	this.showfullname = function (){
		return `${this.name} ${this.lastname}`
	}
}

const user2 = new Person()
