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
    const newList = new LinkedList(head)
    let n = head;
    while (n !=null){
        
        temp = n
        head = head.next
        n = head
        newList.push(n)
    }
    return newList

};

head = [1, 2, 3, 4, 5]

console.log (reverseList(head))