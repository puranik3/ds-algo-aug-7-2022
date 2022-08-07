// Example 1: Finding min in general array
// Inputs - key (int), numbers (array).
const key = 102;
const numbers = [ 153, 10, 38, 46, 82, 61, 121, 54, 133, 160, 73, 101, 144, 25, 111, 99 ];

// Running time : T(n) = 3n + 4
function contains( numbers, key ) {
    for( let i = 0; i < numbers.length; i++ ) {
        if( numbers[i] == key ) {
            return true;
        }
    }

    return false;
}

console.log( contains( numbers, key ) );