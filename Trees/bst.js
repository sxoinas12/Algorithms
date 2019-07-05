class Node{
	constructor(value){
		this.value = value;
		this.children = [];
	}
	
}


class Tree {
	constructor(NodeType){
		this.root = null;
		this.node = NodeType;
	}

	//find node based on value
	search(value){
		if(value === this.root.value) return this.root;
		var stack = [], node, counter;
		stack.push(this.root)
		while(stack.length > 0){
			node = stack.pop()
			if(node.value === value){
				//found the value we are looking for
				return node;
			}else if(node.children && node.children.length){
				for(counter = 0; counter < node.children.length; counter++ ){
					stack.push(node.children[counter]);
				}
			}
		}
		return null;
	}


	insert(value,parent){

		if(this.root === null){
			let root =new this.node(value);
			this.root = root;
			return this.root;
		}else{
			let newNode = new this.node(value);
			parent.children.push(newNode);
			return newNode;
		}
	}
	

	
}

//Initiailize tree
var tree = new Tree(Node);
//creating a random new node
let node = new Node(5)
var root = tree.insert(5)
var child1 = tree.insert(1,root)
var child2 = tree.insert(2,root)
var child3 = tree.insert(3,root)



var sub_child = tree.insert(1,child3);
//console.log(tree.root.children)



let custom_node = tree.search(5)

console.log(custom_node)
