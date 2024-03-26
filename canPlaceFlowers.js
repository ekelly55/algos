
//need to iterate and count number of adjacent 0s
//BUT one can be planted in a series of 3 adjacent 0s, but 2 can be planted in 5. 
//if n = 1, as soon as we reach 0 adjacent zeros, it's true. 
//don't want to hardcode how many 0s required for n. what's the formula?

/*

formulae:

let x = totalZcount
let c = totalCapacity
let z = adjZcount
let y = sequenceCapacity

[000] 2
x = 3, c = 2
z = 3, y = 2

for odds, y = (z+1)/2 regardless of floor or ceiling
ceilz/2 = ceil 1.5 = 2 CORRECT
floor z+1 / 2 = floor 4/2 = 2 CORRECT

[0000] 2
x = 4 c = 2
z = 4 y = 2

for evens

y = ceil((z)/2) = ceil(4/2) = ceil(2) = 2 CORRECT
y = floor((z+1)/2) = floor(5/2) = floor(2.5) = 2 CORRECT

y = z/2

[00000] 3
x = 5 c = 3
z = 5 y = 3

y = (z+1)/2

[000000] 3
x = 6 c = 3
z = 6 y = 3

y = z/2 

[0000000] 4
x = 7 c = 4
z = 7 y = 4

y = (z + 1)/2

for all zero arr, even zerocount is the same capacity as the odd that preceeded it, but the formulae are different
we can use the same formula if we just do Math._______:

capacity = Math.FLOOR((adjZcount + 1)/2)


[10001] 1
x = 3 c = 1
z = 3 y = 1

y = (z-1)/2 
1 = 1.5 -.5

y = Math.FLOOR(z-1)/2
y = floor(2/2) = floor(1) = 1

Math.floor will be same

[100001]
z = 4 y = 1

y = (z - 2)/2
1 = 2 - 1
y = Math.FLOOR(z)/2 = FLOOR(4/2) = FLOOR(2)  = 2 INCORRECT

y = Math.floor(z-1)/2 = floor(3/2) = floor(1.5) = 1   CORRECT

[1000001]
z = 5 y = 2

y = (z-1)/2
2 = 2.5 - .5

[10000001]
z = 6 y = 2

y = (z-2)/2

2 = 3 - 1

again, if we use Math.floor here, we should be able to use one formula - Math.floor[(y-1)/2]


[00100] 2
x = 4 c = 2
z = 2 y = 1

y = z/2

[001000001000] 4
x = 10 c = 4
z = 2 y = 1, z = 5 y = 2, z = 3 y = 1

y = Math.FLOOR(z-1)/2), y = Math.floor(z-1)/2, y = Math.FLOOR(z-1)/2)

[0] 1
x = 1, c = 1
z = 1 y = 1

y = z


IF sequence with beginning or ending zeros, use:

capacity calculation = Math.CEIL((adjZcount/2)

IF sequence is in middle of array, use: 

Math.floor(z-1)/2

instead of a different formula, is it possible to just adjust based on if it begins or ends with zero? can we just add one?


what is max diff between the two?

arr1 = 00000
capacity = ceil.5/2 = 3

arr2 = 1000001
capacity = floor(5-1)/2 = floor(4/2) = 2

arr1b = 100000
c = ceil(5/2) = 3 FALSE
c = floor(5-1)/2 = floor4/2 = 2 TRUE

arr2b = 000001
c = ceil(5/2) = 3 FALSE
c = floor(5-2)/2 = 2 TRUE

arr3 = 0000
c = ceil.4/2 = 2

arr4 = 100001
c = floor(4-1)/2 = floor3/2 = 1

arr5 = 10000
c = ceil4/2 = 2 TRUE
c = floor(4-1)/2 = floor 3/2 = 1 FALSE

arr6 = 00001
ceil4/2 = 2 TRUE
floor3/2 = 1 FALSE

arr7 = 10001000001
with F formla: c1 = 1, c2 = 2 c total = 3 TRUE
with C formula: c1 = 2 FALSE

arr8 = 1000100000100
with F formula: c1 = 1, c2 = 2, c3 = floor(1/2) = 0 FALSE
with C formula: c1 = 2 FALSE

arr9 = 0010001000001
with F formula: c1 = floor(2-1)/2 = floor 1/2 = 0 FALSE

arr10 = 10001000001000
with F c1 = 1, c2 = 2, c3 = 1 TRUE
with C FALSE

arr11 = 00010001000001
with F c1 = 1 ... TRUE
with C FALSE 



will ceil(z/2) always = floor(z-1)/2) + 1? if arr.len > 1? let's try

lets call the ceil formula C and floor formula F

conditions
all zeroes: use C formula
middle zeroes: F formula TRUE IF ODD OR EVEN NUM OF ZEROS!
odd num seq of zeroes at start or end: F formula
even num seq of zeroes at start or end: C formula

SO when calculating = use the simpler formula C, then add 1 depending on the condition




 */

