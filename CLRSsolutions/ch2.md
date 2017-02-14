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

**2.2-3.** Suppose that the array has length $n$. If the value is in position $k$, then the procedure returns in time $\Theta(k)$. Assuming that each position has probability $1/n$, the expected runtime is $\Theta(n)$. The worst case runtime is also $\Theta(n)$.

**2.2-4.** Take for example selection sort. As written above, the best case runtime is $\Theta(n^2)$. If we first check to see if the array is already sorted, the best case runtime becomes $\Theta(n)$. 

**2.3-1.** 
```{.algorithm}
           3,9,26,38,41,49,52,57
           /                  \
    3,26,41,52                9,38,49,57
     /       \                 /       \
 3,41        26,52        38,57        9,49
 /  \         /  \         / \         /  \
3   41      52   26      38   57      9   49
```

**2.3-2.** 
```{.algorithm}
merge(A,p,q,r)
  n1 = q - p + 1
  n2 = r - q
  let L[1..n1] and R[1..n2] be new arrays

  for i = 1 to n1
    L[i] = A[p+i-1]
  for j = 1 ro n2
    R[j] = A[q+j]

  i = 1
  j = 1

  for k = p to r
    case 
      i == n1 + 1
        A[k] = R[j]
        j = j + 1
        break
      j == n2 + 1
        A[k] = L[i]
        i = i + 1
        break
      L[i] <= R[j]
        A[k] = L[i]
        i = i + 1
        break
      else
        A[k] = R[j]
        j = j + 1
        break
```

**2.3-3.** This is true because $T(n) = 2 T(n/2^k) + kn$.

**2.3-4.** First here is a procedure for inserting a value into a sorted list:
```{.algorithm}
// A is an array with n elements
// supposing that A[1..p] is sorted, insert takes A[p+1] and fits it into A[1..p] so that the result A[1..p+1] is sorted.

insert(A,p)
  v = A[p+1]
  i = p
  while i > 0 and key < A[i]
    A[i+1] = A[i]
    i = i - 1
  A[i+1] = v
```
The procedure insert has worst case running time $\Theta(p)$. 

```{.algorithm}
insertionSortRec(A,n)
   if n > 1
     insertionSortRec(A,n-1)
     insert(A,n-1)
```
If $T(n)$ is the worst case running time for insertionSortRec, then we have something like $T(n) = T(n-1) + n$ which gives us $T(n) = n^2$. This procedure also allocates $n$ stack frames, so in terms of space complexity, it is strictly worse than the iterative version which runs in constant space.

**2.3-5.**
Here is one possible algorithm:
```{.algorithm}
// binarySearch requires the array A to be sorted.
// we seach for the value between indexes p and q inclusive.
binarySearch(A,p,q,v)
  if p == q
    if A[p] == v
      return p
    else
      return nil
  else
    r1 = binarySearch(A,p,floor((p+q)/2),v)
    r2 = binarySearch(A,floor((p+q)/2) + 1,q,v)
  
  return seq(r1,r2)
  
seq(r1,r2)
  if r1 == nil
    return r2
  else
    return r1
```
Let $T(n)$ be the worst case runtime of `binarySearch(A,1,n,v)`. Then roughly, we have $T(n) = 2 T(n/2) + c$ and $T(n) \geq cn$, so this is not good. A better approach is
```{.algorithm}
binarySearch(A,p,q,v)
  if p == q
    if A[p] == v
      return p
    else
      return nil
  
  m = floor((p+q)/2)
  if v <= A[m]
    return binarySearch(A,p,m,v)
  else
    return binarySearch(A,m + 1,q,v)
```
Then we have $T(n) = T(n/2) + 1$ which gives $T(n) = \Theta(\log n)$

**2.3-6.** I don\'t see an obvious way to do this. The issue is that binary search will allow us to find the correct spot in logarithmic time, but it will still take linear time to build the new array with the value inserted. 

**2.3-7.** Suppose that the integers are presented to us in an array `A` and we want to decide if `x` is the sum of two elements in `A`. 
```{.algorithm}
sumOfTwo(A,x)
  mergeSort(A,1,A.length)
  for i = 1 to (A.length - 1)
    maybej = binarySearch(A,i+1,A.length,x - A[i])
    if j != nil
      return i,j
  return nil
```
If $n$ is the size of the array, then `mergeSort` has worst case runtime $\Theta(n \log n)$ and the loop has worst case runtime $O(\log n + \log (n-1) + ...)$. Therefore `sumofTwo` has worst case runtime $\Theta(n \log n)$.

