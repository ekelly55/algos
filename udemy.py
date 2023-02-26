# num = int(input("enter the number of rows: ")) #int(input) means only accept if it's an int?

def printRow(num):
    for row in range(1, num+1):
        #remember, range is exclusive of end index. 
        print('*'*row)


# printRow(num)

# how to design a func around a user input

#reverse triangle pattern

def printRow2(num):
    for row in range(1, num+1):
        #remember, range is exclusive of end index. 
        print(' '*(num-row),'*'*row)


# printRow2(num)

#upside down


def printRow3(num):
    #the range is num to 1 (can be smaller than 1), and it increments backwards
    for row in range(num, 0, -1):
        #remember, range is exclusive of end index. 
        print('*'*row)


# printRow3(num)

#switch variable values: shortcut method (no temp var)

a = 10

b = 20

a = a+b
#a=30

b = a-b
#b=30-20=10

a = a-b
#a = 30 - 10 = 20

# print('a', a)
# print('b', b)

#swap keys and values in a dictionary

def dictSwitch():
    d = {'a': 1, 'b': 2, 'c': 3}

    print(d.keys())
    print(d.values())
    print(d.items())

    d_swap = {v:k for k,v in d.items()} #but what is this syntax? 

    alt_swap = {"*":v for k,v in d.items()}

    print(alt_swap)

        

dictSwitch()