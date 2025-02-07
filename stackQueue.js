//stack is LIFO: last in, first out
//stack of dishes: whichever was last added to the stack is first to get washed
//call stack: have to finish the most recent function call before previous. think of recursion: you can't finish earlier calls until the last call is resolved

//what is the call stack? it's literally a stack, it's part of the memory allocated to a program by the OS. it's in the stack segment of memory. seperate from the heap, used for dynamically allocated memory

//when a func is called, a stack frame (block of memory containing necessary data for the function) is pushed onto call stack. when func finishes executing, the stack frame is popped off and control returns to the prev function. 

//another common use is undo/redo

//browsing history (routing) is like a stack

//stack is an abstract concept, so more than one way to implement. a simple way is an array implementation

//but then how is this related to LL?

//arr is good b/c has built in push and pop. can also use shift and unshift, if want to do it from the beginning, though that's weird, and more costly, b/c of reindexing

class ArrayStack {

    constructor() {
        this.items=[]
    }
    push(item){
        this.items.push(item)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        this.items.peek()
    }
    isEmpty(){
        return this.items.length === 0
    }
    
}

let books = new ArrayStack()

books.push("journal")
books.push("planner")
books.push("dune")
books.push(["golden compass", "amber spyglass", "subtle knife"])

// console.log(books)


//also can implement w/ a LL. BUT push and pop should be constant time. recall that in LL pop is not, b/c have to iterate through LL to get to the next to last. solution, can use shift and unshift, use them and rename them push and pop, or DLL. i'm going with DLL

class StackNode {
    constructor(val){
        this.val = val;
        this.next = null
        this.prev = null
    }
}

class LinkedListStack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    push(val){
            
        let newNode = new StackNode(val)
        
        if(this.last){
            this.last.next = newNode
            newNode.prev = this.last
            this.last = newNode
        } else {
            this.first = newNode
            this.last = newNode
        }
        this.size++
        return this.size
    }
    pop(){
        if(!this.first) return undefined
        let poppedNode = this.last
        if(this.length === 1){
            this.first = null
            this.last = null
        } else {       
            this.last = poppedNode.prev
            this.last.next = null
            poppedNode.prev = null
        }
        this.size--
        return poppedNode   
    }
}

let moreBooks = new LinkedListStack()

moreBooks.push("notebook")
moreBooks.push("rebel girl")
moreBooks.push("good inside",)
moreBooks.push( "elephant and piggy")
moreBooks.pop()


// console.log(moreBooks)


//big o of stacks: insertion and removal are O1, and that's all you use them for. you could implement other functionalities, which would be ON in many cases but you wouldn't use a stack for that. 

//queues: FIFO
//like a line: first one there is the first one to get out
//programming: a game lobby, uploading resources or downloading resources: the first thing you do (if they're the same size) will finish first
//print queue
//task processing


class ArrayQueue {
    constructor(){
        this.items = []
    }
    push(item){
        this.items.push(item)
    }
    
    shift(){
        return this.items.shift()
    }

}

let line = new ArrayQueue()

line.push("first")
line.push("second")
line.push("third")
line.push("fourth")

// console.log(line)

// console.log(line.shift())

// console.log(line)

class QueueNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    //FIFO means we only need shift and push, and can use singly LL b/c shift and push are both O1 in SLL. but w/ a queue we call push "enqueue" and shift "dequeue"
    enqueue(val){
        //insert at the end, after tail, makes new tial
        //accept a value, create a new node using that value
        //if no head, set head and tail to that node
        //otherwise, set "next" on tail to be new node, and update new node to be the new tail
        //increment length++
        let newNode = new QueueNode(val)
        
        if(this.last){
            this.last.next = newNode
            this.last = newNode
        } else {
            this.first = newNode
            this.last = newNode
        }
        this.size++
        return this.size

    }
    dequeue(){
        //remove from to the beginning
        if(this.first){
            let currentFirst = this.first
            if(this.size === 1){
                //just last this time because we've removed the first, so it's already null, but last will still be something unless we explicitly set it to null
                this.last = null
            }
            //this may be null, which would make sense if it's a queue of  1, which will then become a queue of 0
            this.first = currentFirst.next
            this.size--
            // console.log("returning removed node", currentFirst, "list is now", this)
            return currentFirst
        } else {
            // console.log("list has no nodes")
            return null
        }
    }

}

let queue = new LinkedListQueue()

queue.enqueue("first")
queue.enqueue("second")
queue.enqueue("thoird")
queue.enqueue("fourth")

console.log(queue.dequeue())

console.log(queue)

//just like stack, big O of queues is O1 for enqueue and dequeue