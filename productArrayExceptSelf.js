/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 */


//basic way: first loop, get total product, then iterate through second loop and calculate the product/nums i, then add to answer array

var productExceptSelf = function(nums) {

//pointer approach with running prefix product on each side


//prefix array from left
const prefix = []

//iterate to build prefix array - this will give us the partial product to the left of each index.

for(i=0; i<nums.length; i++){
    if(i === 0) {
        prefix[i] = 1
    } else {
        prefix[i] = nums[i-1]*prefix[i-1]
    }
}
//nums = [1, 2, 3, 4]
//prefix = [1, 1, 2, 6]

//now suffix array from right. This will give us the partial product to the right of each index
const suffix = []

for(i = nums.length -1; i>=0; i--){
    if(i === nums.length -1){
        suffix[i] = 1
    } else {
        suffix[i] = nums[i+1] * suffix[i + 1]
    }
}
  //nums = [1, 2, 3, 4]
//suffix = [24, 12, 4, 1]  

//now iterate through one more time and multiply the prefix and suffix values
let answer = []
for(i = 0; i < nums.length; i++){
    answer[i] = prefix[i] * suffix[i]
}

console.log(prefix)
console.log(suffix)
return answer
}
let nums = [2, -5, 1, -6]

console.log(productExceptSelf(nums))