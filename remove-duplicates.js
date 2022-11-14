//have to move duplicates to end of array. doesn't matter in what order. then return only the sorted, no duplicates part

//start from index 1, if it's === i-1, remove w splice, push onto end



function removeDuplicates(nums){
    console.log(nums)
    let k=nums.length
    for(i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            nums.push("_")
            nums.splice(i, 1)
            console.log(nums)
            k-=1
        }
    }
    console.log(nums)
    return k
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))