// Leet Code 1431
//There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

//bubble sort followed by standard for loop to change to true or false is faster than the 2 independent for loops submitted to Leet Code.

//fastest would be a merge sort, then a possible divide and conquer where you check the middle value against the known greatest value. 

candies = [2, 3, 5, 1, 5]

extraCandies = 3



const start = performance.now();
mostCandies(candies, extraCandies)

function mostCandies(candies, extraCandies){
    //make output array, make var greatest. make var least. iterate through  input array, add the int. at each step, if it's greater than the int, update the greatest and least if necessary. if least + int < greatest, push false into output array at ith index. else, push true
    
    //declare output array. need to preserve order of original input arr
    // let sortingCandies = [...candies]

//     console.log(`candies is ${candies}. sortingCandies is ${sortingCandies}`)
//     let temp
    
   
    
//    for(i = sortingCandies.length -1; i >= 0; i--){
//         let noSwaps = true
//         for(j=0; j< i; j++){

//             if(sortingCandies[j]>sortingCandies[j+1]){
//                 console.log(`${sortingCandies[j]} is greater than ${sortingCandies[j+1]}. swapping ${null}`)
//                 temp = sortingCandies[j]
//                 sortingCandies[j] = sortingCandies [j+1]
//                 sortingCandies[j+1] = temp
//                 noSwaps = false
//             }
//         }
//         console.log(`sorted candies is ${sortingCandies} ${null} ${null}`)
//         if(noSwaps)
//         break
        
        
//    }
//Math.max is On. bubble sort (above) is Onlogn. this is faster
    let maxCandies = Math.max(candies)

    console.log(`candies is ${candies}`)
    for(k = 0; k<candies.length; k++){
        if(candies[k] + extraCandies < maxCandies[maxCandies.length -1]){
            console.log(`sorted array at end is ${maxCandies[maxCandies.length -1]}`)
            console.log(`${candies[k]} is less than ${maxCandies[maxCandies.length -1]}. setting to false`)

            candies[k] = false
        } else {
            candies[k] = true
        }
    }
    
    console.log(` candies is ${candies}`)
    return candies
    
}
const end = performance.now();

const runtime = end - start;

console.log(`Runtime: ${runtime} milliseconds`);













// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false] 
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
 

// Constraints:

// n == candies.length
// 2 <= n <= 100
// 1 <= candies[i] <= 100
// 1 <= extraCandies <= 50