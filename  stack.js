const stack = ["journal", "planner", "dune", ["golden compass", "amber spyglass", "subtle knife"]]

function addBook(book) {
    stack.push(book)
    return books
}

function removeBook(){
    stack.pop()
    return stack
}

function seeBook(){
    stack.peek()
}


console.log(removeBook()