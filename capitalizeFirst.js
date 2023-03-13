//given arr of strings, cap first letter of each string string[0].toUpperCase(). recur with  incrememnted iterator. when arr i = arr.length, return the arr

function capFirst(arr){
    //declare output array
    let output = [] 
    //base case
    if(arr.length === 0){
        console.log(output)
        return output
    }
    //declare and transform current element
    console.log(`arr is ${arr}`)
    current = arr[0][0].toUpperCase() + arr[0].slice(1)
    output.push(current)
    console.log(`output is ${output}`)
    
    output = output.concat(capFirst(arr.slice(1)))
    console.log(`output is ${output}`)
    return output


}

arr = ['hello', 'my', 'name', 'is', 'eamonn']

// capFirst(arr)

//can also use spread operator...what is that?

// console.log(arr[0][0].toUpperCase())

function capFirstHelper(arr){
    output = []
    //this is the function where you'll do recursion, but why no return recursive func? the outer func is just used to hold the output object and return it
    function helper(arr){
        console.log(`calling helper() on ${arr}`)
        if(arr.length === 0){
            //we don't need to return anything...here we just want the recursion to stop when we've completed the output array
            return
        }
        current = arr[0][0].toUpperCase() + arr[0].slice(1)
        output.push(current)
        console.log(output)
        helper(arr.slice(1))
    }
    //we only call it once here, b/c  the recursion happens in the helper function. that way, we don't have to do a function on the array,then call helper on a sliced array. that happens in the helper func
    helper(arr)

    console.log(output)
    return output
}

capFirstHelper(arr)