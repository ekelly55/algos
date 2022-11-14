function recurseThis(string){

    if(string.length === 0){

        return "it's done"
    } else {
        console.log(string)
        
        recurseThis(string.slice(0, string.length-2))
    }
}

//recurseThis("this is recursion")

function sumArrayOfNums(arr, index=0, sum=0){
    if(index === arr.length){
        return sum;
    }
    sum += arr[index]
    console.log(sum)
    return sumArrayOfNums(arr, index +1, sum)

}

console.log(sumArrayOfNums([2, 4, 5, 8]))