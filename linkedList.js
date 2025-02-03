//ordered data structure
//different from array. array is mapped to indexes
//LL has no indeces - each el only points to the next element
//each element is a node. each node has a value and a pointer to the next node, or null
//a LL has a head, length and tail
//allows for easy insertion (unlike arr, where you need to re-index the rest of it) and deletion

class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
//they get constructed with no initial data...why?
class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        //insert at the end, after tail, makes new tial
        //accept a value, create a new node using that value
        //if no head, set head and tail to that node
        //otherwise, set "next" on tail to be new node, and update new node to be the new tail
        //increment length++
        let node = new Node(val)
        
        if(this.head){
            this.head.next = node
        } else {
            this.head = node
            this.tail = node
        }
        this.length++

    }
}

// let a = new Node("a")
// let b = new Node("b")
// let c = new Node("c")
// let d = new Node("d")

// a.next = b
// b.next = c
// c.next = d

// //or, inefficiently:

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you?")


function printLinkedList(head){
    let current = head
    // console.log(current.val)
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}

console.log(printLinkedList(first))

