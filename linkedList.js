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
            let current = this.tail
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
    get(index){
        //get a value at a specific spot in the list. a way to get a pseudo-index, even though we the LL doens't use indexes
        let count = 0
        let current = this.head
        if(index < 0 || index >= this.length){
            return null
        }
        while(count < index){
            // console.log("current node val is", current.val)
            current = current.next
            count++

        }
        // console.log("node value at index", index," is", current)
        return current
    }
    //set change the value of a node based on its index
    set(index, val){
        let targetNode = this.get(index)
        // console.log("target node is", targetNode)
        if(targetNode){
            targetNode.val = val
            return true
        }
        return false
    }
    //insert also takes an insert and a val, but doesn't change a val. inserts a new node
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
        // prevNode.next.val = null
        this.length--
        return removedNode
    }
    
    reverse(){
        //unusual, but common challenge question
        //first, swap head and tail
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        console.log("list with switched head and tail is")
        console.log(this)
        let previous = null
        let next;

        for(let i = 0; i < this.length; i++){
            //at the start, node is the val that was the original head
            //so we're setting "next" to be the 2nd node in the list
            
            next = currentNode.next;
            // console.log("i=", i, "currentNode is", currentNode, "next =", next)
            //node is now at the tail, so we want to set it's next to previous, which at the start is null
            currentNode.next = previous
            // console.log("currentNode.next is now set to previous=", currentNode.next)
            //previous is now the tail? it's the node that had previously been at the head?
            previous = currentNode
            // console.log("previous is now set to currentNode=", previous)
            //now we're setting the current node to be the next one in order
            currentNode = next;
            console.log("end of loop i=", i, "currentNode now set to", currentNode, "previous node is now set to ", previous, "next node is now set to ", next, "head is", this.head, "tail is", this.tail)
            // console.log("i=", i, "new list order is")
            // this.traverse()
        }
        return this
    }
}


let newList = new SinglyLinkedList()

newList.push('1')
newList.push('2')
newList.push('3')
newList.push('4')

// newList.traverse()

// newList.traverse()

// console.log(newList.set(6, "shirt"))
// console.log(newList.insert(6, "today"))
// newList.pop()
// console.log(newList.get(1))
newList.reverse()
// console.log(newList)
// newList.print()
// newList.traverse()




//big O
//appending at head or tail: O1
//removal depends..O1 (best case: if at head or tail) or ON (if you have to go through whole list, or at least to second to last)
//searching, access, insertion in middle, changing node in middle: ON

//basically everything is at best O1 when it's at the head or tail, or at worst ON-1 for interior nodes

//adding or removing from head is faster than an array b/c don't need reindexing
//adding or removing from tail should be same as in an array
//interior depends...what takes longer, iterating through a portion of the list or randomly accessing the relevant part of the array, but maybe having to reindex everything after it

//basically only advantageous when needing to do insertion or deletion at beginning

//LL are used as the basis for stacks and queues



