//just has a previous pointer as well as a next pointer

//will do most of the same methods

//single vs. double: double has more memory, but also more flexibility. it's a tradowff

class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
//they get constructed with no initial data...why?
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
            
        let newNode = new Node(val)
        
        if(this.tail){
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            this.head = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!head) return undefined
        let poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {

            
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
        
        
    }
    shift(){
        //remove from to the beginning
        if(this.length === 0) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
            // console.log("list has no nodes")
        }
        this.length--
        return currentHead
    }
    unshift(val){
        //add a new head
        let newNode = new Node(val)
        if(this.head){
            this.head.previous = newNode
            newNode.next = this.head
            this.head = newNode
        } else {
            this.head = newNode
            this.tail = this.head
            // console.log(this.length)
        }
        this.length++
        return this
    }
    get(index){
        //get a value at a specific spot in the list. a way to get a pseudo-index, even though we the LL doens't use indexes
        //fist figure out what end you're closest to
        if(index < 0 || index >= this.length){
            return null
        }
        let current
        if(index+1 > this.length/2){
            let count = this.length
            console.log("starting from the tail")
            //in this case, it's closer to the tail
            current = this.tail
            while(count > index + 1){
                
                // console.log(this.tail.prev)
                current = current.prev
                count--
            }
        } else {
            let count = 0
            console.log("starting from the head")
            // else it's closer to the head
            current = this.head
            while(count < index){
                // console.log("current node val is", current.val)
                current = current.next
                count++
                
            }
        }
        // console.log("node value at index", index," is", current)
        return current
    }
}

let list = new DoublyLinkedList()

list.push("hello")
list.push("this")
list.push("is")
list.push("me")
// console.log(list.shift())
// console.log(list)
console.log(list.get(3))
console.log(list.get(2))
console.log(list.get(1))
console.log(list.get(0))