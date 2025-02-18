function isPrime(n){
    let range = (start, end) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    let factors = range(2, n-1)
    let length = factors.length
    // console.log(factors)
    for(factor in factors){

        if(n%factor !== 0){
            length--
        }
    }
    
    if(length !==0 ){

        return false
    }
    
    return true
}

console.log(isPrime(2))