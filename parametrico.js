function Stack () {
	this.item = []

	this.push = function(item){
		this.item.push(item)
	}
}

const stack = new Stack()
stack.push("hola")

const stack2 = new Stack()
stack2.push(50053)

console.log(stack)
console.log(stack2)