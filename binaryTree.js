//very commonly used
//trees vs lists
//trees, binary trees, binary search trees

//*********TREES */
//tree is a data structure made of nodes in a parent/child relationship
//nodes can have several children, or several "nexts"
//top node is called "root" and it references some number of other child notes
//can store any kind of values, but usually numbers or strings
//lists are linear, trees are  non-linear
//nodes can only point to children
//no referencing nodes at same level
//must start from a single root
//root, parent, child: root is also parent, but can't be child, child can also be parent
//leaf: node with no children. a leaf is a child, but can't be a parent
//siblings: what it sounds like
//edge: connection between one node and another. depicted by arrow in diagrams

//applications of trees: HTML DOM - elements and nested child elements. browser readsd through the html as a tree. can only access children through adults

//network routing is an application of trees: find the shortest path

//abstract syntax trees of programming language
//used in AI and ML e.g. a mini-max tree: figure out all possible outcomes from a given state. how you train computers to play chess, etc. 

//folders in an operating system 

//parsing JSON: to retrieve vals, need to traverse a tree structure

//******* BINARY TREES */
//subset of tree
//can have at most 2 children

//binary search trees are a subset of binary trees
//sorted in a particular order: must use data than can be compared. for each node, the children less than it are to the left, greater than to the right

//but can greater nodes have children that are less than the root?



class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){

        let node = new Node(value)
        if(!this.root){
            this.root = node
            return this
        }
        let current = this.root
        console.log(this.root)
        //first check if it's a duplicate value
        if(value === current.value) return undefined
        //then create a new node
        //current will change as we go through a while loop
        //check if the root exists. if not, make the val the root
        
        while(current){

            if(value < current.value){
                if(!current.left){
                    current.left = node
                    return this
                } else {
                    current = current.left
                }
            } else if(value > current.value){
                //node is greater than current
                if(!current.right){
                    current.right = node
                    return this
                } else {
                    current = current.right
                }
                
            } 
        }
        
        //search for the right place in tree, see if it exists. if not, make a new node. if it does?
    }

    find(value){
        //first check if it's a duplicate value
        //check if the root exists. if not, stop
        if(!this.root) return null;
        //current will change as we go through a while loop
        
        let current = this.root
        while(current){
            if(value === current.value) return current
            if(value < current.value ){
                current = current.left
            } else if(value > current.value ){    
                current = current.right
            } else {
                return null
            }
        }
    }
}


let bst = new BinarySearchTree()

// bst.root = new Node(10);
// bst.root.left = new Node(7);
// bst.root.right = new Node(15)
// bst.root.left.right = new Node(9)

// console.log(bst)
console.log(bst.insert(10))
console.log(bst.insert(15))
console.log(bst.insert(5))
console.log(bst.insert(7))
console.log(bst.insert(13))
console.log(bst.find(13))

//big O for ONLY binary search trees
//best and average case? what?
//big O: insertion O(logn)
//searching O(logn)
//the larger it is, 

//depth first
//best for when the tree is deep (b/c going across stores the nodes in memory?)
//goes all the way to the bottom before coming back up
//uses recursion
//inorder: L->N->R  best for returning all values in order
//preorder: N->L->R best for copying or indexing. returns values in an order that's closest to reading the tree naturally
//postorder: L->R->N best for deleting a subtree (diff from node removal)

//breadth first: best for shallow trees, b/c takes more mem
//also good for when you need the shortest path in an unweighted tree...?
//goes level by level, left to right, implemented using a queue

//if just traversing, DFS is more common for binary trees