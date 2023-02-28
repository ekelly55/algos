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

        

# dictSwitch()

def revString(str):
    rev = ""
    for char in str:
        rev = char + rev
    # or
    print(str[:: -1])
    
    print(rev)

# revString("python")


import random

def coinToss():
    toss = random.randint(0, 1)
    #choose a random integer between starting and ending point
    if toss == 0:
        print


#recursive factorial

def factorial(num):
    if num == 0:
        return 1
    else:
        return num*factorial(num-1)

# print(factorial(5))


def calculator():
    #to have this run until user says stop:
    while True:
        quit = input('press y to quit and n to continue').lower()
        if quit == 'y':
            print('thanks for using my calculator')
            break
        num1 = float(input("enter first number: "))
        num2 = float(input("enter second number: "))
        op = (input("enter operator: "))
        if op == "+":
            print(num1 + num2)
        elif op == "-":
            print(num1-num2)
        elif op == "x":
            print(num1*num2)
        elif op == "/":
            print(num1/num2)
        else:
            print('invalid operator')

# calculator()

# armstrong num is each digit to the power of the length of the number, added up, equals the number
#first off, need to deconstruct nums into long form. to string, slice, to int?
def armstrongNum(num):
    #declare total var
    total = 0
    #convert num to string
    numStr = str(num)
    #declare power var
    p = len(numStr)

    #loop to deconstruct num
    for digit in numStr:
        #slice off end no need to slice if not worrying about place value
        print(digit)
        total += int(digit)**p
        print(total)


        

    if total == int(num):
        print(True)
        return True
    else:
        print(False)
        return False

# armstrongNum(0)

#count vowels instance is in str

def countVowels(str):
    vowels = 'aeiou'
    # for letter in vowels:
    #     counter[letter] = 0
    # better way without loop
    # counter = {}.fromkeys(vowels, 0)
    #this initializes the counter with keys taken from iterating through string, each w/ 0 as initial val. study this method. without the zero, it would initialize values as 'none' making it imposible to inrement the count. 

    #or can use a dictionary comprehension. will make it AND not allow dupes...can it do it all in one? need a helper func if trying to do it all at once. no, b/c have to call counter dict while constructing the counter dict. 



    vowel_counter = {i:0  for i in vowels}
  
    for char in str: 
        if char in vowel_counter:
            vowel_counter[char] += 1
    print(vowel_counter)
    #if don't want to print in dict form:
    for k, v in vowel_counter.items(): 
        print(k, '=', v)

countVowels('ice cream')