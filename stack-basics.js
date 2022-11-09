// class Stack {

//     constructor() {
//         this.items=[]
//     }
//     push(item){
//         this.items.push(item)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[items.length-1]
        
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
    
// }

// let books = new Stack()

// books.push("journal")
// books.push(["golden compass", "amber spyglass", "subtle knife"])
// books.push("dune")



// console.log(books.items[1])



let books = ["journal", "planner", "dune", ["golden compass", "amber spyglass", "subtle knife"]];

function push(book){
    books.push(book)
    return books
}

function pop() {
    books.pop()
    return books
}

function peek(){
    return books[books.length -1]
}

push("the stand")
push("bible")
push("harry potter")
push("harry potter")
pop()
pop()

console.log(peek())