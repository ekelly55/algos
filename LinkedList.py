# elements are called nodes, each node has two fields: data and next
# first node called head. it's the startin gpoint for iterating thru list. last node has next pointintg to none 

# linked lists can be used for queues or stacks: FIFO and LIFO, respectively. in queue, new elements go on the rear. elements are removed from front

#in a regular list, inserting into anywhere but the end of the list has greater time complexity...the further back in the list, the more time, because yuou have to insert and move elements. 

# in linked lists, you only insert or delete from beginning or end, so it's faaster for a queue but same for a stack. but what is the time complexity of popp with a list? because if you're making a queue out of a list, shoudln't it be the same?

from collections import deque

llist = deque('abcde')
llist

llist.append('f')
print(llist)

llist.pop()
print(llist)

llist.appendleft('z')
print(llist)

llist.popleft()
print(llist)