**2-1-a.** Firstly, it is easy to modify the `insertionSort` procedure so that it takes a start and end index in the array and sorts the corresponding sub array. Also for simplicity, we assume that k divides n. Then we have
```{.algorithm}
insertionSortLeaves(A,k,n)
  for i = 1 to (n/k)
    insertionSort(A,(i-1)*k + 1,i*k)
```
The worst case run time for `insertionSortLeaves` is $\Theta(k^2 * n/k ) = \Theta(nk)$.

**2-1-b.** Inorder to merge the already sorted chunks, we modify the `mergeSort` algorithm to use box numbers instead of array indexes:
```{.algorithm}
// p and q are box numbers, not indexes
mergeLeaves(A,k,p,q)
  if p < q
    m = floor((p + q)/2)
    mergeLeaves(A,k,p,m)
    mergeLeaves(A,k,m+1,q)
    merge(A,(p-1)*k+1,q*k)
```
The worst case runtime satisfies $T(n,k) = 2 T(n/2,k) + n$ which implies that $T(n,k) = n * \log(n/k)$.

**2-1-c.** Since $nk + n \log(n/k) = n (k - \log k) + n \log n$, if we take $k = O(\log n)$, then we will have the same asymptotic runtime as merge sort.

**2-1-d.** With our current analysis we have no understanding of the lower order terms or constants in the worst case runtime. In practice, $k$ should be chosen empirically, guided by $k= O(\log n)$.

**2-2.** The inner loop in `bubbleSort` moves the smallest value in `A[i..]` into position `i`. In the following example, `>` denotes the outer loop and `<` denotes the inner loop:
```{.algorithm}
>4,3,1,2<
>4,3,1<,2
>4,1<,3,2
1,>4,3,2<
```
The array is sorted by repeatedly moving the smallest value in what remains to the index maintained by the outer loop. The worstcase running time for `bubbleSort` is $\Theta(n^2)$ where $n$ is the length of the array. The best case running time for bubble sort is also $\Theta(n^2)$, while the best case running time for `insertionSort` is $\Theta(n)$.

**2-3.** Here is the pseudocode for Horner\'s rule:
```{.algorithm}
horner(A,x)
  y = 0
  for i = n downto 0
    y = A[i] + x * y
  return y
```
the runtime for horner is $\Theta(n)$. Here is the pseudocode for niave polynomial evaluation:
```{.algorithm}
niave(A,x)
  y = 0
  for i = 0 to n
    power = 1
    for j = 1 to i
      power = power * x
    y = y + A[i] * power
```
the niave version has runtime $\Theta(n^2)$.

**2-4.** Inversions in the sequence $a_1,a_2,\dots,a_n,b_1,b_2,\dots,b_m$ with no repeats are either 

- inversions in $a_1,a_2,\dots,a_n$
- inversions in $b_1,b_2,\dots,b_m$
- inversions in $a_1',a_2',\dots,a_n',b_1',b_2',\dots,b_m'$ where $a_1',\dots,a_n'$ is $a_1,\dots,a_n$ sorted and $b_1',\dots,b_m'$ is $b_1,\dots,b_m$ sorted.

First we need to modify the `merge` procedure to also compute inversions. Consider the sequence $a_1',a_2',\dots,a_n',b_1',b_2',\dots,b_m'$ described above. If $b_1' < a_1'$ then $b_1' < a_i'$ for each $i$ so we have $n$ inversions which involve $b_1'$.
```{.algorithm}
mergeInversion(A,p,q,r)
  n1 = q - p + 1
  n2 = r - q
  let L[1..n1 + 1] and R[1..n2 + 1] be new arrays
  for i = 1 to n1
    L[i] = A[p+i-1]
  for j = 1 to n2
    R[j] = A[q+j]
  L[n1+1] = inf
  R[n2+1] = inf
  i = 1
  j = 1
  counter = 0
  for k = p to r
    if L[i] <= R[j]
      A[k] = L[i]
      i = i + 1
    else 
      A[k] = R[j]
      j = j + 1
      counter = n1 - i + 1
  return counter
```
We maintain a counter and everytime we pick an element from the right array, we add the size of the left array to the counter. This computes the number of inversions. Now we modify `mergeSort`:
```{.algorithm}
mergeSortInversion(A,p,r)
  if p < r 
    q = floor((p+r)/2)
    l = mergeSortInversion(A,p,q)
    r = mergeSortInversion(A,q+1,r)
    m = mergeInversion(A,p,q,r)
    return l + r + m
  return 0
```
