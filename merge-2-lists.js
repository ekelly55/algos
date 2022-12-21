/**
 * Definition for singly-linked list.
//  You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/

var mergeTwoLists = function(l1, l2) {
    function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
     const result = new ListNode(null);
     let n = result;
   
     while (l1 !== null || l2 !== null) {
       if (l1 === null) {
         n.next = l2;
         l2 = l2.next;
       } else if (l2 === null) {
         n.next = l1;
         l1 = l1.next;
       } else if (l1.val < l2.val) {
         n.next = l1;
         l1 = l1.next;
       } else {
         n.next = l2;
         l2 = l2.next;
       }
       n = n.next;
     }
   
     return result.next;
   };


let l1=[1, 2, 3]
let l2 = [1, 3, 4]

console.log(mergeTwoLists(l1, l2))

//this is unsolvable in JS on these terms.