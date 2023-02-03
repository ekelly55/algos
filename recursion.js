function recurseThis(string){

    if(string.length === 0){
        return "it's done"
    } else {
        console.log(string)
        
        recurseThis(string.slice(0, string.length-2))
    }
}

//recurseThis("this is recursion")

let sum = 0
let index = 0

function sumArrayOfNums(arr){
    if(index === arr.length){
        return sum;
    }
    sum += arr[index]
    index+=1
    // console.log(sum)
    return sumArrayOfNums(arr)

}

// console.log(sumArrayOfNums([2, 4, 5, 8]))

function oddsIn(arr){
    console.log("checking first element")
   
    if(arr[arr.length -1] % 2 === 0){
        arr.pop()
        console.log(arr.length)
        oddsIn(arr)
    } else if(arr.length === 0){
        console.log(false)
        return false
    } else {

        console.log(true)
        return true
    }
}

// oddsIn([2, 4, 6, 8, 10, 32, 54, 76, 54])

function callStack(){
    hello()
}

function hello() {
    console.log("hello")
    stack()
}

function stack(){
    console.log("stack")
    
}

// callStack()

function countDown(num){
    if(num <= 0) {
        console.log("all done!");
        return;
    }
    console.log(num);
    num --;
    countDown(num);
}

// countDown(5)

function sumRange(num){
    if(num === 1){
        console.log(1)
         return 1;
    } 
    console.log(num + sumRange(num -1))
    return num + sumRange(num -1)
}

// sumRange(5)

function iterFactorial(num){
    let total = 1
    for(i=num; i > 0; i--){
        total *=i
        console.log(total)
    }
    console.log(total)
    return total
}

// iterFactorial(5)

function recurFactorial(num){
    
    if(num === 1){
     return 1
     //same as sum range, we're just muliplying. when you run factorial(1), we want that to equal 1
    }
    return num * recurFactorial(num - 1)
}

console.log(recurFactorial(5))