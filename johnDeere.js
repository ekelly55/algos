//given array of int, check if the element occurs anywhere else (before or after) create two strings of binary digits. track earlier and later. in first string (earlier) each char is 1 if the val a that index also occurs earlier. if not, then O. and vice versa for the after string. 

//return array of two strings
//sample input
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]

//sample output

function bitPattern(arr){
    //declare variables
    let earlierString = ""
    let laterString = ""
    let output = [earlierString, laterString]
    let freqCounter = {}
    let freqCounterLater = {}    //iterate through array
    for(int of arr){
        freqCounter[val] = (freqCounter[val] || 0) + 1
        console.log(freqCounter)
        
    }

    
}


//26 nurses emp numberws 0-25, map to ids a-z. work in shifts beginning at 0 time, only one at a time. 2-d array, emp number: leave time. find id of nursse longest single shift. two contiguous shifts are sep. 

//input, a 2D array (array of L2 arrays), output is a string (single letter id)