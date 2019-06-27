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


	//shift will remove the current head 
	shitf(){
		if(!this.head){
			return undefined;
		}
		let current = this.head;
		this.head = current.next;
		this.length--;
		if(this.length === 0){
			this.tail = null;
		}
		return current;
	}


	//Unshift --> Add a Node at the start of the list
	UnShift(val){
		let newNode = new Node(val);
		if(!this.head){
			this.head  = newNode;
			this.tail = newNode;
		}else{
			newNode.next = this.head;
			this.head = newNode;	
		}
		this.length++;
		return this;	
	}

	//Get Function that return the item based on position in  a linked list
	get(index){
		if(index < 0 || index > this.length) return null;
		let counter = 0;
		let current = this.head
		while(counter < index){
			current = current.next;
			counter++;
		}
		return current;
	}
	// Value to a current node in position (index)
	set(index,value){
		let node = get(index);
		if(node) {
			node.val = value;
			return true;
		}
		return false;
	}

	//insert new Node with value at position (index)
	insert(index,value){

		if(index < 0 || index > this.length) return false;
		if(index === this.length) {
			let node = push(value);
			return node;
		}
		if(index === 0){
			let list = UnShift(value);
			return list;
		}
		let prevNode = get(index-1);
		let nextNode = get(index);
		let newNode = Node(val);
		newNode.next = nextNode;
		prevNode.next = newNode;
		this.length++;
		return newNode;
	}
}

var list = new SignlyLinkedList();

list.push('hello')

list.push("some")
list.push('sss')
let m = list.get(1);
console.log(m)

