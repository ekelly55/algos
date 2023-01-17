//given sorted array, count how many unique values are in it. arr can contain neg int, but always sorted
//we need to check each value and see if we've already counted it or if it's new. we want to return the total number of values. this could be done with an array of anything. 


function countValues(arr){
    //declare iterator variables
   
    let count = 1

    // //make a while loop, as long as l is < r
    // while(left<right){
    //     //here we will check a left value and a right value, then increment the count if they're diff. 
    //     console.log(`current val of left is ${left}`)
    //     console.log(`current val of right is ${right}`)
    //     if(arr[left] !== arr[right]){
    //         console.log(`current val at right index is ${arr[right]}`)
    //         console.log(`current val at left index is ${arr[left]}`)
            
    //         count+=1
    //         console.log(`current count is ${count}`)
    //         //here we will increment l if they're different, then check again
    //         left += 1
    //         console.log(`current val at left index is ${arr[left]}`)
    //     } else {
    //         console.log(`current val at right index is ${arr[right]}`)
    //         console.log(`current val at left index is ${arr[left]}`)
    //         //if theyre the same and if that value hasn't been conted yet, count it.
    //         if(count === 0){
    //             count += 1
    //             console.log(`current count is ${count}`)
    //         }
    //         //
    //         //here we will decrement r before checking again, if count is 0. that means that val has already been counted. 
    //         right -= 1
    //         console.log(`current val at right index is ${arr[right]}`)
    //     }
        
    // }
    
    //simple solution:
    if(arr.length === 0){
        count = 0
    for(i=1; i<arr.length; i++){
        
        if(arr[i] > arr[i-1]){
            count ++
        }
    }
    console.log(`total count is ${count}`)
    return count

}
}

let arr = []

countValues(arr)