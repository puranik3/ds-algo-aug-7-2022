## Binary search
T(n) = T(n/2) + 8
a = 1, b = 2, f(n) = 8 = O(n^0). Thus d = 0
b^d = 2^0 = 1

T(n) = O(n^0 * log n) = O(log n)

## Merge sort
Merge function: T(m) = O(7m+8) = O(m)

Merge sort algorithm: T(n) = 2T(n/2) + (7n + 8) + 3
T(n) = 2T(n/2) + 7n + 11
a = 2, b = 2
f(n) = 7n + 11 = O(n). Thus d = 1.

T(n) = Θ(nlog n)