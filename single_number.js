/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 Bubble Sort: O(1)
Selection Sort: O(1)
Insertion Sort: O(1)

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]≈
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104




*/


/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [2,2,1]
 var singleNumber = function(nums) {

     counts = {
         
    }
    
    for(i=0; i < nums.length; i++){
        if (nums[i] in counts){
            counts[nums[i]] += 1
        } else {
            //console.log(nums[i])
            counts[nums[i]] = 1


        }
    }
    return Object.keys(counts).find(key => counts[key] === 1)
};

singleNumber(nums)