from collections import deque




def ReverseList(head):  

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

        
        def __repr__(self):
            node = self.head
            nodes = []
            while node is not None:
                nodes.append(node.data)
                node = node.next
            nodes.append("None")
            return "->".join(nodes)
    


head = [1, 2, 3, 4, 5]
print(ReverseList(head))