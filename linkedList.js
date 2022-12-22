class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

let a = new Node("a")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")

a.next = b
b.next = c
c.next = d

function printLinkedList(head){
    let current = head
    console.log(current.val)
    while(current != null){
        console.log(current.val)
        current = current.next
    }
}

console.log(printLinkedList(a))