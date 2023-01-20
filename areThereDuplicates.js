// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

//the args can be any data type....primitives only? and any number of args. but that doesn't matter unless it's a huge number. 

//we just have to find ANY duplicates, not the number of dupes. 

//to do it ON, two poinnters should allow you to iterate through only once at the most, moving from each end
//or map it to a freq counter once and check values. lets do freq counter.

//space ON: only need to store args in memory, plus a counter object, same size as args, or a counter var

//this is a variadic function: can call them with more args than formally declared. so declare 1 arg, cause it will have at least one. 

function duplicates (){
    //declare counter object
    let counter = {}
    console.log(counter)
    // we need to iterate through the arguments using the args object
    for(arg of arguments){
        //assign the value of counter[arg] key to be 1, if it doesn't exist yet.
        if(!counter[arg]){
            counter[arg] = 1
            console.log(counter)
            //if it exists already, then this one will be a duplicate, so return true
        } else {
            console.log(true)
            return true
        }
    }
    //if the whole counter object gets created, then  no dupes. return false
    console.log(false)
return false

}
//what if the args are all falsy values? works
//duplicates(null, undefined)

//do it as a binary search (mulitpointer)

function areThereDuplicates(...args){
   //first, sort args
   args.sort()
   console.log(args)
   //declare two pointers. because it's sorted, we only have to compare two consecutive args
   let start = 0
   let next = 1
   //iterate through the args. if any consecutive args are equal, true, if not, iterate start and next
   while(next < args.length){
    if(args[start] === args[next]){
        console.log(true)
        return true
        
    } else {
        start ++
        next ++
    }
}
//if never return true, then no dupes, return false
console.log(false)
   return false
}

areThereDuplicates(null, undefined, false, false, true)

//can't recognize complex data types. other one is better.