/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        // Try to reverse the string using split, reverse, and join methods
        const reversedString = s.split('').reverse().join('');
        console.log(reversedString);
    } catch (e) {
        // Catch and print any exceptions
        console.log(e.message);
        console.log(s)
    } 
}

