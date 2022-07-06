function company (name){
	let employees = []
	this.name = name

	this.getemployees = function () {
		return employees
	}

	this.addemployee = function(employee){
		employees.push(employee)
		
	}
}

const Company = new company("oko")

console.log(Company)

Company.addemployee({name: "erick"})

console.log(Company.getemployees())