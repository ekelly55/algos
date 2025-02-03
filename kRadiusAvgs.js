/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let avgs = []
    let runningSum = 0
    
    let open = 0
    let close = 0
    //i will always represent the center of the window
    let i = 0
    
    while(i < nums.length){
        //always need to build the running sum, regardless of if you can find the average yet
        runningSum+=nums[close]
        //now check if you can start finding the average yet
        if(i < k || nums.length-i <= k){
            //if no full window yet, avg is -1
            avgs.push(-1)
            //increment i 
            i++
            //increment close
            close++
        } else if(close-open+1 === 2*k + 1){
            //if we have a full window, we can calculate a real average
            let avg = Math.trunc(runningSum/(2*k + 1))
            avgs.push(avg)
            console.log("i =", i, "close=", close, "open=", open, "running sum is", runningSum, "divisor is", 2*k+1, "full window. avg with i at middle is", avg, "avgs is", avgs)
            //once we have that avg, increment i
            i++
            //increment close
            close++
            //subtract nums[open] from runningSum
            runningSum-=nums[open]
            //increment open
            open++

        } else {
            //i is > k, but we don't have a full window yet
            close ++
        }
    }
    console.log("avgs is", avgs)
    return avgs
};

let nums = [7,4,3,9,1,8,5,2,6]
let k = 3

getAverages(nums, k)