var mergeTwoLists = function(list1, list2) {
    const newList = []
    for (i=0; i<list1.length || i<list2.length; i++){
        if (i<list1.length){
            newList.push(list1[i])
        }
        if(i<list2.length){
            newList.push(list2[i])
        }
    }
    return newList
};