class Node{
    constructor(val){
        this.val = val
        this.next = null;      
    }
}

class SinglyLinkedList{
    
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value){
        // YOUR CODE GOES HERE
         let node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = this.head;
            return true;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;

    }

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


    get(index){
        let current = this.head
        if(index < 0){
            return undefined;
        }
        while(index > 0){
            current = current.next;
            index--;
        }

        if(current === null){
            return undefined;
        }
        return current;
    }


}


var list = new SinglyLinkedList();
list.push(5);
list.push(3)
list.push(2)


let m = list.get(-1)

console.log(m)