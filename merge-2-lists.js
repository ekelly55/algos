


function mergeTwoLists(list1, list2){
    let list3 = list1
    console.log(list3)
    for(i=0; i<list2.length; i++){
        for(j=list3.length-1; j>=0; j--){
            if(list2[i] <= list3[j]){
                list3.splice(list3[j-1], 0, list2[i])
                console.log(list3)
            } else {
                list3.push(list2[i])
                console.log(list3)
            }
        }
    }
    return list3
}

mergeTwoLists([1, 2, 4], [1, 3, 4])