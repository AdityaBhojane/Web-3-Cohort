
// Assignment #2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?


const { log } = require('console');
const crypto = require('crypto');
function findZeros(prefix){
    for (let i = 0; i >= 0; i++) {
        const hash = crypto.createHash('sha256').update(`${prefix}${i}`).digest('hex');
        if(hash.slice(0,5) == '00000'){
            return [hash,i];
        }
    }
}
console.log(findZeros('100xDevs'));

// [
//     '00000c7b806822bbc48ad06dfa256e959426dd8df76cdd3e13c1c1ae7ee8c1b3',
//     1230817
//  ]




// COHORT SOLUTION 
// Function to find an input string that produces a hash starting with '00000'
function findHashWithPrefix(prefix) {
    let input = 0;
    while (true) {
        let inputStr = "100xdevs" + input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;
    }
}

// Find and print the input string and hash
const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);