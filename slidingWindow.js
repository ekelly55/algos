//ex longest sequence of unique char

//"hellothere"

//or max subarray sum. calculates max sum of n consecutive elements

//isn't this hust two jpointers? opening window index and closing window index?

function maxSubArraySum(arr, num){
    // //if we define right in terms of left, we can't iterate right beyond its limit
    // let right = num - 1
    // console.log(`starting right index is ${right}`)
    // let left = right - num +1
    // console.log(`starting left index is ${left}`)
    // let sum = 0
    // let temp = 0
    // if(num > arr.length ===0 ){
    //     return null
    // }
    // for(i = left; i<=right; i++){
    //     sum += arr[i]
    //     temp = sum
    //     console.log(`current max sum is ${sum}`)
    //     console.log(`current temp is ${temp}`)
    // }
    // //fine up to here
    // //as long as right is less than the total length, it will do this
    // while(right < arr.length){
    //     console.log(`current temp is ${temp}`)
    //     temp -= arr[left]
    //     right ++
    //     temp += arr[right]
    //     console.log(`new temp is ${temp}`)
    //     if(temp >= sum){
    //         sum = temp
    //         console.log(`new max sum is ${sum}`)
    //     }
    // }
    //     console.log(`max sum is ${sum}`)
    //     return sum  
    
    //optimized version
    let sum = 0
    let temp = 0
    //starts same: conditional, then build initial sum
    if(arr.length<num) return null;
    for(i = 0; i<num; i++){
        sum +=arr[i]
    }
    //set the temp to the current sum before you start checking other sums
    temp = sum
    //now another loop that only loops n times
    for(let i = num; i<arr.length; i++){
        //shift the new temp sum addends forward by 1 index
        temp = temp - arr[i-num] + arr[i];
        //set sum to whichever of the two is bigger
        sum = Math.max(sum, temp)

    }
    return sum
}

let arr = [0, 1, -8, 15, -10, 12]
let n = 1

//console.log(maxSubArraySum(arr, n))


//takes an arr of posi int and a posi int target. 
//return the minimum length of a contiguous subarray in which the subarray sum is >=target. if none, return zero, because there is no length that will satisfy it. 
function minSubArrayLen(arr, n){

    
    
    //now declare our window pointer indexes and starting sum
    let start = 0
    console.log(`start index is ${start}`)
    let end = 1
    console.log(`end index is ${end}`)
    let subLength
    let sum = arr[start] + arr[end]
    console.log(`sum is ${sum}`)
    //need a temp sum to store current best while we look for other
    let maxSum = 0
    //delcare a temp sub array length to compare
    let minSubLen = arr.length

    //  checking if n exists in at start or end indexes
    
    console.log("checking if target is at either index")
    if(arr[start] >= n || arr[end] >= n){
        return 1
    } else {
        console.log("target not at start or end index. start looping through")
    }
    //now do a while loop, expanding and shifting the window as necessary,
    while(0 <= start < end < arr.length){
        //add until sum >= n
        if(sum < n){
            console.log(`sum is smaller than n, extend the window`)
            end++
            console.log(`new end index is ${end}. checking if arr at end hits target`)
            if(arr[end] >= n){
                console.log("target met. minimum sub length is 1")
                return 1
            } 
            console.log("new end point doesn't hit target. increase the sum")
            sum += arr[end]
            //make maxSum the higher of the two
            maxSum = Math.max(sum, maxSum)
            console.log(` new sum is ${sum}`)
    
        } else {

            
            
            //make maxSum the higher of the two
            maxSum = Math.max(sum, maxSum)
            console.log(` maxSum is is ${maxSum}`)
            //now calculate subLength
            subLength = end-start+1
            //now make minSubLen the shorter of the two
            minSubLen = Math.min(subLength, minSubLen)
            console.log(` min sub string length is ${minSubLen}`)
        }
            //now see if you can shorten the window
            //remove the current val at start index from the sum and set maxSum to the greater of the two
            sum -= arr[start]
            maxSum = Math.max(sum, maxSum)
            //then increment the start
            start ++
            console.log(` incrementing start to check for better sub string length. new start index  is ${start}. current end index is ${end}. new sum is ${sum}`)
            //make maxSum the higher of the two
        }

//we know we're gonna return the diff between the pointers
    console.log(`the min length is ${minSubLen}`)
    return minSubLen
}

minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