function canPlaceFlowers(flowerbed, n) {

    //should we use a counter?
    //lets start simple and just keep a count of the 0s

    //count adjacent zeros
    //flowers CAN be planted at the ends 

    let adjZeroCount = 0
    //once hit a 1, set adjzerocount back to 0 and increment capaccity... count
    //track series large enough to plat at least one
    //but how do we determine how many it can hold? apply the formula?
    let capacityCount = 0

    //we need to keep track of if the arr starts or ends with zero
    let startAtZero = false
    let endAtZero = false
    let sequenceDone = false

    if(n < 1 || flowerbed.length < 1){

        console.log(true)
        return true
    }

    //edge case = arr = [0]
    if(flowerbed.length === 1 && flowerbed[0] === 0){
        console.log(n === 1)
        return n === 1
        //check if array is [0], return True if n === 1 (can fit) or false (can't fit)
    }

    for(i=0; i<flowerbed.length; i++){
        
        console.log(`iterating index ${i} current adjzerocount =  ${adjZeroCount} current capacitycount = ${capacityCount}`)
        if(flowerbed[i] === 0){
            adjZeroCount ++
            //this is always true. what can change is the way the capacity is calculated
            console.log(`place is ${flowerbed[i]} new adjzerocount =  ${adjZeroCount} `)
            if(i === 0){
                startAtZero = true
                console.log(`arr starts with 0. startAtZero = ${startAtZero}`)
            }
            if(i === flowerbed.length - 1){
                endAtZero = true
                //if it's the end of the array, then seq done
                sequenceDone = true
                console.log(`arr ends with 0. endAtZero = ${endAtZero} sequence is done ${sequenceDone}`)
            }
        } else {
            //if there's no next zero, then seq done
            sequenceDone = true
            console.log(`no 0. sequence is done ${sequenceDone}`)

        }
        if(sequenceDone){
            //now we know that we're at the end of a sequence b/c or the end of the arr, so either way the seq is done
            console.log(`place is ${flowerbed[i]} end current adjzerocount at ${adjZeroCount} `)
            //if adjacent zero seq ends, take the total num of zeros in the sequence and apply the formula. update the capacity count
            console.log(`calculate capacitycount. currently equals ${capacityCount}`)
            //we can consolidate these. start at zero or end at zero are the base formula. if it's a middle sequence, - 1/2. if it's a full array, + 1
            
            capacityCount = Math.max(capacityCount + Math.ceil((adjZeroCount)/2), 0)
            console.log(`new capacitycount = ${capacityCount} adjustments to follow if necessary`)
            //here we make adjustments - if ONLY start at zero OR end at zero (not both) is true AND it's an odd sequence of 0s, adjust capacity down by 1
            if(startAtZero && !endAtZero && adjZeroCount % 2 !== 0 && capacityCount !==0){
                capacityCount = capacityCount - 1
                console.log(`starts with odd number of zeroes. capacity count adjusted to ${capacityCount}`)
            }
            if(endAtZero && !startAtZero && adjZeroCount % 2 !== 0 && capacityCount !==0){
                capacityCount = capacityCount - 1
                console.log(`ends with odd number of zeroes. capacity count adjusted to ${capacityCount}`)
            }
            if(!endAtZero && !startAtZero && capacityCount !==0){
                //adjust capacity count for internal sequences of 0s, regardless of even or odd
                capacityCount = capacityCount - 1
                console.log(`sequence is in middle of arr. capacity count adjusted to ${capacityCount}`)

                
            }
            //then reset conditions for next iteration
            adjZeroCount = 0
            sequenceDone = false
            startAtZero = false
            endAtZero = false



            console.log(`0 sequence ended. capacitycount = ${capacityCount} adjzerocount back to  ${adjZeroCount} conditions reset`)
            }
        }
        

    console.log(capacityCount >= n)
    return capacityCount >= n
    
};

flowerbed = [0]

n = 2

canPlaceFlowers(flowerbed, n)

/* 
LeetCode 605

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:

1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length*/