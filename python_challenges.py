import math

'''
******************************************************************************
Write a function reverse_string(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:
reverseString('Go-to-the-store') => 'store-the-to-Go'
reverseString('Jump-jump-for-joy') => 'joy-for-jump-Jump,'
******************************************************************************
'''

string = "this-is-python"

def reverse_string(string):
        print(string[::-1])

# reverse_string(string)


def is_prime(num):
    if num < 2:
        return False
    if num == 2:
        return True
    for i in range(2, num):
        if num%i != 0:
            return True
        else:
            return False


# print(is_prime(29))

'''
******************************************************************************
Write a function intersect(list1, list2) that takes in two lists and returns a
new list containing the elements common to both list1 and list2.

Hint: use index()

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/
'''

#need to iterate through one and chekck each index of the other for the value. for loop w/ index

def intersect(list1, list2):
    new_list = []
    for i in range(0, len(list2)):
        if list2[i] in list1:
                new_list.append(list2[i])
    return new_list


#print(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']))

'''
-----------------------------------------------------------------

Prompt:

- Write a function named merge_dictionaries that accepts at least two dictionaries as arguments, merges the properties of the second through n dictionaries into the first object, then finally returns the first dictionary.
- If any dictionaries have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

merge_dictionaries({}, {'a': 1});  //=> {'a': 1} (same object as first arg)
merge_dictionaries({'a': 1, 'b': 2, 'c': 3}, {'d': 4});  //=> {'a': 1, 'b': 2, 'c': 3, 'd': 4}
merge_dictionaries({'a': 1, 'b': 2, 'c': 3}, {'d': 4}, {'b': 22, 'd': 44});  //=> {'a': 1, 'b': 22, 'c': 3, 'd': 44}
-----------------------------------------------------------------
'''

def merge_dictionaries(dictionary1, *dictionaries):
    for dictionary in dictionaries:
         for key, val in dictionary.items():
            if key in dictionary1:
                dictionary1[key] = val
            else:
                dictionary1[key] = val
    return dictionary1

# print(merge_dictionaries({'a': 1, 'b': 2, 'c': 3}, {'d': 4}, {'b': 22, 'd': 44}))

'''
-----------------------------------------------------------------


Prompt:

- Write a function named prime_factors that accepts a whole number greater than one (1) as an argument and returns an list of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty list.

Examples:

prime_factors(2) //=> [2]
prime_factors(3) //=> [3]
prime_factors(4) //=> [2, 2]
prime_factors(18) //=> [2, 3, 3]
prime_factors(29) //=> [29]
prime_factors(105) //=> [3, 5, 7]
prime_factors(200) //=> [2, 2, 2, 5, 5]


1st: check prime function
2nd: find factors function
3rd, combine
-----------------------------------------------------------------
'''

# function factor(num) {
#     let factors = []
#     for(i=0; i <= num; i++){
#         if(num%i === 0){
#             factors.push(i)
#         }
#     }
#     return factors
# }

def factor(num):
    factors = []
    for i in range(1, num):
        if(num%i == 0):
            factors.append(i)
    return factors

#print(factor(24))    

def prime_factors(num):
    answer_array = []
    if is_prime(num):
        answer_array.append(num)
    for i in range(2, num):
        if num == 2:
            answer_array.append(num)
        elif num%i == 0:
            answer_array.append(num)
    else:
        return "none"
    return answer_array

# print(prime_factors(100))

# create a phone number: take in 10 int and return a string of nums in the form of a phone num

def create_num(arr):
    phone_num = []
    for num in arr:
        new_num = str(num)
        phone_num.append(new_num)
    new_phone_num = "".join(phone_num)
    area = new_phone_num[0:3]
    prefix = new_phone_num[4:6]
    suffix = new_phone_num[7:10]
    
    return f"({area}) {prefix}-{suffix}"

   
#print(create_num([5, 5, 5, 8, 6, 7, 5, 3, 0, 9]))

# rgb(255, 255, 255)
# #  // returns FFFFFF
# rgb(255, 255, 300)
# #  // returns FFFFFF
# rgb(0,0,0)
# #  // returns 000000
# rgb(148, 0, 211)
# #  // returns 9400D3

#take the rgb value, divide it into two nums...
# math formula: R/16 = x + y/16 etc. 
# then nums above 9 get converted to letters


def conversion(nn):
    convert = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'}
    if nn < 10:
        return nn
    else:
        if nn in convert:
            return convert[nn]

def rgb_to_hex(num1, num2, num3):
    nums = [num1, num2, num3]
    hex = []
    for num in nums:
        if num > 255:
            return "not an rgb value"
        else:
            digit_1 = conversion(num//16)
            digit_2 = conversion(num%16)
            hex.append(f"{digit_1}{digit_2}") 
    return "".join(hex)  



#print(rgb_to_hex(235, 30, 0))

# monkey problem:

# monkeyh is jumping ona staircase: 
#     each stair numbered, starting at 1
#     can jump any number of step[s up or down, but can't leave stairs]
#     array of jumps, pos or neg int
#     given an array of jumps.
#     what's the lowest startinngStair so that the monkey can remain on stairs. stair number remains >=1

# need to monitor current stair, starting stair, and delta


jumps = [1, 5, -3, 2, -9]

#average change from starting cannot fall below 1. if starting = x, each change can be represent

def monkey_jump(arr):
    starting = 0
    delta = 0
    for jump in jumps:
        delta += jump  
        if delta < starting:
            starting = delta
    return 1- starting #this is confusing. change variable names?