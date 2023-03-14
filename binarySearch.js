function binSearch(arr, target){
    //declare pointers
    let left = 0
    let right = arr.length -1
    
    //if the middle is it, return it
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        console.log(`searching. middle is ${middle}, left is ${left} and right is ${right}`)
        if(arr[middle] === target){
            console.log(`${target} found at arr[${middle}]`)
            return middle
        }
    //this has to be in a while loop

        if(arr[middle] < target){
            //if target is above the middle, then shift right. so set left to middle + 1
            left = middle + 1
            console.log(`target is to the right of middle. shifted left index to${left}`)
        }
        //if middle is below target, we want to shift left, so set right to middle -1
        if(arr[middle] > target){
            right = middle - 1
            console.log(`target is to the left of middle. shifted right index to${right}`)
        }
    }
    //if you get through all this and don't find it, it's not there. return -1
    return -1
}

const states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

const states2 = ['MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']

console.log(binSearch(states2, 'SP'))