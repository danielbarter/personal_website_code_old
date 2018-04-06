typedef struct
{
  /* array of pointers */
  void **array;

  /* length of array */
  int length;

  /*
    heap size represents how many elements in the heap are stored in array.
    The heap is array[1..heap_size] where 0 <= heap_size <= length.
    The array is array[1..length]
   */
  int heap_size;

  /*
    compare points to a procedure which computes *ptr1 < *ptr2
   */
  int (*compare)(void *ptr1, void *ptr2);


} heap;

/*
  in CLRS, arrays begin their indexing at 1. For Binary heaps, this makes the algorithms look a bit nicer, so we shall use their indexing, with getters and setters to update the array.
*/

inline void *get(heap *h, int i){ return h->array[i+1];}
inline void *set(heap *h, int i, void *ptr){ return (h->array[i+1]) = ptr;}


/* the data in a binary heap represents a complete binary tree. */

inline int parent(int i){ return i/2;}
inline int left(int i){ return 2*i;}
inline int right(int i){ return 2*i + 1;}

/* In a max binary heap, the max property is array[parent(i)] >= array[i] */
