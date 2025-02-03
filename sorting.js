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
    let pivot =  arr[start]
    //confused. i thought the pivot was a value
    let swapIdx = start
    console.log('new pivotHelper call, arr is', arr,'start is', start, 'end is', end)
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
        console.log("left < right. current pivotIndex is", pivotIndex)
    //call quicksort on left side. start index stays the same (left), but end index changes to pivotIndex (returned previously) - 1
        console.log("current pivotIndex is", pivotIndex, "calling quicksort on left subarray", arr.slice(0, pivotIndex+1))
        quickSort(arr, left, pivotIndex-1)
        //now the same on the right, but we're going to keep the end at right and move the left
        console.log("current pivotIndex is", pivotIndex, "calling quicksort on right subarray")
        quickSort(arr, pivotIndex+1, right)
    }
    console.log("left is >= right. resolving call on", subarray, "array is now", arr,)
    return arr
}
arr = [4, 6, 9, 1, 2, 5]

// quickSort(arr)


//radix sort. it's an integer sort. doesn't compare. exploits fact that info about size of number is encoded in number of digits. uses binary numbers but what is that?

//groups numbers by digit in ones place, then form back into list keeping them in the order of the buckets. i.e. [4, 102, 98, 9] gets sorted to [102, 4, 98, 9]
//then do the same but grouped by tens place, so now it's [102, 4, 9, 98]
//then with hundreds, so we get [4, 9, 98, 102]

//helper fuction: getDigit(num, place) where place is expressed as a string index

function getDigit(num, place){
    let numString = num.toString()
    // console.log(numString)
    let digitString = numString[numString.length-1 - place]
    let digitNum = parseInt(digitString)
    if(digitNum != undefined && digitNum != NaN) return digitNum
    //doesn't work because still returns undefined or NaN if the place is grater than the length of the num
}

//or
function getDig(num, place){
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10
    //returns the remainder but why are we multiplying by 10? becaus that'll give us the remainder and tell us what the digit is in the given place?
    //will return 0 for the digit when checking place values greater than the number, but still works in teh function.
}
// console.log(getDig(492, 3))

//eg if we want to find out the digit in the 100s place of 7323. we do getDig(num, place) where place is NOT an index but an exponent of 10. getDig(7323, 2) = 7323/100 = 73, now divide by ten and return remainder, which is 3, which is the digit in the tens place. better because no risk of NaN return?


// console.log(getDigit(7342, 4))

//how many digits function: we need to know the largest order of numbers, which determines how many loops

function digitCount(num){
    let numString = num.toString()
    return numString.length

    //or

    if(num === 0) return 1
    // return Math.floor(Math.log10(Math.abs(num))) + 1

    //log10 asks what power of 10 does the number equal.
    //i.e. digitCount(423). Math.log10(423) = 2.xxx. take the floor to get 2, 10^2 gives us 100, the number of digits of which is 2+1. returns 3 as the number of digits

}

// console.log(digitCount(1230))

function mostDigits(arr){
    let maxDigits = 0;
    for(i=0; i<arr.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits
    
}

// console.log(mostDigits([124, 2353, 3, 45, 940]))

function radixSort(arr){
    //first find out how many iterations we need by finding the length of the longest number in the array
    let maxDigitCount = mostDigits(arr)
    console.log("number of iterations =", maxDigitCount)
    //next, make ten "buckets" for each iteration
    for(k = 0; k<maxDigitCount; k++){
        console.log("k=", k, "iterating over the", (10**k),"'s place")
        let digitBuckets = Array.from({length: 10}, () => [])
        console.log("digitBuckets = ", digitBuckets)
        //after making the buckets, iterate through the array, focusing on one place value at a time, and put each element into its corresponding bucket
        for(i=0; i<arr.length; i++){
            console.log("iterating through arr. i=", i,"arr[i]=",arr[i], "checking digit of numstring at index k")
            let digit = getDig(arr[i], k);
            console.log("digit=", digit)
            console.log("digitBuckets[digit]=", digitBuckets[digit])

            digitBuckets[digit].push(arr[i])
            console.log("digitBuckets now = ", digitBuckets)
        }
        arr = [].concat(...digitBuckets);
        console.log("new array =", arr)
    }
    
    // console.log(arr)
    return arr
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))
// radixSort([23, 345, 5467, 12, 2345, 9852])


//radixSort is O(nk) works great if k is not close to n. basically, if k < than logN, it's faster than the fastest comparison
//BUT factoring in memory storage, it is theoretically O(nlogn) according to some sources