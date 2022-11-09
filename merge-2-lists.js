


function mergeTwoLists(list1, list2){
    let list3 = []
    console.log(list3)
    if(list2[0] >= list1[list1.length-1]){
        for(i=0; i<list2.length; i++){
            list3.push(list2[i])
        }
    }
    if(list2[list2.length-1] <= list1[0]){
        for(i=0; i<list2.length; i++){
            list3.unshift(list2[i])
        }
    } else {
    for(i=0; i<list2.length; i++){
        list3.push(list2[i])
        for(j=0; j<list1.length; j++)
            if(list2[i] >= list1[j]){
                list3.push(list2[i])
                console.log(list3)
            } else {
                list3.push(list1[j])
                console.log(list3)
            }
        }
    }
    console.log(list3)
    return list3
}

mergeTwoLists([1, 2, 4], [1, 3, 4])