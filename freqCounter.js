function freqCounter (ar1, ar2){
    //frequency must be the same, so if the lengths are diff, then false
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    console.log(ar1)
    console.log(ar1.length)
    console.log(ar2)
    console.log(ar2.length)
    
    //first check if lenghts are equal or if they're empty
    if (ar1.length !== ar2.length || ar1.length === 0 || ar2.length === 0){
        return false
    }
        console.log(`${""}`)
        console.log(`${""}`)
        console.log(`${""}`)
      
        //first map ar1 onto a freq counter object
        for(val of ar1){
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
            console.log(frequencyCounter1)
        }
        //nex map ar2  onto other freq counter object
        for(val of ar2){
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
            console.log(frequencyCounter2)
        } 
        for(key in frequencyCounter1){
            //here we check if the square of each key exists in freq counter 2
            if(!(key**2) in frequencyCounter2){
                //if any of keys in counter 1 squared don't exist in counter 2, then no match.
                return false
            }
            //the keys match, but now we check if the values are equal
            if(frequencyCounter1[key] !== frequencyCounter2[key**2]){
                //if the value of the key in counter 1 does not equal the value of the square of key in counter 2, then no match
                return false
            }
        }
        //if it makes it through all conditionals, then oit's a match
        return true
        
}

let ar1=[1, 0, 3]
let ar2=[2, 4, 9]

//console.log(freqCounter(ar1, ar2))

//given 2 positive int, find out if the two nums have the same freq of digits
//ON time complexity. 

//need to iterate through each, note how many times each digit occurs. order does not not matter. if the times match, true. 

//eg: 182, 281 true
//23, 24 false

function sameFreq(num1, nun2){
    //we need to be able to iterate through them, so turn then to strings
    num1 = num1.toString()
    num2 = num2.toString()
    console.log(`num1 is ${num1}`)
    console.log(`num2 is ${num2}`)

    if(num1.length !== num2.length){
        return false
    }
    //first establish our counters
    let counter1 = {}
    console.log("counter1 is")
    console.log(counter1)
    let counter2 = {}
    console.log("counter2 is")
    console.log(counter2)
    
    //will need a seperate loop for each to map them to the counter objects
    //loop 1
    for(digit of num1){
        counter1[digit] = (counter1[digit] || 0) + 1
        console.log("counter1 is")
        console.log(counter1)
    }
    //loop 2
    for(digit of num2){
        counter2[digit] = (counter2[digit] || 0) + 1
        console.log("counter2 is")
        console.log(counter2)
    }
    //now we need to check if they match
    for(key in counter1){
        //first, let's check if there is key match
        if(key in counter2){
            //then check if the values match
            if(counter1[key] !== counter2[key]){
                console.log("false: frequencies don't match")
                return false
            }
        }else{

            
            console.log("false: digits don't match")
            return false
        }
    }
        //once that condition satisfied, check if values match

    //if it passes all conditionals, return true
    
    console.log(true)
    return true
}

let num1 = 81130
let num2 = 81330

sameFreq(num1, num2)