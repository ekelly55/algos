// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//takes two parameters: sorted arr, target num for avg

//use two pointer method: one at each end and come together based on the avg. value

//at most you have to iterate through the arr entirely. 

//we'll have 3 variables to keep track of, regardless of the size of the input array, so that's O1 space complexity

function avgPair(arr, num){
    //first declare pointers
    let left = 0
    let right = arr.length -1
   

    //now we start checking against the array values in a while loop
    while(left <= right){

        //check if the avg is less than the target num
        if((arr[left]+arr[right])/2 < num){
            console.log("the average of left and right is less than the target. increase left value and try again")
            //if it is, then we need to increment left to get closer
            left++
        } else if((arr[left]+arr[right])/2 > num){
        //if it's more, then we need to decrement right to get closer
        console.log("the average of left and right is more than the target. decrease right value and try again")
    
            right --
        } else {
            //if neither true, then the avg is the num, return true
            console.log(true)
            return true
        }
        //if it makes it through the whole arr without a match
    }
        console.log(false)
        return false
}
    
avgPair([1,3,3,5,6,7,10,12,19],8)