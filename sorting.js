//bubble sort

//not very efficient, rarely used, but there's one specific case that it's good for

//sorting array ascending, larger vals bubble up, one at a time. compare two at a time and switch if they're not sorted. but then, need to run it again, tho the final element will always be the largest after each sort (so 5 steps, then 4, then 3...)

function bubbleSort(arr){

    let temp 
    let count = 0 
    
    for(i = arr.length - 1; i >= 0; i--){
        
        //this is going to give us a way out of the full iteration if the array is nearly already sorted.
        let noSwaps = true
        console.log(`sorting ${i+1} elements ${(arr.length -1) - i} elements sorted. i = ${i}`) 
        for(j = 0; j <= i; j++){
            //but if j = i there's no j + 1 on first inner loop
            console.log("j=", j)
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

// let arr = [
//     1, 2, 3, 3, 3, 5, 1, 7, 75, 75, 200, 204, 254, 2948432
// ]

// bubbleSort(arr) 

//takes 105 iterations. N2 is 169

//other basic ones are selection and insertion. selection sucks, all the time. bubble is a decent choice if it's monstly sorted.

//intermediate sorting these can improve from On2 to Onlogn

//selection

function selectionSort(arr){
    const swap = (arr, index1, index2) =>
        ([arr[index1], arr[index2]] = [arr[index2], arr[index1]])
    for(let i = 0; i<arr.length; i++){
        let lowest = i
        for(let j = i+1; j<arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j
            }
        }
        if (i != lowest) swap(arr, i, lowest)
    }
    return arr
}

// selectionSort([0, 2, 34, 22, 10, 19, 17])

//insertion

function insertionSort(arr){
    console.log("arr=", arr)
    for(let i = 1; i<arr.length; i++){
        let currentElement = arr[i]

        console.log("i=", i)
        console.log("currentElement= arr[i] = ", currentElement)
        let j = i-1

        while(j>=0 && arr[j] > currentElement){
            
            console.log("j=", j)
            console.log("arr[j]=", arr[j])
            console.log("arr[j]> currentElement, proceeding with inner loop")
            console.log("arr[j + 1]=", arr[j+1])
            console.log("shifting arr[j + 1]= to arr[j] because arr[j] greater.")
            arr[j+1] = arr[j]
            console.log("new arr[j+1]=", arr[j+1])
            console.log("current arr = ", arr)
            j--
            
        }
        console.log("j =", j, "arr[j] doesn't exist OR arr[j] is not greater than currentElement. proceeding with outer loop")
        console.log("j+1=", j+1,"arr[j+1] =", arr[j+1], "changing arr[j + 1]= to currentElement.")
        arr[j+1] = currentElement
        console.log("new arr[j + 1]=", arr[j+1])
        console.log("current arr = ", arr)

    }
    
    console.log("final arr = ", arr)
    return arr
}

// insertionSort([2,1,9,76,4])
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
        //couldn't we just use slice to push the remainder of the array at once? would it be basically the same since slice has to iterate anyway?
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


smallArr = [3, 5, 2, 6, 1, 8]

// console.log(mergeSort(smallArr))
//big O is nlogn (logn decompositions, n merges)

//quick sort and merge sort both work by first drilling down to 1 element arrays on the left (or whatever side you choose first), then on the right (but each time it runs on the right, it needs to drill  down on the left to one element arrays as well)

//quicksort

//quicksort

//similar to merge, in nthat it exploits arrays of 0 or 1 always being sorted by default
//it works by selectinng  a pivot poinnt and findns the index where the pivot should end upo in sorted array. 

//pivot  point can be any index: just move numbers less than to left and greater than to right: the left and right doesn't need to be sorted. you'll repeat the process on each side recursively. choose a consistent pivot point to use, like arr[0]
//swap elements so that all the elems < pivot are right before it, then swap pivot w/ the last of those values. then repeat on left as necessary til sorted, then move on to the right and repeat

//pivot helper (aka partition) this does the arranging on eithe rside of pivot. it assigns a pivot and arranges. IN PLACE no new array, returns index of pivot. pivot helper can work in a variety of ways, it just has to return the correct index for the pivot point el

//runtime can vary depending on where you pick pivot. pivot ideally should be median val, but not easy. for sim0plicity we'll use first el and place it in pivot index. but if the data isn't ordered, which it's not, then we can't know the median, so just go with first el. (there are some runtime consequences to this)

//accept three args: arr, start index, end. grab pivot from start, place it, store current pivot index in a var. once done, swap pivot index val w/ element at pivot index var (it's a count of how many elements are less than) 

//the pivot index value is what we're comparing everything to (in this case, the first El). the pivot index variable is the count of the number of els less than the value, but will also conveniently be the correct index where that value goes.

//clarifiication: the pivot value and the pivot index are not the same. the pivot index starts as the index of the pivot value, but increments as we count elements less than the pivot value, then we swap the pivot with...the currrent element at the pivot index?

//so you swap as you count elements less than the pivot, but you don't swap the pivot point til the end of the loop?

//pivot helper function

//my attempt: 

// function pivotHelperAttempt(arr){
//     let pivotPoint = arr[0]
//     let pivotIndex = 0
//     //use separate variables for clarity
//     let count = 0
//     console.log(arr)
//     for(i = pivotIndex+1; i<arr.length; i++){
//         console.log("pivotPoint is", pivotPoint)
//         console.log("i is", i)
//         console.log("arr[i] is", arr[i])
//         if(arr[i] < pivotPoint){
//             //if val at i is less than val of pivotpoint, swap val at i with val to right of pivot point
//             [arr[i -1], arr[i]] = [arr[i], arr[i - 1]]
//             count++
//             console.log("swapped values and incremented count. count =", count)
//             console.log(arr)
//         }
//     }
//     //after full loop, place pivotpoint at correct index
//     pivotIndex = count
//     [pivotPoint, arr[pivotIndex]] = [arr[pivotIndex], pivotPoint]
//     console.log("placed pivotPoint at proper index")
//     console.log(arr)

// }

// pivotHelperAttempt([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18])
//can write paraameters like that so that not only do they need to be supplied, but they will only accept those values. not necessary though. given function:
function pivotHelper(arr, start = 0, end = arr.length + 1){
    console.log('new pivotHelper call')
    let pivot =  arr[start]
    //confused. i thought the pivot was a value
    let swapIdx = start
    console.log("the pivot value is", pivot, "swapIdx is", swapIdx)
    
    for(i = start+1; i < arr.length; i ++){
        //but this will be a problem when recursively calling...when you're sorting the right side, we don't want to use i = 1
        console.log("i =", i, "arr[i] =", arr[i], "swapIdx is", swapIdx, "arr[swapIdx] = ", arr[swapIdx])
        if(pivot > arr[i]){
            swapIdx++;
            console.log("pivot", pivot, "is greater than arr[i]", arr[i], "incremented swapIdx. swapIdx is now", swapIdx, "swapping arr[swapIdx]", arr[swapIdx]," and arr[i]", arr[i])
            let temp = arr[swapIdx]
            arr[swapIdx] = arr[i]
            arr[i] = temp
            console.log("the array is now:")
            console.log(arr)
        }
    }
    //now swap starting el w/ comparisonIncdex el ( for some reason, can't use the es15 swap syntax here, so use helper variable)
    console.log("final swap. swapping arr[start] value:", arr[start], "and arr[swapIdx] value", arr[swapIdx])
    let temp = arr[swapIdx]
    arr[swapIdx] = arr[start]
    arr[start] = temp
    console.log("the array is now:")
    console.log(arr)
    console.log("swapIdx is", swapIdx)
    return swapIdx 
    
}
// let arr = [4, 8, 2, 1, 5, 7, 6, 3]

// pivotHelper(arr)

//now we can recursively use this in quicksort

function quickSort(arr, left = 0, right = arr.length -1){
    let subarray = arr.slice(left, right+2)
    console.log("***********")
    console.log("new quickSort call. arr is", arr)
    console.log("new quickSort call. subarr is", subarray)
    console.log("left is", left)
    console.log("right is", right)
//base case. want it to run until each subarray is 1 element, in which case pivotIndex will be 1. when both left and right pivotIndexes equal 1, we've reached that state. as long as left < right, it's still running. as soon as they're equal, it will stop
    if(left < right){

    
    //here is where we will need those start and end values. becaause we're working with an existing array. so we need to define what parts of it wwe're working with on each recursive call
    //here we're passing in left as the start value and right as the end value for call to pivotHelper
        let pivotIndex = pivotHelper(arr, left, right)
    //call quicksort on left side. start index stays the same (left), but end index changes to pivotIndex (returned previously) - 1
        console.log("current pivotIndex is", pivotIndex, "calling quicksort on left subarray", arr.slice(0, pivotIndex+1))
        quickSort(arr, left, pivotIndex-1)
        //now the same on the right, but we're going to keep the end at right and move the left
        console.log("current pivotIndex is", pivotIndex, "calling quicksort on right subarray", arr.slice(pivotIndex, right))
        quickSort(arr, pivotIndex+1, right)
    }
    console.log("resolving call on", subarray, "array is now", arr,)
    return arr
}
arr = [4, 6, 9, 1, 2, 5]

quickSort(arr)

//close, but won't work w/ negative or zero. follow example in lesson. has to do w/ how we're defining and using start and end i think