// create a function that expects an array, and returns an array with the following logic:

// If the number to the right and left of the item are equal to 1 then change that item to 0.
// If there is no left or right item then the left or right should be treated as an item with the value 1.
// example:
// given:    [1,1,1,0,0,1,0]
// return:   [0,0,1,0,0,1,0]

function convertArrayContent(array) {
  const solution = [];
  if (array[1] === 1) {
    solution.push(0);
  } else {
    solution.push(array[0]);
  }
  for (let arrIndex = 1; arrIndex < array.length; arrIndex++) {
    if (arrIndex === array.length - 1 && array[arrIndex - 1] === 1) {
      solution.push(0);
      return solution;
    }
    if (array[arrIndex - 1] === 1 && array[arrIndex + 1] === 1) {
      solution.push(0);
    } else {
      solution.push(array[arrIndex]);
    }
  }
  return solution;
}
