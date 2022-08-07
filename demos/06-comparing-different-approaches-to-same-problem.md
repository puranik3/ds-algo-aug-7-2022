T1(n) -> running time for algorithm 1 to a problem (insertion sort)
T2(n) -> running time for algorithm 2 to a problem (merge sort)

T1(n) = O(n^2) = O(n * n)
T2(n) = O(n * log n)

    n * n           n * log n
8   64              8 * 3 = 24
16  256             16 * 4 = 64
32  1024            32 * 5  = 160

Definitely, merge sort is preferred as number of steps grows at much slower pace