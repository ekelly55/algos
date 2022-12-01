function recurseThis(string){

    if(string.length === 0){

        return "it's done"
    } else {
        console.log(string)
        
        recurseThis(string.slice(0, string.length-2))
    }
}

//recurseThis("this is recursion")

let sum = 0
let index = 0

function sumArrayOfNums(arr){
    if(index === arr.length){
        return sum;
    }
    sum += arr[index]
    index+=1
    // console.log(sum)
    return sumArrayOfNums(arr)

}

console.log(sumArrayOfNums([2, 4, 5, 8]))