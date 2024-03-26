/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */
function moveZeroes(n){
    //declare pointers
    let left = 0
    let right = n.length

    while(left < right){
        if(n[left] === 0){
            console.log(`left is ${left}, right is ${right}, n[left] is 0 `)
            let temp = n.splice(left, 1)
            console.log(`temp is ${temp}`)

            n = n.concat(temp)

            console.log(`n is ${n}`) 
        
            
            right --
        } else {
            console.log(`left is ${left}, right is ${right}, n[left] is not 0 `)

            left++
        }
    }
    console.log(n)
    return n
}

 
/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?


//categorized as a two-pointer.  search for zeroes at both ends, or just the right pointer is the place to send zeroes? when find zero, slice, then push? but why need two pointers then?
 */


n = [0,1,0,3,12]

console.log(moveZeroes(n))

// console.log(n.concat(n.splice(0, 1)))