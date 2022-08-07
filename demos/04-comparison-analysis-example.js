// Example 1: Finding min in sorted array
// Inputs - key (int), numbers (array).
const key = 102;
const numbers = [ 10, 25, 38, 46, 54, 61, 73, 82, 99, 101, 111, 121, 133, 144, 153, 160 ];

// 32/2 = 16/2 = 8/2 = 4/2 = 2/2 = 1

// Step 1: T(n) = T(n/2) + 8 = ( T(n/4) + 8 ) + 8 = 8.logn
// Step 2: T(n/2) = T(n/4) + 8
// ... (log n steps)
// T(n) = 8 * log n (log is to the base 2)

function containsBinary( numbers, key, min, max ) {
    // Math.floor( ( 0 + 15 ) / 2 ) = Math.floor( 7.5 ) = 7
    let mid = Math.floor( ( min + max ) / 2 );

    if( numbers[mid] === key ) {
        return true;
    }

    if( max <= min ) {
        return false;
    }

    if( key > numbers[mid] ) {
        return containsBinary( numbers, key, min + 1, max )
    } else {
        return containsBinary( numbers, key, min, mid );
    }
}

console.log( containsBinary( numbers, key, 0, numbers.length - 1 ) );


// Running time : T(n) = 3n + 4
function containsLinear( numbers, key ) {
    for( let i = 0; i < numbers.length; i++ ) {
        if( numbers[i] == key ) {
            return true;
        }
    }

    return false;
}

console.log( containsLinear( numbers, key ) );