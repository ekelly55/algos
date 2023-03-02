# stack: user defined structure. LIFO like the call stack. push onto and pop off of top

#remember with lists, can use append or concatenation

# want these methods: isempty, push, pop, peek, size, display

class Stack(object):
    #object is a placeholder, letting python know you don't want to inherit props of some other class
    def __init__(self):
        #this is a method  to initialize an instance of the constructor in python
        self.my_stack = []
    
    def is_empty(self):
        if self.my_stack == []:
            return True
        else:
            return False
    
    def push(self, value):
        B = [value]
        self.my_stack = self.my_stack + B
        #why the extra step? oh because the value has to be in list form to concat.

    def pop(self):
        if self.my_stack == []:
            raise Exception('Stack is empty')
        else: 
            popped_item = self.my_stack[-1]
            #negative indexing...starts from -1. i guess best practice to not just use existing pop()method?
            self.my_stack = self.my_stack[:-1]
            return popped_item
    
    def peek(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        else:
            top_item = self.my_stack[-1]
            return top_item
    
    def size(self):
        count = 0
        for _ in range(len(self.my_stack)):
        #use understcore if you're not going to do anything to temporary variables
            count += 1
        return count
    def display(self):
        print(self.my_stack)

s = Stack()

# s.peek()
# s.push(1)
# s.push(2)
# s.push(4)
# s.push(3)

# print(s.peek())

# s.display()

# print(s.pop())

# s.display()

# print(s.size())

#Queue structure: FIFO enqueue (push) dequeue (pop) push onto rear end, pop off of front end, just like a line


class Queue(object):

    def __init__(self):
        #this is a method  to initialize an instance of the constructor in python
        self.my_queue = []
    
    def is_empty(self):
        if self.my_queue == []:
            return True
        else:
            return False
    
    def enqueue(self, value):
        B = [value]
        self.my_queue = B + self.my_queue
        #why the extra step? oh because the value has to be in list form to concat.

    def dequeue(self):
        if self.is_empty():
            raise Exception('Queue is empty')
        else: 
            front_item = self.my_queue[-1]
            #negative indexing...starts from -1. i guess best practice to not just use existing pop()method?
            self.my_queue = self.my_queue[:-1]
            return front_item
    
    def peek(self):
        #peek is diff here. it returns the most recently enqueued item, or rear of end
        if self.is_empty():
            raise Exception('Queue is empty')
        else:
            rear_item = self.my_queue[0]
            return rear_item
        
    
    
    def size(self):
        count = 0
        for _ in range(len(self.my_queue)):
        #use understcore if you're not going to do anything to temporary variables
            count += 1
        return count
    
    def display(self):
        print(self.my_queue)

q = Queue()

# print(q.is_empty())

# q.enqueue(1)
# q.enqueue(2)
# q.enqueue(3)

# q.display()

# print(q.peek())

# q.dequeue()

# q.display()

# print(q.size())

# q.dequeue()
# q.display()
# q.dequeue()
# q.display()

# q.dequeue()
# print(q.is_empty())


# deque (diff from 'dequeue') but isn't htere a library you can import for this?

#it's a double ended queue: can add or remove from either end. all same methods, but for both ends. preferred over list when need to optimize append and pop (and don't nec. need access in between ends). time for deque append and pop are O1, rather tha ON for list append and pop. # input restricted: input limited at one end, deletion permitted on both. output restricted: add to both ends, remove from one. can use collections.deque (import collections) to turn a list into a deque. built in methds are append (right end, as usual) and appendleft (at 0 end) and pop() and popleft()

#deque collections access methods: 
    #index(ele, beg, end): returns index of first occurence of element in args, searching from beg to end
    #insert(i, a): inserts val a at index i
    #remove(a) removes first occurrence of val a
    # count(a) counts number of occurrences of val a 

#access front w/ [0] and back w/ [-1]
#len(deque) method
#extend(iterable): add mult vals to right of deque
#extendleft(iterable): same at front
#reverse()
#rotate(num): rotates deque by num indicated. if neg, rotates left

class Deque(object):
    #works  with or without object. it's convention

    def __init__(self):
        #this is a method  to initialize an instance of the constructor in python
        self.my_deque = []
    
    def is_empty(self):
        if self.my_deque == []:
            return True
        else:
            return False
    
        
    def addFront(self, value):
        B = [value]
        self.my_deque = self.my_deque + B
        #why the extra step? oh because the value has to be in list form to concat.

    def removeFront(self):
        if self.is_empty():
            raise Exception('Deque is empty')
        else: 
            front_item = self.my_deque[-1]
            #negative indexing...starts from -1. i guess best practice to not just use existing pop()method?
            self.my_deque = self.my_deque[:-1]
            return front_item
    
    
    def peekFront(self):
        if self.is_empty():
            raise Exception('deque is empty')
        else:
            top_item = self.my_deque[-1]
            return top_item
 
    def addRear(self, value):
        B = [value]
        self.my_deque = B + self.my_deque
        #why the extra step? oh because the value has to be in list form to concat.

    def removeRear(self):
        if self.is_empty():
            raise Exception('Stack is empty')
        else:
            rear_item = self.my_deque[0]
            self.my_deque = self.my_deque[1:]
            return rear_item
        
    def peekRear(self):
        #peek is diff here. it returns the most recently enqueued item, or rear of end
        if self.is_empty():
            raise Exception('Queue is empty')
        else:
            rear_item = self.my_deque[0]
            return rear_item
    
        
    def size(self):
        count = 0
        for _ in range(len(self.my_deque)):
        #use understcore if you're not going to do anything to temporary variables
            count += 1
        return count
    
    def display(self):
        print(self.my_deque)

d = Deque()




# d.addFront(1)
# d.addFront(2)
# d.addFront(3)
# d.addRear(4)
# d.addRear(5)

# d.display()

# d.removeFront()
# d.removeFront()
# d.removeFront()

# d.display()

# d.addFront(3)
# d.addFront(2)
# d.addFront(1)
# d.display()

# d.removeRear()

# d.display()

# print(d.size())

# print(d.peekFront())
# print(d.peekRear())
# print(d.is_empty())

tuple = (1, 65, "three", 2, 6)
list = [1, 65, "three", 2, 6]

string = 'there is a set'

x = set(list)

x2 = set(tuple)
#will not go in in any particular order b/c set unordered

y  = set(string.split())
#won't include duplicates, or go in in any order

z = {'dont', 'go', 'there'}


b = ()

c = {'a':1, 'b':2}

a = set(c)




# print(z.union(string))

# class constructor

class Person:
    def __init__(self, name):
        self.name = name

eamonn = Person('eamonn')

# print(eamonn.name)

dictionnary = dict.fromkeys(c, c.values())

# print(dictionnary)

values = ["a", "b", "c"]
def count(values):
    for count, value in enumerate(values, start=1):
        print(count, value)

# count(values)

from collections import deque

llist = deque(list)

llist.appendleft(0)

llist.remove(65)

# print(llist.count(0))


class LinkedList:
    def __init__(self):
        self.head = None
    
    def __repr__(self):
        node = self.head
        nodes = []
        while node is not None:
            nodes.append(node.data)
            node = node.next
        nodes.append("None")
        return "->".join(nodes)

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

    def __repr__(self):
        return self.data
    
llist2 = LinkedList()

# print(llist2)

first_node = Node('a')
llist2.head = first_node

# print(llist2)

second_node = Node("b")
third_node = Node("c")
first_node.next = second_node
second_node.next = third_node

# print(llist2)

#matrix

matrix = [[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]]

print("Matrix =", matrix)

Row = 3
Column = 4


def makeMatrix(row, column):
    # Initialize matrix
    matrix = []


    # For user input
    # A for loop for row entries
    for row in range(Row):
        a = []
        # A for loop for column entries
        for column in range(Column):
            a.append(column)
        matrix.append(a)

    # For printing the matrix
    for row in range(Row):
        for column in range(Column):
            print(matrix[row][column], end=" ")
        print()

makeMatrix(Row, Column)


matrix = [[column for column in range(4)] for row in range(4)]

print(matrix)