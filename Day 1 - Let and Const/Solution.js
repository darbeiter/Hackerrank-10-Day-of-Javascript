function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    
    // Print the area of the circle:
    
    // Print the perimeter of the circle:
// Declare a constant variable PI and assign it the value Math.PI
const PI = Math.PI;

// Read the radius of the circle from stdin
const radius = parseFloat(readLine());

// Calculate the area and circumference of the circle
const area = PI * Math.pow(radius, 2);
const circumference = 2 * PI * radius;

// Print the area and circumference
console.log(area);
console.log(circumference);
}