/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let numAs = 1
    let copiedAs = 0
    let steps = 0
    //it has nothing to do with copying and pasting. it's math. how many steps does it take 
    //to get from 1 to n using only mulitiplication and addition
    //first, check if n is square
    const copy = (numAs, copiedAs) => {
        steps++
        return copiedAs = numAs

    }
    
    const paste = (numAs, copiedAs) => {
        if(copiedAs !== 0){

            steps++
            return numAs+=copiedAs
        }
    }
    //first, handle odd nums.
    //how to handle? if will require pasting 1 single A
    if(n%2 !== 0){
        steps++
    }

    for(let i = 0; i<n; i++){

        console.log("startin loop", i, "n is", n, "numAs is", numAs, "copiedAs is", copiedAs, "steps is", steps)
        
        //what are the conditions? 
        //1. will copying and pasting get you to the number?
        //2. will justing pasting get you to the number?
        //3. neither: need to figure out the difference between numAs and n and see what it's divisible by. need least common factor
        if(copiedAs < n/2){
            //if you've copied less than half the target, you can copy and paste numAs
            copiedAs = copy(numAs, copiedAs)
            console.log("copyied. n is", n, "current numAs is", numAs, "copiedAs is", copiedAs, "steps is", steps)
            numAs = paste(numAs, copiedAs)
            console.log("pasted. n is", n, "new numAs is", numAs, "copiedAs is", copiedAs, "steps is", steps)
        } else {
            paste(numAs, copiedAs)
            console.log("just pasted. n is", n, "new numAs is", numAs, "copiedAs is", copiedAs, "steps is", steps)
            
        }
    }
    return steps

};

console.log(minSteps(10))