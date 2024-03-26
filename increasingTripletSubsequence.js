/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1


this is a 3-pointer
start them at 0, 1, 2 or 0, somewhere in middle, end?

pointers are left, middle, right
while left < middle and middle < right...

can't sort b/c need to preserve original indexes
start from what is known: the indexes are ordered. 
range of possible left indexes: 0 to nums.length - 3
range of possible middle: 1 to nums. length - 2
range of possible right: 2 to nums.length -1 

i think start at 0, 1, and end. increment middle til satisfies condition, then decrement right til satisfies. then readjust as necessary
 */

var increasingTriplet = function(nums) {

    //from leetcode solution
    //this needs to be high so that it will immediately set the first iteration as left 
    let left = Infinity //didn't know you could use infinity in js
    //this is middle and not right, b/c we want right to be as high as possible within range, so there's no way to do that comparing it to infinity But we do want M to be bound by an upper limit, so we can use less than here.
    let middle = Infinity

    //iterate through considering all options as potential right pointers. since we're iterating through from first to last, the indexes are in order. left and middle don't have an assigned index, only a value
    for(right of nums){
        if(right < left){
            //will definitely establish left as nums[0], then only move if there's a lower value
            left = right
        } else if(right < middle && right > left){
            //if right < M, which is defitely true on second iteration, and will only run after first iteration, condition that you assign middle to right. this is where we change middle to less than infinity, on the second iteration IF right > left
            
                //we don't want m to be infinity, we want to bring it down. so at first this will be true. will only run if right is greater than left
                middle = right
        //now condition that right is already greater than middle and left. but where do we compare the left and middle? This can't run until BOTH previous conditionals have run. 
        } else if(right > middle && right > left){
            console.log(true)
            return true
        }
        //will iterate through. may not meet any of these conditions
        }
        //at end of loop, if never returns true, then it's false
        console.log(false)
        return false
    }






    //declare pointers
    // let left = 0
    // let middle = 1
    // let right = nums.length -1

    // //if L and R are in order, search for a suitable M. while searching, set L and R to better values if applicable

    
    // while(left < middle && right > middle){
    //     console.log(`left index is ${left}, middle index is ${middle}, right index is ${right}`)
    //     //first, check if it's already on a true triplet
    //     if(nums[left] < nums[middle] && nums[middle] < nums[right]){
    //             console.log(`m value ${nums[middle]} greater than l value ${nums[left]}. and less than R value ${nums[right]}`)
    //             console.log(true)
    //             return true
    //         } 
    //     //now, if neither is true, we have to iterate. 
    //     middle ++
    //     console.log(`middle is ${middle}`)
    //     if(nums[middle] < nums[left]){
    //         left = middle
    //         console.log(`left is ${left}`)
    //     }
    //     if(nums[middle] > nums[right]){
    //         right = middle
    //         console.log(`right is ${right}`)
    //     }
    //     //repeat loop
    // } 
    
     
        
    
    // //if gets through whole while loop and doesn't return true, return false
    // console.log(false)
    // return false


nums = [2,1,5,0,4,6]
increasingTriplet(nums)