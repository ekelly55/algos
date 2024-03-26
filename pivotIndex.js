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

//try two pointers



function pivotIndex(nums) {
   

    if(nums.length === 1){
        console.log(0)
        return 0
    }
    //first calculate right sum, starting at nums[1]
    let rightSum = 0
    console.log(`right sum is ${rightSum}`)

    for(i = 1; i < nums.length; i++){
        // console.log(`num is ${num}`)
        rightSum += nums[i]
        console.log(`right sum is ${rightSum}`)
    }
    
    if(rightSum === 0){
        console.log(0)
        return 0
    }
    
    //now increment from left, subtracting each num from total sum til they're equal
    //declare left pointer
    let pivot = 0
    //and left sum
    let leftSum = 0
    
    while(pivot<nums.length){
        console.log(`left sum is ${leftSum}`)
        if(leftSum === rightSum){
            console.log(`pivot found. pivot =  ${pivot}`)
            return pivot  
        } else {
            console.log(`pivot not found. increment leftSum, decrement right sum and pivot`)
            leftSum += nums[pivot]
            rightSum -= nums[pivot + 1]
            pivot++
            console.log(`leftSum = ${leftSum}, rightSum = ${rightSum}, new pivot = ${pivot}`)
            
        }
    }
    //if gets through while loop without return, no pivotindex
    console.log("no pivotIndex")
    return -1
        

    

}

nums = [-1,-1,0,1,1,0]

pivotIndex(nums)



//works for positives. failed w/ negatives. 