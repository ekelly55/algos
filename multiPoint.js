

//input sorted array. find first pair of elements where sum is zero

function sumZero(arr){
    //array already sorted, so that's taken care of
    //array starts at low end, increases
    let left = 0;
    let right = arr.length - 1
    while(left<right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum>0){
            right--
        } else {
            left++
        }
    }
   
}

console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]))