//bubble sort

//not very efficient, rarely used, but there's one specific case that it's good for

//sorting array ascending, larger vals bubble up, one at a time. compare two at a time and switch if they're not sorted. but then, need to run it again, tho the final element will always be the largest after each sort (so 5 steps, then 4, then 3...)

function bubbleSort(arr){

    let temp 
    let count = 0 
    
    for(i = arr.length - 1; i >= 0; i--){
        //this is going to give us a way out of the full iteration if the array is nearly already sorted.
        let noSwaps = true
        console.log(`sorting ${i} elements ${(arr.length -1) - i} elements sorted`)
        for(j = 0; j <= i; j++){
            count++
            console.log(`count is ${count}`)
            if(arr[j]>arr[j+1]){
                console.log(` ${arr[j]} is greater than ${(arr[j+1])}. swapping`)
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
                //here's a way to do this with only two lines using saddition and subtraction, but can't remember
                // [arr[j], arr[j+1]] = [arr[j+1], arr[j]] this syntax may only work as a helper function

                console.log(` arr is  now ${arr}`)
                
            }
        }
        if(noSwaps)
        break
    }
    console.log(`count is ${count}`)
    console.log(arr)
    return arr
}

arr = [
    1,         2,
    3,       3,   3,
    5,    1,   7,  75,
   75,     200, 204,
  254, 2948432
]

// bubbleSort(arr) 

//takes 105 iterations. N2 is 169

//other basic ones are selection and insertion. selection sucks, all the time. bubble is a decent choice if it's monstly sorted.

//intermediate sorting these can improve from On2 to Onlogn


//merge sort

//split it all into 0 or 1 element arrays (b/c inherently sorted) then merge into longer and longer arrays til you have a commplete one. a merge sort is two parts: sort, then merge.  so first, how to merge sorted arrays

function merge(arr1, arr2){
    //declare pointers
    i = 0
    j = 0
    output = []
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
    }
    while(j < arr2.length){
        output.push(arr2[j])
        j++
    }
    console.log(`output is ${output}`)
    return output
}

// merge([1, 2, 3, 4, 5, 6], [-2, 0, 2, 4, 6, 8, 10])

//now we write a recursive function that will break them down

function mergeSort(arr){
    //base case..when the arr is 0 or 1 elements, it's sorted, stop there. 
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

// console.log(mergeSort(smallArr))

smallArr = [3, 5, 2, 6, 1, 8]

//big O is nlogn (logn decompositions, n merges)

//quicksort

//quicksort

//similar to merge, in nthat it exploits arrays of 0 or 1 always being sorted by default
//it works by selectinng  a pivot poinnt and findns the index where the pivot should end upo in sorted array. 
//swap elements so that all the elems < pivot are right before it, then swap pivot w/ the last of those values. then repeat on left as necessary til sorted, then move on to the right and repeat

//pivot helper (aka partition) this does the arranging on eithe rside of pivot. it assigns a pivot and arranges. IN PLACE no new array, returns index of pivot. 

//runtime can vary depending on where you pick pivot. pivot ideally should be median val, but not easy. for sim0plicity we'll use first el and place it in pivot index.

//accept three args: arr, start index, end. grap pivot from start, place it, store current pivot index in a var. once done, swap pivot index val w/ element at pivot index var (it's a count of how many elements are less than)

//the pivot index value is what we're comparing everything to (in this case, the first El). the pivot index variable is the count of the number of els less than the value, but will also conveniently be the right index where that value goes.

//pivot helper function

function pivotHelper(arr, start = 0, end = arr.length - 1){
    console.log('new pivotHelper call')
    let pivot =  start
    let pivotIndex = 0
    
    for(i = pivot + 1; i <=end; i ++){
        //but this will be a problem when recursively calling...when you're sorting the right side, we don't want to use i = 1
        if(arr[pivot] > arr[i]){
            //we found one, increment pivotIndex (for now, it serves as a count of vals < arr[start])
            pivotIndex++
            //now because we know there is at least {pivotIndex} number of els less than arr[start], we can swap out the el at that pivotIndex
            [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]]
            //now that arr[end] is a diff val, it will run again
            console.log("the pivotIndex is now:")
            console.log(pivotIndex)
            console.log("the array is now:")
            console.log(arr)
        }
    }
    //now swap starting el w/ pivot index el ( for some reason, can't use the es15 swap syntax here, so use helper variable)
    let temp = arr[pivotIndex]
    arr[pivotIndex] = arr[pivot]
    arr[pivot] = temp
    console.log("the array is now:")
    console.log(arr)
    console.log(pivotIndex)
    return pivotIndex 
    
}


// pivotHelper(arr)

//now we can recursively use this in quicksort

function quickSort(arr, start = 0, end = arr.length -1){
    //here is where we will need those start and end values. becaause we're working with an existing array. so we need to define what parts of it wwe're working with on each recursive call
    pivotHelper(arr, start, end)
    pivotHelper(arr, start, (pivotHelper(arr, start, end)-1))
    pivotHelper(arr, (pivotHelper(arr, start, end)+1), end) 
    
    console.log(arr)
    return arr
}
arr = [7, 6, 12, 3, 9, 0, 3, 6, 8, 4]

quickSort(arr)

//close, but won't work w/ negative or zero. follow example in lesson. has to do w/ how we're defining and using start and end i think