/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
//  You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


function mergeTwoLists(list1, list2){



    console.log(list1)
    console.log(list2)

    class LinkedList {
        constructor(head){
            this.head = null
            this.tail = null
            this.length = 0
        }
        push(val){
            let newNode = new ListNode(val)
            if(!this.head){
                this.head = newNode
                this.tail = this.head
            } else {
                this.tail.next = newNode
                this.tail = newNode
            }
            this.length ++
            return this
        }
        pop(){
            if(!this.head) return undefined
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail
            this.tail.next = null;
            this.length --;
            if(this.length === 0){
                this.head = null;
                this.tail = null;
            }
            return current
        }
    }
    class ListNode {
        constructor(val) {
            this.val=val,
            this.next=null
        }
    }

    let output = new LinkedList(null)
    let i = 0
    if(list1.length && list2.length){

        while(i <= list1.length || i <= list2.length){
            console.log(`list1 length is ${list1.length}, list2 length is ${list2.length}`)
            console.log(`loop number ${i+1}`)
            if(list1[i] <= list2[i]){
                output.push(list1[i])
                output.push(list2[i])
            } else if(list1[i]>list2[i]){
                output.push(list2[i])
                output.push(list1[i])
            }
            ++i
        }
    } else if(list1.length && !list2.length){
        while(i <= list1.length){
            console.log(`list1 length is ${list1.length}`)
            console.log(`loop number ${i+1}`)
          
            output.push(list1[i])
            ++i
        }
    } else if(list2.length && !list1.length){
        while(i <= list2.length){

            output.push(list2[i])
            ++i
        }
    }
    console.log(output.head)
    return output.head
      
}

mergeTwoLists([], [])
