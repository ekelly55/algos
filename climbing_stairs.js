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
    solutions = 1
    if(n===1)
        return solutions
    for(i=2; i<=n; i++){
        solutions = 2
        if(n/2 )
        
    }
    return solutions
};