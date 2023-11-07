
const mergeTwoArrays = function(list1, list2) {
    let index1 = 0; 
    let index2 = 0;
    let solution = []
    while(index1 < list1.length || index2 < list2.length) {
        if(index1 < list1.length && index2 < list2.length) {
            if(list1[index1] === list2[index2]) {
                solution.push(list1[index1], list2[index2])
                index1++
                index2++
            }
            else if(list1[index1] < list2[index2]) {
                solution.push(list1[index1])
                index1++
            }
            else if(list1[index1] > list2[index2]) {
                solution.push(list2[index2])
                index2++
            }
        } else {
            if(index1 < list1.length ){
                solution.push(list1[index1])
                index1++
            }
            if(index2 < list2.length ){
                solution.push(list2[index2])
                index2++
            }
        }
    }
    return solution;
}
const mergeTwoLists = function(list1, list2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};