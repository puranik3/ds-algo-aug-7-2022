# Introduction to Algorithm Analysis

## Recursive function
Sum of numbers in an array

## Space and time complexity
- Time complexity
    - Example 1: Finding min in general array
    Find 101 in
    153 10 38 46 82 61 121 54 133 160 73 101 144 25 111 99
    
    - Example 2: Finding min in sorted array - linear vs binary search
    Find 101 in
    10 25 38 46 54 61 73 82 99 101 111 121 133 144 153 160
    
    - Example 3: Insertion sort
        - Best-case time complexity
        - Worst-case time complexity

- Space complexity
    - Example 1: Reverse an array in-place
    10 25 38 46 54 61 73 82 99 101 111 121 133 144 153 160
    
    - Example 2: Reverse an array using another array
    10 25 38 46 54 61 73 82 99 101 111 121 133 144 153 160
    
    - Time and space are often a trade-off

## Comparison of functions (Motivation)
- Example 1: Asymptotic comparison of growth rate in covid cases for 2 countries (doubing rate = 1 week with fewer cases vs 2 weeks with huge number of cases)

- Example 2:
    - n vs n^2
    - 100n vs n^2
    - 100n + 500 vs n^2
    - how one can never "sandwich" the other
    - lower order terms in the polynomial do not matter for large n

- Example 3:
    - 5n^2 + 10n vs 2n^2 + 100n

## Asymptotic Notations
1. Big O (Asymptotic upper bound - need not be tight): 2n = O( n^2 ), 2n^2 = O( n^2 ), n^3 ≠ O( n^2 )
O(g(n)) = {f(n): there exist positive constants c and n0 such that 0 ≤ f(n) ≤ c*g(n) for all n ≥ n0}.

2. Big Omega (Asymptotic lower bound - need not be tight) : 2n^2 + 4n = Ω(n), 2n = Ω(n), log n ≠ Ω(n)

3. Theta (Asymtotic tight bound) : 2n = Θ( n ), 2n^2 + 4n = Θ( n^2 ), n ≠ Θ( n^2 ), 0.0001n^2 ≠ Θ(n)

4. Little o (Aymptotic upper bound - necessarily not tight) - try as you may to vary c, curve of c*g(n) necessarily crosses curve of f(n) for some large n
o(g(n)) = {f(n) : for any positive constant c > 0, there exists a constant n0 > 0 such that 0 ≤ f(n) < c*g(n) for all n ≥ n0}.

5. Little ω (Asymtotic lower bound - necessarily not tight) - try as you may to vary c, curve of f(n) necessarily crosses curve of c*g(n) for some large n
ω(g(n)) = {f(n): for any positive constant c > 0, there exists a constant n0 > 0 such that 0 ≤ c*g(n) < f(n) for all n ≥ n0}.

## Comparison of functions
- constant time (eg. hash table / array access), log n, n, n log n, n^2, n^3, n^k, 2^n, n!

## Master theorem

### Motivation
- Example 1: Merge sort - T(n) = 2T(n/2) + n
    - By Substitution
    - By recursion tree

- Example 2: (Recurrence equation for a hypothetical problem) - T(n) = 3T(n/4) + n^2
    - By recursion tree

### Theorem
The master method provides a cookbook method for solving recurrences of the form

T(n) = aT(n/b) + f(n)

where a ≥ 1 and b > 1 are constants and f (n) is an asymptotically positive function. The master method requires memorization of three cases, but then the solution of many recurrences can be determined quite easily, often without pencil and paper.

## References
- https://web.iiit.ac.in/~pratik.kamble/storage/Algorithms/Cormen_Algorithms_3rd.pdf