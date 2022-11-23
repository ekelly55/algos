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

//linked list is not usually used by itslef. normally the basis for stack or queue

class LinkedList {
    constructor(head=null){
        this.head = head
    }
}
class ListNode {
    constructor(value) {
        this.value=value,
        this.next=null
    }
}

let node1 = new ListNode(2)
let node2= new ListNode(5)
node1.next=node2

let list = new LinkedList(node1)

// console.log(list.head.next.value)


//map vs object
/*
// map is like object and is an instance of object but can use any data type for key. object can only use primitives for key. 

// map preserves original order of key value pair, object doesn't. 
map is an instance of object, but not vice versa

can create new objects by literal or constructor (don't use constructor normally)
map can only be created by constructor: receives an iterable, like an array, with key value pairs for each element
*/

const map = new Map([[1,2],[3,4]])
//console.log(map)

// hash tables: collisions - can use open addressing (probing) or closed addressing (chaining)

// probing can be linear, quadratic or double hashing

//if you know the limits on type and number of keys, can optimize table size at start. can fill whole table and not waste memory. no addt'l data structures

//but more complex comp, can fill table leaving no room for new data, address won't end up corresponding to it's hash

//linear can cause clustering: values all close together. requries more iteration. 

//quadratic: move exponential steps to right: 1, 4, 16...

//double hashing: add a second hash function. if the space is occupied, run that hash value through a second function. if that's occupied, try 2x, 3x, etc. 

//chaining: closed addressing. each slot on the table is a bucket. usually buckets are linked lists, which preserve the simplicity: LIFO or FIFO

//chainging is more elegant. simpler insertion and deletion. can always add more data.

//but does require more total memory and processing, may end up with unused slots, thus memory allocated, a bad hash function may create long chains

//hash tables need 3 basic methods: search, insert, remove

//hash tables are great when you have millions or billions of entries: thats why we haven't used them. used for real world db and computer memory. spell checker is an implementation of a hash table

class HashTable {
    constructor() {
        this.values = {};
        this.length = 0;
        this.size = 0;
    }
    calculateHash(key){
        return key.toString().length%this.size
    }
    
    add(key, value){
        const hash = this.calculateHash(key)
        if(!this.values.hasOwnProperty(hash)){
            this.values[hash]={};
        }
        if (!this.values[hash].hasOwnProperty(key)){
            this.length++;
        }
        this.values[hash][key] = value;
    }
    search(key){
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
            return this.values[hash][key];
        } else {
            return null;
        }
    }
}

const ht = new HashTable()

ht.add("Canada", "300")
ht.add("Germany", "100")
ht.add("Italy", "50")

// console.log(ht.search("Italy"))

// binary trees:

class Node {
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree {
    constructor(){
        this.root=null;
    }
    insert(data){
        let newNode = new Node(data);
        
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left===null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}

const tree = new BinaryTree()

let root = tree.insert(5)
tree.insert(6)
tree.insert(2)
tree.insert(35)
tree.insert(673)
tree.insert(34)
tree.insert(0)
tree.insert(1)
tree.insert(3)
tree.insert(5.5)
tree.insert(-1)
tree.insert(1)

console.log(tree.root)


