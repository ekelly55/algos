// first write the algo for 10, since we know the result. then adjust for 1000
//will need a for loop and to iterate
//will need modulo operator

let sum = 0
function sumOfMults(num) {
    for(let i=0; i < num; i++)
    if(i % 3 === 0 || i % 5 === 0){
        sum = sum + i;
    }
    console.log(sum)
}

sumOfMults(1000)