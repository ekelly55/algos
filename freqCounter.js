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

console.log(freqCounter(ar1, ar2))