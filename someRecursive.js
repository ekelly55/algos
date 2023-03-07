// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


//callback

function isFactorOfThree(num){
    if(num % 3 === 0){
        console.log(`${num}  is a factor of 3. true`)
        return true

    }
    
} 

function someRecursive(arr, func){
    // add whatever parameters you deem necessary - good luck!
    //should it be asble to take any arraay and function. it only needs to return true if ANY element meets the condition or false. we're going to recursively call the function for each part element in the array
    
    //base case
    console.log('running')
    i = arr.length - 1
    if(i < 0){
        console.log(`no match. false`)
        return false
    }
    if(isFactorOfThree(arr[i])){
        console.log(`match found. true`)
        return true
    }
    console.log(`i is ${i}`)
    console.log(`arr[i] is ${arr[i]}`)

    return someRecursive(arr.slice(0, arr.length - 1), isFactorOfThree(arr[i]))

  }

  arr = [1, 2, 7, 4, 5, 4, 2 ,76, 13, 4]

// console.log(arr.slice(0, arr.length - 1))

  someRecursive(arr, isFactorOfThree)