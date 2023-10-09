/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    const uniqueNums = Array.from(new Set(nums));

    // Sort the uniqueNums array in descending order
    uniqueNums.sort((a, b) => b - a);

    // Check if there are at least two distinct numbers in the array
    if (uniqueNums.length < 2) {
        return "The array doesn't have a second largest number.";
    }

    // The second largest number is at index 1 in the sorted array
    return uniqueNums[1];
}

