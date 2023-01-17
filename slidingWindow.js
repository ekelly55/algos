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

let arr = [1, 1, 9, 5, -10, 2]
let n = 4

console.log(maxSubArraySum(arr, n))