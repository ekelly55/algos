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

# countVowels('ice cream')

#find max and min val in dict and return key

d={'a': 10, 'b':2, 'c': -1, 'd': 5, 'e': -7}
# print(d.items())

#using a class based approach...why? look into classes. it just seems like excess code. 

class MaxMinFind():
    
    def min_val_find(self, d):
        min_val = list(d.values())[0]
        min_key = list(d.keys())[0]
        #just initialilzing it. will not nec be index 0

        for k, v in d.items():
            if v < min_val:
                min_val = v
                min_key = k
        
        print( f'key = {min_key} value = {min_val}')

    def max_val_find(self, d):
        max_val = list(d.values())[0]
        max_key = list(d.keys())[0]
        #just initialilzing it. will not nec be index 0

        for k,v in d.items():
            if v > max_val:
                max_val = v
                max_k = k
        
        print(f'key = {max_key}, value = {max_val}')

mmf  = MaxMinFind()

# mmf.min_val_find(d)

# mmf.max_val_find(d)

#extract integer numbers from string

def intFromStr(string):

    #declare holder for ints
    ints = []
    current_index = 0 #in ints

    start = 0 #in string
    end = 1 #in string
    
    #iterate and check if characters are numbers
    
    # for char in string: 
    #     if char.isnumeric():
    #         # if it's a number, then append it to the existing num in the array
    #         ints[current_index] = ints[current_index] + char
    #         print(ints)
    #     else:
    #         #if it's not, then increment index if current index not blank
    #         if not ints[current_index] == "":
    #             current_index += 1
    #             print(current_index)
    #             #and set new index to empty string
    #             ints.append("")
    #             print(ints)
    #             #but doesn't account for decimals and leaves an emtpy index at the end. also, shouldn't it return actuall integers? 

    #another method using two pointers
    while end < len(string):
        if string[start].isnumeric():
            #how do we get it to skip this on the next iteration?
            ints[current_index] = ints[current_index] + string[start]
            print(ints)
            if string[end].isnumeric():
                ints[current_index] = ints[current_index] + string[end]
                print(ints)
                end += 1
            else: 
                #if end isn't numeric, then this int is done, prepare a new index (with blanks string) and iterate start and end
                current_index += 1
                ints.append("")
                start += 1
                end += 1
                print(ints)


    
        else:
            #prepare a new index, start and end
            current_index += 1
            ints.append("")
            start += 1
            end += 1
            print(ints)

    print(ints)

        #so dumb. the problem should be extract numerals, not integers.

s = "ax-24b8az/4.3/3fflke"

def extract_nums(string):

    ints = []

    for char in string:
        if char.isnumeric():
            num = int(char)
            ints.append(char)

    return ints        

print(extract_nums(s))

