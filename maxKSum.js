/**
 * You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [1,2,3,4], k = 5
sortedArr: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
 */


//it's a two pointer. it will have to utilize splice. only way to do it is to sort first. try a merge sort for speed

//start pointers at ends, check if they add up to k. if not, increment: if both greater than k, increment both. if just one, increment that one. if neither case, increment two (keep a standard approach). don't use left and riht b/c they will need to pass each other
var maxOperations = function(nums, k) {
    //first, merge sort

    //declare merge function
    const merge = (arr1, arr2) => {
        let i = 0
        let j = 0
        let output = []

        while(i < arr1.length && j < arr2.length){
            console.log(`comparing arr1[j] = ${arr1[i]} and arr2[j]= ${arr2[j]}`)
        if(arr1[i] > arr2[j]){
            output.push(arr2[j])
            j++
        } else {
            output.push(arr1[i])
            i++
        }
        console.log(`output is ${output}`)
        }
        while(i < arr1.length){
            output.push(arr1[i])
            i++
            //couldn't we just use slice to push the remainder of the array at once? would it be basically the same since slice has to iterate anyway?
        }
        while(j < arr2.length){
            output.push(arr2[j])
            j++
        }
        console.log(`output is ${output}`)
        return output
    }


    //now declare mergeSort

    const mergeSort = (arr) => {
        if(arr.length <= 1){
            return arr
        } 
        //if it's not o or 1 elem, keep running recursively til it is
        let mid = Math.floor(arr.length/2)
        //left side...here's where we do recursion
        let left = mergeSort(arr.slice(0, mid))
    // right side...default is end of array. and recursion again
        let right = mergeSort(arr.slice(mid))
        //this will merge sort whole left side recursively, then whole right side recursively, then finally combine them
        //at the end, we merge the left and right (that can't be done for full array until it's done with all the smaller ones)
        return merge(left, right)
    }

    let sortedArr = mergeSort(nums)

    console.log(sortedArr)
   

    //now use arr output in two pointer

    //declare pointers
    let one = 0
    let two = 1

   
    //declare operation count
    let operations = 0
    
    
    //while loop
    while(two < sortedArr.length && one < two){
        //declare sum
        let sum = sortedArr[one] + sortedArr[two]

        console.log(`initiating loop. sortedArr is ${sortedArr}, operations is ${operations}, one is ${one}, two is ${two}, sum is ${sum}`)
        //first, check if there's a cut off  point
        if(sortedArr[one] >= k){
            console.log(`rest of arr is greater than or equal to k. operations is ${operations}. finished`)
            return operations
        }

        //next, check if they're a sum
        if(sum === k){
            operations++
            console.log(`match found new sortedArr is ${sortedArr}. opoerations is ${operations}. splicing out values`)
            sortedArr.splice(two, 1)
            sortedArr.splice(one, 1)
            //here we can run into a problem that one (or both?) may end up outside of arr
            console.log(`new sortedArr is ${sortedArr}, one is ${one}, two is ${two}`)
        } else {

            //if not, we've already checked sortedArr one check if sortedArr 2 is >=k, or if the sum is > k
            if(sortedArr[two] >= k || sum > k){
                console.log(`rest of arr is greater than or equal to k. operations is ${operations}. finished`)
            }
            //from here on, the only option is that the sum is < k. move the lower value if possible. be aware of length of the array
            if(two === one + 1 && two < sortedArr.length - 1){
                two++
                console.log(`incrementing two. two = ${two}`)
            } else if(one < two - 1) {
                one ++
                console.log(`incrementing one. one = ${one}`)
            }
        }
        
    }
  
    console.log(`finished. number of ops is ${operations}`)
    return operations

    
};

nums = [1,2,3,4], k = 5

maxOperations(nums, k)