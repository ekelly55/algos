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

// console.log(recurFactorial(5))

//helper recursion

function collectOdds(arr){
    let result = []
    
    function helper(input){
        if(input.length === 0){
            return
            //here's our base case 
        }
        if(input[0]%2 !==0){
            //then it's odd
            result.push(input[0])
        }
        //now we remove that index and recur
        helper(input.slice(1))
    }
    //now we have to call it
    helper(arr)

    return result
}
//pure recursion
function collectAllOdds(arr){
    //declare out output. it will be empty each  new time
    let newArr = []
    //base case
    if(arr.length === 0){
        return newArr;
    }
    //if it's not the base case yet, check if its odd, push it into the output
    if(arr[0]%2 !== 0){
        newArr.push(arr[0])
    }
    //this is where we recurr. the newArr will be the current newArr added to all the outputs of the  recursive functions. it's ok that it's redefined as empty each time, because we're going o recurr and add each of the output arrays together
    newArr = newArr.concat(collectAllOdds(arr.slice(1)))
   return newArr
} 

//sample input arr = [1, 2, 3, 4, 5]

//sample output = 
    //newArr = [1].concat(collectAllOds([2, 3, 4, 5]))
        //newArr = [].concat(collectAllOdds(3, 4, 5))
            //newArr = [3].concat(collectAllOdds[4, 5])
                //newArr = [].concat(collectAllOddds([5]))
                    //newArr = [5].concat(collectAllOdds([]))
                        //newArr = []
                    //newArr = [] concat [5] = [5]
                //newArr = [5] concat [] = [5]
            //newArr = [5] concat [3] = [3, 5]
        //newArr = [] concat [3, 5]
    //newArr = [1] concat [3, 5]
//newArr = [1, 3, 5]

//power function

//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(num, exp){

    //what's our base case? exp = 0, return 1
    let output = 1

    function helper(num, exp){

        if(exp === 0){
            return 1
        }
        //and here's where we want to run it. we're not doing anything with the exp
        output = output*num
        console.log(output)
        exp --
        //now we call it again, with the new exp
        helper(num, exp)
    }

    helper(num, exp)
    console.log(output)
    return output
}

//power(2, 0)


//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

//again!
function factorial(num){
    //base case 
    if(num === 0){
        return 1
    }
    //interesting: calling num-- doesn't work. you have to specify
    return num * factorial(num-1)

}

console.log(factorial(5))



//sample output:
    //callstack = factorial 5
        //5 x factorial 4
            //callstack = factorial4, factorial 5
                //4 x factorial 3
                    //callstack = factorial 3, factorial 4, factorial 5
                        //3 factorial 2
                            //callstack = F2, f3, f4, f5
                                //2 factorial 1
                                    //CS = f1,f2, f3, f4, f5
                                        //1factorial 0
                                            //cs = f0, f1, f2, f3, f4, f5
                                                //f0 = 1
                                            //cs = f1, f2 f3 f4 f5
                                            //f1 = 1 x 1 = 1
                                        //cs = f2 f3 f4 f5
                                        //f2 = 2 x 1 = 2
                                    //cs = f3 f4 f5
                                //f3 = 3 x 2 = 5
                            //cs = f4 f5
                        //f4 = 4 x 5 = 20
                    //cs = f5 = 5 x 20 = 120

