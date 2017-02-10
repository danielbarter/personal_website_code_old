---
title: ch2
---

# CLRS Chapter 2

**2.1-1.** The bar `|` denotes the boundry between sorted and unsorted. The `*` denotes the spot for the next insertion.
```{.algorithm}
31,41,59,26,41,58 -> 31,*|41,59,26,41,58
                  -> 31,41,*|59,26,41,58
                  -> *,31,41,59|26,41,58
                  -> 26,31,41,*,59|41,58
                  -> 26,41,41,51,*,59|58
-> 26,41,41,51,58,59
```

**2.1-2.** Given that we are using a computation model similar to that of C, we can pass function pointers as arguments to procedures.

```{.algorithm}
insertionSort(A,f)
  for j = 2 to A.length
  key = A[j]
  i = j - 1
  while i > 0 and f(key,A[i])
    A[i+1] = A[i]
    i = i - 1
  A[i+1] = key
```
We are assuming that `f` is a procedure which takes two numbers and returns true or false. We can get the desired effect using the following procedures:
```{.algorithm}
// for normal insertion sort
f(x,y)
  return (x < y)
  
// for sorting into nonincreasing order
g(x,y)
  return (y < x)
```

**2.1-3.** Here is the procedure:

```{.algorithm}
linearSearch(A,v)
  for i = 1 to A.length
    if A[i] == v 
    then return i
  return nil
```
If the list doesn\'t contain `v`, then the if condition is never satisfied, so we return `nil`. If the list does contain `v`, then after the first time `A[i] == v`, we return `i`.

**2.1-4.**
First, lets state the problem formally. **Input:** Two length $n$ arrays $A$ and $B$ of binary digits. **Output:** A length $n+1$ array $C$ which contains the sum.
```{.algorithm}
// binaryPlus(x,y,z) is a procedure which adds the binary digits x and y. It returns c,s which is the carry and the sum.

binaryAdd(A,B,C,n)
  c = 0
  for i = 1 to n
    c,s = binaryPlus(A[i],B[i],c)
    C[i] = s
  C[n+1] = c
```

**2.2-1.** $\Theta(n^3)$

**2.2-2.** Here is the pseudocode for selection sort:
```{.algorithm}
// n is the length of the array
selectionSort(A,n)
  for i = 1 to (n - 1)
    j = minimumIndex(A[i:],n-i+1)
    swap(&A[i],&A[j])
    
minimumIndex(B,m)
  min = 1
  for k = 2 to m
    if B[k] < B[min]
      min = k
  return min
  
// p and q are pointers
// constant time
swap(p,q)
  x = *p
  *p = *q
  *q = x
```
Since repeatedly picking the index with the smallest value produces an increasing sequence, once selectionSort finishes, the array will be sorted. Since the last element is never picked, it is larger than all the others. The procedure swap has runtime $\Theta(1)$ and the procedure minimumIndex has runtime $\Theta(m)$. Both the best and worst case runtimes are $\Theta(n^2)$.

**2.2-3.**
