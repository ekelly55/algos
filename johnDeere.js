//given array of int, check if the element occurs anywhere else (before or after) create two strings of binary digits. track earlier and later. in first string (earlier) each char is 1 if the val a that index also occurs earlier. if not, then O. and vice versa for the after string. 

//return array of two strings
//sample input
//let arr = [1, 2, 3, 2, 1]
//before string = 00011
//after string = 11000
//sample output = [before, after]

//let's try it with two pointers

function bitPattern(arr){
    //declare variables
    let before = ""
    let after = ""
    let output = [before, after]

    //declare pointers
    let i = 0
    let left = 0
    let right = arr.lenth - 1
    //have to make it less than or equal to, or else it will exclude on rhe other side
    while(left<=i<=right){
        //always have to start left and right pointers over again for each iteration
        left = 0
        right = arr.lenth - 1 

        //first, run only if i !== left
        if(i !== left){
            //check if they're equal. if so, add 1 to the string
            if(arr[i] === arr[left]){
                before += "1"
                break
            } else {
                //if not, increment left to check again. it won't run if left has caught up to i
                left ++
            } 
            //but where does it add a 0? if left = i and it hasn't found a match, then there is none before i, so add a 0 to the string
        }
        if(i === left){
            before += "0"
        }
        //repeat process on right to check for matches after i
        if(i !== right){

            if(arr[i] === arr[right]){
                after += "1"
            } else {
                right --
            }
        }
        if(i === right){
            after += "0"
        }
        //after all this, increment i and repeat
        i++
    }
    console.log(output)
    return output
}

function bitPattern2(arr){
    //try it with a freq counter. if the value of any key is < 1, then it should be 1 any place that it occurs

    //declare counter, strings and output arr
    let counter = {}
    let before = ""
    let after = ""
    let output = [before, after]

    for(int of arr){
        counter[int] = (counter[int] || 0) + 1
    }
    console.log(counter)
    //this counts the instances of each digit. now how to create the strings?
    
    for(key in counter){
        if(counter[key] > 1){
            before += "1"
        } else {
            before += "0"
        }
        console.log(before)
    }
        //now what about the extra ones that should be 0?
        let extraDigits = "0"
        before += extraDigits.repeat(arr.length - before.length)
        console.log(before)
    //now repeat for after
    for(key in counter){
        if(counter[key] > 1){
            after += "1"
        } else {
            after += "0"
        }
        console.log(after)
    }
        //now what about the extra ones that should be 0?
       
        after = extraDigits.repeat(arr.length - before.length) + after
        console.log(after)
}



bitPattern2([1, 2, 3, 2, 1])

//26 nurses emp numberws 0-25, map to ids a-z. work in shifts beginning at 0 time, only one at a time. 2-d array, emp number: leave time. find id of nursse longest single shift. two contiguous shifts are sep. 

//input, a 2D array (array of L2 arrays), output is a string (single letter id)