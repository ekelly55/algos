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

print(q.is_empty())

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

q.display()

print(q.peek())

q.dequeue()

q.display()

print(q.size())

q.dequeue()
q.display()
q.dequeue()
q.display()

q.dequeue()
print(q.is_empty())