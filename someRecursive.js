// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


//callback

function isMultOfThree(num){
    if(num % 3 === 0){
        console.log(`${num}  is a multiple of 3. true`)
        return true

    }
    
} 

function someRecursive(arr, func){
    // add whatever parameters you deem necessary - good luck!
    //should it be asble to take any arraay and function. it only needs to return true if ANY element meets the condition or false. we're going to recursively call the function for each part element in the array
    
    //base case
    console.log('running')
    console.log(`arr[0] is ${arr[0]}`)   
    
    if(arr.length === 0){
        console.log(`no match. false`)
        return false
    } else if(isMultOfThree(arr[0])){
        console.log(`match found. true`)
        return true
    } else {
        return someRecursive(arr.slice(1), isMultOfThree())
    }

  }

  arr = [2, 7, 4, 5, 4, 2, 13, 4]

// console.log(arr.slice(1))

  someRecursive(arr, isMultOfThree)