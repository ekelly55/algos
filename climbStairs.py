# // You are climbing a staircase. It takes n steps to reach the top.

# // Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# // n is total number of stairs. 

# // Example 1:

# // Input: n = 2
# // Output: 2
# // Explanation: There are two ways to climb to the top.
# // 1. 1 step + 1 step
# // 2. 2 steps
# // Example 2:

# // Input: n = 3
# // Output: 3
# // Explanation: There are three ways to climb to the top.
# // 1. 1 step + 1 step + 1 step
# // 2. 1 step + 2 steps
# // 3. 2 steps + 1 step
 
# //order matters

# //upper limit of steps is always n, lower limit of steps is n/2
# //every output other than 1 will be at least 2

# // Constraints:

# // 1 <= n <= 45

#input: a number
#output: a number
#lets use a counter object to track and make sure we have no repeats. then, we just return a count of keys

#known examples (look for a pattern):
#1=1, 2=2, 3=3, 4=5, 5=8, 6=13 
                                #6x1, 3x2, 2-1-1-2, 2-2-1-1, 1-2-2-1, 1-1-2-2, 1-2-1-2, 2-1-2-1, 2-1-1-1-1, 1-2-1-1-1, 1-1-2-1-1, 1-1-1-2-1, 1-1-1-1-2, 
#looks like just an alteration of a fib sequence. use recursion
def stairs(num):
    #start with known edge cases:
    if num < 1:
        return 0
    if num == 1: 
        return 1
    if num == 2:
        return 2
    #return base case, that all need to have, plus whatever else
    return stairs(num-2) + stairs(num -1)

print(stairs(6))