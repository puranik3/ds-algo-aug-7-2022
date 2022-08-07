// Sum of numbers in an array
const numbers = [ 10, 20, 30, 40 ];

// Anytime you can think of the solution of a problem, in terms of a simlar smaller problem(s) you can use recursion
// sum( 4 ) = sum( 3 ) + 4th number (40)
// sum( 3 ) = sum( 2 ) + 3rd number (30)
// sum( 2 ) = sum( 1 ) + 2nd number (20)

// base case
// sum( 1 ) = 10; // if we have just 1 number up, the sum is that number!

function sum( arr, n ) {
    if( n == 1 ) {
        return arr[0];
    }

    return sum( arr, n - 1 ) + arr[n - 1];
}

// the JS System.out.println()
console.log( sum( numbers, 4 ) );