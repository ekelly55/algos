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
        if(!this.head) return undefined
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
        return oldHead
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
            // console.log("starting from the tail")
            //in this case, it's closer to the tail
            current = this.tail
            while(count > index + 1){
                
                // console.log(this.tail.prev)
                current = current.prev
                count--
            }
        } else {
            let count = 0
            // console.log("starting from the head")
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
    set(index, val){
        //get a value at a specific spot in the list. a way to get a pseudo-index, even though we the LL doens't use indexes
        //fist figure out what end you're closest to
        let targetNode = this.get(index)
        // console.log("target node is", targetNode)
        if(targetNode){
            targetNode.val = val
            return true
        }
        return false
    }
    traverse(){
        let current = this.head
        // will go as long as the next "current" exists. when it's null, it stops
        while(current){
            console.log(current.val)
            current = current.next
        }
    }
    insert(index, val){
        let newNode = new Node(val)
        if(index < 0 || index > this.length - 1) return false
        if(index === this.length -1){
            this.push(val)
            return true
        } 
        if(index === 0){
            this.unshift(val)
            return true
        }  
        
        let targetNode = this.get(index)
        // console.log("target node is", targetNode)
        if(targetNode){
            newNode.next = targetNode.next
            targetNode.next.prev = newNode
            newNode.prev = targetNode
            targetNode.next = newNode
            this.length++
            return true
        }
        return false
    }
    remove(index){
        //this will return the removed node, not a boolean
        if(index < 0 || index > this.length - 1) return undefined
        if(index === this.length -1) return this.pop()
        if(index === 0) return this.shift()
        
        
        let prevNode = this.get(index-1)
       
        //set new next on the node before targetNode to the value one past the target node
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        removedNode.next.previous = prevNode
        // prevNode.next.val = null
        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
    }
}

let list = new DoublyLinkedList()

list.push("hello")
list.push("this")
list.push("is")
list.push("me")
// console.log(list.shift())
// console.log(list)
// console.log(list.get(3))
// console.log(list.get(2))
// console.log(list.get(1))
// console.log(list.get(0))

console.log(list.remove(3))

list.traverse()


//big O
//insertion or removal from end or beginning: O1
//searching, access, insertion, removal from interior ON/2 (which still qualifies as ON by some)