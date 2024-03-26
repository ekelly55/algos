//do it with frequency counter? two pointers?


function gcdS(str1, str2) {
   
  //from Leet code solutions

  //first, determine if they contain a common repeating substring. if there's any length of common repeating substring to them, up to the length of the shorter string, the transitive property will apply
  if(str1 + str2 !== str2 + str1){
    console.log("no match. return blank")
    return ""
  }
  //now we only deal with strings that have a common substring first find the shorter string

   
    let shorterStr = str1.length <= str2.length ? str1 : str2

    console.log(`shorter is ${shorterStr}`)

  //we know they contain repeating substring. now, we'll check divisibility of lengths to determine how long the GCD is

    // next, check if the length of the strings is divisible by the length of the greatest
    
    let maxLength = shorterStr.length
    //start maxLength of GCD at greatest length the GCD could be 
    let gcd = ""
    while(maxLength <= shorterStr.length){
            if(str1.length % maxLength === 0 && str2.length % maxLength === 0) { 
                gcd = str1.slice(0, maxLength)
                console.log(`maxLength of GCD is ${maxLength} GCD is ${gcd}`)
                return gcd
            } 
            maxLength --
            console.log(`not divisible decrementing maxLength to ${maxLength}`)
        } 
        return gcd
    }
 
//let's hardcode for the examples first

let str1 = "LEET"

let str2 = "CODE"

gcdS(str1,str2)

//pointer = 0
    //A === A
    //current = A
    //both divisible by 1

    //pointer++
//pointer less than ABAB
//pointer = 1
    //B === B
    //Greatest = AB
    //both divisible by 2
    //pointer ++
//pointer < ABAB
//pointer = 3
    //A === A
    //greatest = ABA
//pointer = 4
//pointer = 5



//previous leetcode attempt: 
// let greatest = ""
// let current = ""
// let copy1 = str1
// let copy2 = str2

// while(copy1 && copy2){
//     if(copy1.slice(0,1) === copy2.slice(0,1)){
//         current = current + copy1.slice(0,1)
//         copy1 = copy1.slice(1)
//         copy2 = copy2.slice(1)
//         if(str1.length % current.length === 0 && str2.length % current.length === 0){
//             greatest = current
//         }
//     } else {
//         break
//     }
// }
// if(greatest === copy1.slice(0, greatest.length)){
//     console.log(greatest + "1")
//     return greatest
// }
// if(greatest === copy2.slice(0, greatest.length)){
//     console.log(greatest + "2")
//     return greatest
// }
// if(greatest.length === 1){
//     if(str1[1] === greatest || str2[1] === greatest){

//         console.log(greatest +"3")
//         return greatest
//     } else {
//         console.log("no common divisor")
//         return ""
//     }
// }
// console.log("no common divisor 2")
// return ""
