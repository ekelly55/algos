# Import required module
import time


# define function to implement for loop
def for_loop(n):
	result = []
	for i in range(n):
		result.append(i**2)
	return result


# define function to implement list comprehension
def list_comprehension(n):
	return [i**2 for i in range(n)]


# Driver Code

# Calculate time taken by for_loop()
begin = time.time()
# for_loop(10**6)
end = time.time()

# Display time taken by for_loop()
#('Time taken for_loop:', round(end-begin, 5))

# Calculate time takens by list_comprehension()
begin = time.time()
# list_comprehension(10**6)
end = time.time()

# Display time taken by for_loop()
#('Time taken for list_comprehension:', round(end-begin, 5))

#Every comprehension of the list can be rewritten in for loop, but in the context of list interpretation, every for loop can not be rewritten. WHAT DOES THIS MEAN?

squares = [i**2 for i in range(11)]

# print(squares)

evenSquares = [i**2 for i in range(11) if i**2 % 2 == 0 ]

# print(evenSquares)


factors = [i for i in range(100) if i % 3 == 0 if i % 5 == 0 ]

# print(factors)

#make a list with map() objects. map uses functional programming, so not something I know. maybe study what's happenung under the hood?
#looks like it's basically the same as arr.map() in js, but js outputs an arr. can use list() to turn that object into a list. but hwo to see the map object? what us the format? 


txns = [1.09, 23.56, 57.84, 4.56, 6.78]
TAX_RATE = .08
def get_price_with_tax(txn):
    return txn * (1 + TAX_RATE)
final_prices = map(get_price_with_tax, txns)

final_prices = list(final_prices)
print(final_prices)


# same w/ list comp

final_prices = [get_price_with_tax(i) for i in txns]
#now we don't need an additional step of turning the obj into a list:
# final_prices = list(final_prices)
print(final_prices)


#list comps are more "pythonic" than loop or map(). python likes single tools that can be adapted for many situations. the expression being very flexible makes list comp fit that description

#also more declarative than loops. easier to read and understand, another hallmark of python. list comp focuses on WHAT the output should be, rather than the HOW of it being made, like a loop does.

#conditionals: most common to add to end. basically easily to read as "make a new list and do this for each thing in the old list if it meets this req"

sentence= "the rocket came back from mars"

vowels = [i for i in sentence if i in 'aeiou']

print(vowels)

#or create a more complex function to filter the iterable and pass it as the expresssion for each i

sentence2 = 'The rocket, who was named Ted, came back \ from Mars because he missed his friends.'

def is_consonant(letter):
	vowels = 'aeiou'
	return letter.isalpha() and letter.lower() not in vowels

consonants = [i for i in sentence2 if is_consonant(i)]

print(consonants)

#helpful string methods: isalpha() check if any string is made up entirely of letters, UPPER OR LOWER   
# str() turn num into string, int() and str into num
#str[:-1] slice off last letter, keep rest of string
#str[::-1] reverse the string
#str[len(str)-1: len(str)] slice off all but last char

#if want to change a value conditionally, place the conditional at the beginning of yr expression. saves time. won't execute function if i doesn't fit condition
#NEED IF ELSE HERE?

original_prices = [1.25, -9.45, 10.22, 3.78, -5.92, 1.16]

#'make a new list of prices with each price being the original price if it not negative, or set negative prices to zero'
prices = [i if i>0 else 0 for i in original_prices]

#look into set and dictionary comprehensions later

#what is walrus operator? 

#DONT USE LIST COMP

#watch out for nested comps: that's gonna be n^2. just don't nest when you don't have to. 

#BUT nested lists are a common way to create matrices, used for math

#list comp loads entire output into memory. fine for small and medium sized lists, but large will mess up comp. 

#if it's a large list, use a generator instead. a generator returns an iterable, lazy eval= only eval when needed. not stored first in mem. do all generators use lazy eval?

#how to choose (in general): if performance matters (will on interview), then see what's fastest/best for mem. if not, then go with whatever yeilds cleanest code

#can use timeit library to see which is best import it, then call timeit.timeit(func, number=whatever) run it for whatever number of iterations you tell it to. 

import random
import timeit
TAX_RATE = .08
txns = [random.randrange(100) for _ in range(100000)]
def get_price(txn):
    return txn * (1 + TAX_RATE)

def get_prices_with_map():
    return list(map(get_price, txns))

def get_prices_with_comprehension():
    return [get_price(txn) for txn in txns]

def get_prices_with_loop():
    prices = []
    for txn in txns:
        prices.append(get_price(txn))
    return prices

print(timeit.timeit(get_prices_with_map, number=100))

print(timeit.timeit(get_prices_with_comprehension, number=100))

print(timeit.timeit(get_prices_with_loop, number=100))