// Assignment #1
// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000

const { log } = require('console');
const crypto = require('crypto');
function findZeros(){
    for (let i = 0; i >= 0; i++) {
        const hash = crypto.createHash('sha256').update(`${i}`).digest('hex');
        if(hash.slice(0,5) == '00000'){
            return [hash,i];
        }
    }
}
console.log(findZeros());






// COHORT ANSWER CODE
// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);