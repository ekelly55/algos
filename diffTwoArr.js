/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    
    //now iterate through set1 and check if each val appears in set2
    for(num of set1){
        if(set2.has(num)){
            set1.delete(num)
            set2.delete(num)
        }
    }
    
    let returnList = [[...set1], [...set2]]
    // let list1 = [...set1]
    // returnList.push(list1)
    // let list2 = [...set2]
    // returnList.push(list2)
    // let returnList = [list1]
    return returnList

};

let nums1 = [1, 2, 3]
let nums2 = [2, 4, 6]

console.log(findDifference(nums1, nums2))