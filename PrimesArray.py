# Given k numbers which are less than n, return the set of prime number among them
# Note: The task is to write a program to print all Prime numbers in an Interval.
# Definition: A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 



#every number will have some number of primes between 0 and num. we want to find all of them in that interval. input is a num, output is a list

#will need a helper function to iterate through every value 2-k, or actually 4-k b/c we know 2 is prime. can define that case

from math import sqrt

def isPrime(num):
    
    for i in range(2, int(sqrt(num) + 1)):
        if num%i == 0:
            return False
        
    print(f'adding {num} to list of primes')
    return True



def primeArr(n):
    #first declare output array
    
    k = n-1
    #deal w/ known cassees

    if k < 2:
        print(f'primes are < than 2. k is {k}')
        return None

    if k == 2:
        print(f'2 is prime. k is {2} so there is only 1 prime.')
        return 2

    #conditions that make a prime: iterate through up to sqr root of k, check if it's divisible by n. done in helper function

    output = [i for i in range(3,n) if isPrime(i)]
    #range is exclusive, so neeed to go past k
    
    print(output)
    return output




primeArr(3)