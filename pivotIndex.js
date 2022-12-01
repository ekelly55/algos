// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

 

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

function pivotIndex(nums){
    let lSum = 0
    let lIndex = 0
    let rSum = 0
    let rIndex = 0
    const leftSum = (nums) => {
        if(nums[lIndex-1]){
            lSum += nums[lIndex-1]
            console.log(`lSum = ${lSum}`)
            
            lIndex-=1
            console.log(`lIndex = ${lIndex}`)
            return leftSum(nums)
        } else {
            console.log(`lIndex = ${lIndex}`)
            console.log(`lSum = ${lSum}`)
        }
    }
    const rightSum = (nums) => {
        if(nums[rIndex+1]){
            rSum += nums[rIndex+1]
            console.log(`rSum = ${rSum}`)
            
            rIndex+=1
            console.log(`rIndex = ${rIndex}`)
            
            
            return rightSum(nums)
        } else {
            console.log(`rIndex = ${rIndex}`)
            console.log(`rSum = ${rSum}`)
        }
    }
    for(i=0; i<nums.length; i++) {

        console.log(`i = ${i}`)
        leftSum(nums)
        rightSum(nums)
        if(lSum === rSum){
            console.log(`the pivot index is = ${i}`)   
            return i
        } else {

            lIndex +=1
            rIndex +=1
        }
    }

}

let nums = [1,7,3,6,5,6]

pivotIndex(nums)


