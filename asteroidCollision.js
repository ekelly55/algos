/**
 * @param {number[]} asteroids
 * @return {number[]}
 */


//input is an array of int. indeces of the array represent relative positions in space
//abs val of el represents ast size, sign represents direction, + right, - left
var asteroidCollision = function(asteroids) {
    //collision will happen if next one in arr is opp sign
    //stack: add asteroids to stack as you iterate. if there will be a collision, you'll either not add it or pop the previous top val and add it, depending on magnitude

    // class Asteroid{
    //     constructor(val){
    //         this.val = val
    //         this.previous = null
    //     }
    // }
    //we know asteroids is at least 2 long, so let's set the initial previous and incoming indexes. these indexes are ONLY for asteroids already in the stack
    let newPointer = 1
    let stackAst = []
    stackAst[0] = asteroids.shift()
    stackAst[1] = asteroids.shift()
    
    let running = true
    
    //this checks if there's a collision
    let collision = (num1, num2) => {
        if(num1 > 0){

            return (num1*num2 < 0)
        } else {
            return false
        }
    }

    //big question: if it works right, can opposite signs exist in the stack? like, if there's no new incoming, and the last newAst collided and was destroyed, it should be done? right?

    //what are the conditions that can exist?
    //1. ast.length > 0: in this case, it will keep running
        //a. no collision: bring in another, increment newAst
        //b. collision
            //I. newAst destroyed: bring in another
            //II. both destroyed: bring in another (or two)
            //III. previous destroyed: newast->prev, bring in another
    //2. stack.length > 1: in this case, it must keep running until no asteroids more collisions are possible
        //a. no collision: return
        //b. collision
            //I. newAst destroyed: return
            //II. both destroyed: return
            //III. prev destroyed: shuffle pointers and re-run
    //3. asteroids.lengthength = 0, stack length = 1 or 0: return
    while(running){
        let previousPointer = newPointer - 1
        newAst = stackAst[newPointer]
        prevAst = stackAst[previousPointer]
        console.log("new loop.")
        console.log("stackAst is", stackAst)
        console.log("stack length is", stackAst.length)
        console.log("previous pointer is", previousPointer)
        console.log("previous ast is", prevAst)
        console.log("new pointer is", newPointer)
        console.log("newAst is", newAst)
        console.log("asteroids is", asteroids)
        console.log("asteroids length is", asteroids.length)


        if(asteroids.length > 0){
            if(!collision(prevAst, newAst)){
                //no collision, bring in another (we know we have one), increment newAst
                console.log("condition 1a")
                stackAst.push(asteroids.shift())
                newPointer++
                // console.log("new pointer is", newPointer)
                
            }else{
                //collision: newAst destroyed, both destroyed, or previous destroyed
                if(Math.abs(newAst) < Math.abs(prevAst)){
                    
                    //new destroyed: bring in another. don't change pointer
                    console.log("condition 1bI")
                    stackAst.pop()
                    stackAst.push(asteroids.shift())
                    
                    
                } else if(Math.abs(newAst) === Math.abs(prevAst)){
                    //both destroyed: pop them off, then bring in anotother
                    console.log("condition 1bII")
                    stackAst.pop()
                    stackAst.pop()
                    stackAst.push(asteroids.shift())
                    
                    //check if can decrement pointers
                    if(stackAst.length > 1){
                        console.log("condition 1bIIA")
                        
                        //room to decrement. this will point newponiter at the new ast we just pushed in, and previous at whatever one was there after the pop off
                        newPointer--
                    } else {
                        //if only 1 left after popping them off and bringing in 1 new one, then we need another new one, so check if available
                        if(asteroids.length > 0){
                            console.log("condition 1bIIBi")
                            stackAst.push(asteroids.shift())
                            //no need to move pointers, as they'll be pointing to the indexes that were popped off, which we're now filling again
                        } else {
                            console.log("condition 1bIIBii")
                            //there's only 1 in stack and no more available
                            running = false
                            return stackAst
                        }
                    }
                    
                } else {
                    console.log("condition 1bIII")
                    //previous destroyed. set newAst as the new prevAst 
                    stackAst[previousPointer] = stackAst.pop()
                    //here we need to check if there's a next one in the stack to collide with
                    if(stackAst.length > 1){
                        console.log("condition 1bIIIa")
                        newPointer--
                    }else{
                        console.log("condition 1bIIIb")

                        stackAst.push(asteroids.shift())
                    }
                }
                
            }
        } else if(stackAst.length > 1){
            if(!collision(prevAst, newAst)){
                console.log("condition 2a")
                
                //no collision
                running = false
                return stackAst
            }else{
                //collision
                if(Math.abs(newAst) < Math.abs(prevAst)){
                    console.log("condition 2bI")
                    stackAst.pop()
                    //newAst destroyed, return
                    running = false
                    return stackAst
                } else if(Math.abs(newAst) === Math.abs(prevAst)){
                    //both destroyed: return
                    console.log("condition 2bII")
                    stackAst.pop()
                    stackAst.pop()
                    
                    running = false
                    return stackAst
                    
                } else {
                    //prev destroyed. replace with newAst 
                    console.log("condition 2bIII")
                    stackAst[previousPointer] = stackAst.pop()
                    //shuffle pointers, if possible
                    //check if more available in stack
                    if(stackAst.length > 1){
                        console.log("condition 2bIIIA")
                        
                        //shuffle pointers
                        newPointer--
                    } else {
                        console.log("condition 2bIIIB")
                        running = false
                        return stackAst
                    }
                }
            }
        } else {
            console.log("condition 3")

            running = false
            return stackAst
        }
    }
    
}

let asteroids = [1,1,-2,-2]


console.log(asteroidCollision(asteroids))