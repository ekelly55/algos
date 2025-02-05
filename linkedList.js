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
        let newNode = new Node(val)
        
        if(this.tail){
            this.tail.next = newNode
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this

    }
    traverse(){
        let current = this.head
        // will go as long as the next "current" exists. when it's null, it stops
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    
    pop(){
        if(this.head){
            let current = this.head
            let newTail = current
            while(current.next){
                newTail = current;
                current = current.next
                // console.log("looping. newTail is", newTail, "current node is", current)
            }
            // console.log("done looping. current node is", current, "newTail is", newTail, "removing tail and setting new")
            let oldTail = this.tail
            newTail.next = null
            this.tail = newTail
            this.length--
            // console.log("new tail is", this.tail, "new list length is", this.length, "removed tail is", oldTail.val)
            //edge case when new length is 0
            if(this.length === 0){
                this.head = null
                this.tail = null
            }
            return oldTail.val
        }else{
            return undefined
        }
        
    }
    shift(){
        //remove from to the beginning
        if(this.head){
            let currentHead = this.head
            this.head = currentHead.next
            this.length--
            if(this.length === 0){
//just tail this time because we've removed the head, so it's already null, but tail will still be something unless we explicitly set it to null
                this.tail = null
            }
            // console.log("returning removed node", currentHead, "list is now", this)
            return currentHead
        } else {
            // console.log("list has no nodes")
            return undefined
        }
    }
    unshift(val){
        //add a new head
        let newNode = new Node(val)
        if(this.head){
            newNode.next = this.head
            this.head = newNode
            this.length++
            return this
        } else {
            this.head = newNode
            this.tail = this.head
            this.length++
            // console.log(this.length)
            return this
        }
    }
    get(position){
        //get a value at a specific spot in the list. a way to get a pseudo-index, even though we the LL doens't use indexes
        let count = 0
        let current = this.head
        if(position < 0 || position >= this.length){
            return null
        }
        while(count < position){
            console.log("current node val is", current.val)
            current = current.next
            count++

        }
        console.log("node value at position", position," is", current)
        return current


    }
}


let newList = new SinglyLinkedList()

// newList.push('i')
newList.unshift('am')
// newList.traverse()

newList.push('a')
// newList.push('fool')


// newList.pop()

newList.push('new')
newList.push('tie')
newList.push('wearing')

// newList.traverse()

newList.unshift('I')
// newList.traverse()

console.log(newList.get(5))






