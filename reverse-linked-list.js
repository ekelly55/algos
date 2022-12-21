/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class LinkedList {
    constructor(head){
        this.head = head
        this.val = head
        this.next = null
    }
    push(d) {
        let new_node = new Node(d);
        new_node.next = head
        head = d
        
    }
}
class Node {
    constructor(d){
        this.value = d
        this.next = null
    }
}


var reverseList = function(head) {
    console.log(head)
    let newList = new LinkedList(head)
    console.log(newList)
    let n = head;
    while (n !=null){
        console.log(n)
        
        let temp = n
        console.log(temp)
        head = head.next
        console.log(head)
        n = head
        console.log(n)
        
    }
    console.log(newList)
    return newList

};

head = [1, 2, 3, 4, 5]

reverseList()