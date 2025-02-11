/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    //implement counter object
    //iterate through array and count instances of vals
    //make set from vals of counter object
    //if number of vals in set !== number of keys in object, some vals are duplicates. return false
   
    let frequencyCounter = {}
    let keyCount = 0
    for(num of arr){
        if(frequencyCounter[num]){
            frequencyCounter[num] += 1
        } else {
            frequencyCounter[num] = 1
            keyCount++
            console.log("added", num, "to freq counter. counter is now", frequencyCounter, "keycount is", keyCount)
        }
        //what if we add it to the set every time...if it's not unique, it won't get added. if it is, it will 
        frequencyCounter
    }
    //remember, for...of gives the value, for...in gives an index
    let frequencySet = new Set(Object.values(frequencyCounter))
    
    console.log("keycount is", keyCount)
    console.log("freq set size is", frequencySet.size)

    if(keyCount === frequencySet.size) return true
    return false
};

let arr = [1,2,2,1,1,3]

console.log(uniqueOccurrences(arr))