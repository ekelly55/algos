var longestSubarray = function(nums) {
    //givens: you must delete one element, so max return is nums.length-1
    //track the deleted element
    //keep a current ones count and a maxOnes count
    let close = 0
    let deletedIndex = 0
    let currentOnes = 0
    let maxOnes = 0

    while(close<nums.length){
        //now start checking close and expanding the window
        if(nums[close] === 1){
            currentOnes++
            maxOnes = Math.max(currentOnes, maxOnes)
            console.log("close is", close, "nums[close] is 1. currentOnes is", currentOnes, "maxOnes is", maxOnes)
            close++
        } else {
            currentOnes = Math.max((close - deletedIndex -1), 0)
            deletedIndex = close
            console.log("close is", close, "nums[close] is 0. currentOnes is", currentOnes, "maxOnes is", maxOnes, "deletedIdx is", deletedIndex)
            close++
        }
    }
    console.log(maxOnes)
    return maxOnes
};

let nums = [0,1,1,1,0,1,1,0,1]
longestSubarray(nums)