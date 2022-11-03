// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// n is total number of stairs. 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
//order matters

//upper limit of steps is always n, lower limit of steps is n/2
//every output other than 1 will be at least 2

// Constraints:

// 1 <= n <= 45

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    const cache = { 0: 0, 1: 1, 2: 2 }

    if (n === 1) return 1;
    if (n === 2) return 2

    if (!cache[n]) {

//'cache[n]' helps us access the staircase we have already
//climbed. If 'n' cannot (note 1) be found in 'cache,' that means
//it is a staircase we have not climbed before. Then we will
//calculate that in the step below and store it in 'cache'.

        cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
        console.log(cache[n])

//With recursion, the calculation will continue until n is equal
//to 1 or 2. 
//For n = 3,cache[3] = climbStairs(3 - 1) + climbStairs(3 - 2)
//total possible way to climb 3 steps is subtracting total ways to
//climb 2 steps by total ways to climb 1 step; that we can already
//find in cache { 0: 0, 1: 1, 2: 2 }.

//By performing 'cache[n] = X,' we can store value 'X' in the map
//with corresponding key of n. The update cache will be
//{ 0: 0, 1: 1, 2: 2, n: x }. And if we need to know how many
//distinct way we can climb a staircase with n step in the future
//calculation; we can use 'cache[n]' to get to the value 'x.'

    }
    return cache[n];

//Find the value in 'cache' with a key of n

}
climbStairs(5)