

class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

//creating a stack using a single Linked List
class Stack{
	constructor(){
		this.first = null;
		this.last  = null;
		this.size = 0;
	}

	push(val){
		var newNode = new Node(val);
		if(!this.first){
			this.first = newNode;
			this.last = newNode;
		}else{
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	pop(){
		if(!this.first){
			return null;
		}else{
			var temp = this.first;
			if(this.size === 1){
				this.last = null;
			}
			this.first = this.first.next;
			this.size--;
			return temp.value;
		}
	}
}


var stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(3)


stack.pop();

console.log(stack)