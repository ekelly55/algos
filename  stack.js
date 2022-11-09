class Stack {

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

let books = new Stack()


console.log(books)
//books = ["journal", "planner", "dune", ["golden compass", "amber spyglass", "subtle knife"]];