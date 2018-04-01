---
title: insertion and merge sort
date: 2018-04-01
---

#Insertion and Merge Sort

Sorting an array is one of the cornerstone problems in computer science. In this post, we explore some algorithms for this task. All the code in this post can be found [here](../../CALGO/array_sort.c).

### Insertion Sort

Insertion sort begins with an array $A$. Suppose that $A$ is sorted up to index $i$. If we insert $A_{i+1}$ into the correct place, then $A$ will be sorted up to index $i+1$. This allows us to inductively sort the array. Here is a C procedure which does this:

```{.c}
void insertion_sort ( int *array, int length )

/*

  array is a pointer to the first element of the array
  length is the length of the array

*/

{
  int j;          /* index of the next element to be inserted */
  int i;          /* index for looping through the sorted part of array */
  int element;    /* next element to be inserted */

  for (j = 1; j < length; j++)
    {
      element = array[j];      /* store the element to be inserted */
      i = j - 1;               /* store the top index of the already sorted part */
      while ( (i >= 0) && (array[i] > element) )
        /*
          loop through the already sorted part
          searching for where element needs to be inserted.
          At the same time, we also move the parts bigger than element one
          spot to the right.
         */
        {
          array[i+1] = array[i];
          i = i - 1;
        }
      array[i+1] = element; /* slot element in */
    }
}
```
In terms of the length $L$ of the array, the space complexity of the algorithm is $O(1)$ and the time complexity is $O(L^2)$.
