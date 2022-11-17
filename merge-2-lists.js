


function mergeTwoLists(list1, list2){
    console.log(list1.head)
    console.log(list2.head)

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
    let l1Node1 = list1[0]
    let l2Node1 = list2[0]
    let l1 = new LinkedList(l1node1)
    let l2 = new LinkedList(l2node1)


    let output = new LinkedList(head=null)
    let node1= new ListNode(null)
    let node2= new ListNode(null)
    while(l1.head || list2.head){
        if(list1.head<=list2.head){
            node1.value=list1.head
            node1.next=node2
            list1.head = list1.head.next
            console.log(node1)
        } else {
            node1.value=list2.head
            node1.next=node2
            list2.head = list2.head.next
            console.log(node1)
        }
        output.head=node1
    }
    console.log(output)
    return output
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

