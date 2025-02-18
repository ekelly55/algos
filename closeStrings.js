var closeStrings = function(word1, word2) {
    //basically, figure out 3 conditions:
    //1: are they the same length?
    //2: do they contain the same letters?
    //3. if you frequency map the letters, do the maps have the same set of values, regardless of keys?

    //first check length
    if(word1.length !== word2.length) return false

    //next turn strings into arrays
    let arr1 = word1.split("")
    let arr2 = word2.split("")

    //make sets from the arrays
    let set1 = new Set(arr1)
    // console.log(set1)
    let set2 = new Set(arr2)
    // console.log(set2)
    
    //check if sets are the same size
    if(set1.size !== set2.size) return false

    //check if sets have same letters
    for(let item of set1){
        if(!set2.has(item)) return false
    }

    //check frequency of letters. if we're this far, we know the words are the same length, so we can do 1 loop
    let counter1 = {}
    let counter2 = {}
    for(let i = 0; i<word1.length; i++){
        counter1[word1[i]] = (counter1[word1[i]] || 0) + 1
        counter2[word2[i]] = (counter2[word2[i]] || 0) + 1
    }
    
    //make sorted arrays from each 
    freqArr1 = Array.from(Object.values(counter1)).sort()
    freqArr2 = Array.from(Object.values(counter2)).sort()

    //convert each to JSON for comparison (js can't compare contents of whole arrays)
    if(JSON.stringify(freqArr1) !== JSON.stringify(freqArr2)) return false

    return true
    
};

let word1 = "abbccc"
let word2 = "aaaccb"

console.log(closeStrings(word1, word2))