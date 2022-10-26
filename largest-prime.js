function prime(num) {
    if(num < 2) {
        return false
    }
    for(let i=2; i<= Math.sqrt(num); i++) {
        if(num%i === 0 || num%2 === 0)  {
        return false;
        }
    }
    return true;
}


function factor(num) {
    let factors = []
    for(i=0; i <= num; i++){
        if(num%i === 0){
            factors.push(i)
        }
    }
    return factors
}

function largestPrimeFactor(num){
    if(prime(num)) {
        return num
    }
    for(i = num; i > 0; i--) {
        if(prime(i) && num%i === 0){
            return i
        }
    }
    return "no prime factors"
}

    //first, check if it's a prime number. if so, return the num
    // if not, loop. on each loop, check its factors, check if it's prime. if so, push into array ch
    
    //last, return greatest value

console.log(largestPrimeFactor(1))
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(100))
console.log(largestPrimeFactor(24))

console.log(largestPrimeFactor(24))
console.log(largestPrimeFactor(24))
console.log(largestPrimeFactor(24))
console.log(largestPrimeFactor(24))

