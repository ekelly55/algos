//given sorted array of int and a value, return index where the value is located. if not found, return -1


//linear vs. binary search: linear would just be a for loop. binary is this, also like a multipointer
function search(arr, val){
    //start from both ends
    let min = 0;
    let max = arr.length - 1;
    while(min <= max){
        //for as long as the min is less than or equal to the max, the middle index is the average of the two
        let middle = Math.floor((min + max) / 2);

        //the current value we're going to check is at that middle index
        let current = arr[middle]
        console.log(current)
            //if the current value is less than the value we're looking for, then we know we can disregard the indexes before the middle. we set a new min pointer just after the current value we checked. 
        if(arr[middle] < val){
            min = middle + 1;
            //if the current value is more than the target value, then we disregard everything after the middle and set a new max pointer just before the current value we just checked.
        } else if(arr[middle] > val){
            max = middle -1
        } 
        //then it repeats for as long as the min and max don't cross, with smaller and smaller increments until
        else{
            console.log(middle)
            return middle
        }
    }
    //if it makes it through all these conditionals without finding the target value,
    return -1
}

let arr = [1, 2, 4, 6, 9, 10, 34, 56, 70, 124, 235, 567, 697, 2089, 23532]

let val = 567

search(arr, val)