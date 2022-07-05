// import './encapsulation/public-private.js'

const user = {
  name: "ERY",
  lastnanme: "Gar",
   showfullname() {
      
      return this.name + " " + this.lastnanme
    },
  age: 30,
  hobbie: ["leer", "progrmar", "runb"],
  address: {
    street: "some",
    city: "somewhere",

  }
}
console.log(user.showfullname())

const account = {
  number : "564654654",
  amount : 100,
  deposit(qty) {
    this.amount = this.amount + qty 
  },
  withdraw(qty) { 
    this.amount = this.amount - qty
  }
}

account.deposit(100)
account.deposit(50)
account.deposit(10)
console.log(account)

account.withdraw(10)
account.withdraw(200)
console.log(account)