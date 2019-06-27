// node stores a piece of data - val
// reference to enxt node -next


class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}


class SignlyLinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//adding a Node in the end of the list
	//we say to our tail.next to be our new node
	//and then make our tail point to the last node
	push(val){
		var newNode = new Node(val);
		if(!this.head){
			this.head = newNode;
			this.tail = this.head;
		}else{
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;

	}
	//popping from the end of the list
	pop(){
		if(this.length === 0) return undefined;
		let current = this.head;
		let newTail = current;
		while(current.next){
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
			this.head = null;
			this.tail = null;
		}
		return current;
	}
}

var list = new SignlyLinkedList();

list.push('hello')
list.push('second')
list.push('sdadad')
list.push('second')
list.push('sdadad')


list.pop();
list.pop();
list.pop();