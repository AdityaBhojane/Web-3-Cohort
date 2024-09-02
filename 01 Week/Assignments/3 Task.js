// Assignment #3
// What if I ask you to find a nonce for the following input - 

// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10


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
console.log(findZeros('harkirat => Raman | Rs 100'));
console.log(findZeros('harkirat => Raman | Rs 100 Ram => Ankit | Rs 10'));

// [
//     '00000b108a829e7b5340a1bb3ae4bfca283e22df56da5d1bf7a308ffd09f7b60',
//     1469842
//   ]
  

// [
//     '00000780594bad6a25d5a240f9a3a399521979f1b320cd13658fe1232bf2d688',
//     1935085
//   ]