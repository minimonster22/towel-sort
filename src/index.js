
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }

    const sortedArray = [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            // If the row index is even, append the elements in the row from left to right.
            sortedArray.push(...matrix[i]);
        } else {
            // If the row index is odd, append the elements in the row from right to left.
            sortedArray.push(...matrix[i].reverse());
        }
    }

    return sortedArray;
}
