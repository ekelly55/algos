myArray = new Array(5)

// console.log(myArray)

//linked lists

//what is a foundational data structure? it's not primitive, but used as a subcategory of other complex ones?

//node: two things - data and next, or pointer

//end is null next node or tail

//linked lists can grow by using pointers to point to places in the memory. you don't need contiguous memory space to add to it, like an array.

//LLs take up more space than arrays because each node has 2 values. it can also take more time to read b/c the data isn't one continuous chunk. You can't access a particular node without starting from the head and moving sequentially til you find it.

//big O: array access is faster, insert and delete are longer. search is same

//in LLs, you can only get to an piece of data by following the pointers. with an array, you know the length and thus the indexes. you just tell it. 

//linked list: next needs to be updated as you add items. there can only be one tail

//doubly linked have a previous property also that points backwards. makes it easier to move through, but also more data and more complex if you're adding or removing values in the middle 