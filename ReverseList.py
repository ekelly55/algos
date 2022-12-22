from collections import deque




def ReverseList(head):  
    print(type(head))
    list = deque(head)
    print(list)
    
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None

        def __repr__(self, data):
            return self.data

    class LinkedList:
        def __init__(self, nodes=None):
            self.head = None
            if nodes is not None:
                node = Node(data=nodes.pop(0))
                self.head = node
                for elem in nodes:
                    node.next = Node(data=elem)
                    node = node.next
        def add_first(self, node):
            node.next = self.head
            self.head = node
        def __repr__(self):
            node = self.head
            nodes = []
            while node is not None:
                nodes.append(node.data)
                node = node.next
                nodes.append("None")
            return ",".join(str(node) for node in nodes)
      
    OutPutList = LinkedList()

    while len(list) != 0:
      
        print(list)
        OutPutNode = Node(list.popleft())
        OutPutList.add_first(OutPutNode)
        

    print(OutPutList)
    return OutPutList

head = [1, 2, 3, 4, 5]
ReverseList(head)

# leetcode says head not iterable (constructing deque), but they give it to you as an iterable list