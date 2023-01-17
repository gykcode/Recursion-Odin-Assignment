
// Assignment 2 - Merge-Sort - Use Recursion
const mergeSort = (array) => {
    // Base Case
    if (array.length === 0) return "Invalid Array Supplied";
    if (array.length === 1) return array;

    // Recursion
    const split = Math.floor(array.length / 2);
    const left = array.slice(0, split);
    const right = array.slice(split, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    // Merge both array parameters
    const result = [];
    let incomingLeft = 0;
    let incomingRight = 0;

    while (incomingLeft < left.length && incomingRight < right.length) {
        if (left[incomingLeft] < right[incomingRight]) {
            result.push(left[incomingLeft]);
            incomingLeft++;
        } else {
            result.push(right[incomingRight]);
            incomingRight++;
        }
    }

    while (incomingLeft < left.length) {
        result.push(left[incomingLeft]);
        incomingLeft++;
    }

    while (incomingRight < right.length) {
        result.push(right[incomingRight]);
        incomingRight++;
    }

    return result;
};

console.log("Merge-Sort Recursion:", mergeSort([-8, 5, 1, 9, 7, 15, -4, -2, 0]));