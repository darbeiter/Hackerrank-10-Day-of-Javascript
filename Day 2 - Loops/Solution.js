/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let vowelsOutput = '';
    let consonantsOutput = '';

    for (let i = 0; i < s.length; i++) {
        const currentChar = s[i].toLowerCase(); // Convert to lowercase for case insensitivity

        if (vowels.includes(currentChar)) {
            vowelsOutput += currentChar + '\n';
        } else {
            consonantsOutput += currentChar + '\n';
        }
    }

    // Print vowels followed by consonants
    console.log(vowelsOutput + consonantsOutput);
}

