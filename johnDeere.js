//given array of int, check if the element occurs anywhere else (before or after) create two strings of binary digits. track earlier and later. in first string (earlier) each char is 1 if the val a that index also occurs earlier. if not, then O. and vice versa for the after string. 

//return array of two strings
//sample input
//let arr = [1, 2, 3, 2, 1]
//before string = 00011
//after string = 11000
//sample output = [before, after]

//let's try it with two pointers

function bitPattern(arr){
    //try it with a freq counter. if the value of any key is < 1, then it should be 1 any place that it occurs

    //declare counter, strings and output arr
    let counter = {}
    let before = ""
    let after = ""
    
    for(int of arr){
        counter[int] = (counter[int] || 0) + 1
    }
    console.log(counter)
    //this counts the instances of each digit. now how to create the strings?
    
    for(key in counter){
        if(counter[key] > 1){
            after += "1"
        } else {
            after += "0"
        }
        console.log("after")
        console.log(after)
    }
    //now what about the extra ones that should be 0?
    let extraDigits = ("0").repeat(arr.length - after.length)
    console.log(`the extra digits are ${extraDigits}`)
    after += extraDigits
    console.log(after)
    //now repeat for after
    for(key in counter){
        if(counter[key] === 1){
            before += "0"
        } else {
            before += "1"
        }
        console.log(before)
        before = before.split("")
        before = before.reverse()
        before = before.join("")
        console.log(before)
    }
    //now what about the extra ones that should be 0?
    before = extraDigits + before  
    console.log(before)
    
    let output = [before, after]
    console.log(output)
    return output
}



bitPattern([3, 1, 2, 4, 6, 2, 45, 6, 3, 4, 0])

//26 nurses emp numberws 0-25, map to ids a-z. work in shifts beginning at 0 time, only one at a time. 2-d array, emp number: leave time. find id of nursse longest single shift. two contiguous shifts are sep. 

//input, a 2D array (array of L2 arrays), output is a string (single letter id)