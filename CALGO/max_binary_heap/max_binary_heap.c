typedef struct
{
  /* array of pointers */
  void **array;

  /* length of array */
  int length;

  /*
    length of heap. Not all elements in the array are part of the heap.
    The array is array[1..length].
    The heap is array[1..heap_size].
    When heap_size < length, then array[heap_size + 1..length] is extra space.
   */
  int heap_size;

  /*
    compare points to a procedure which computes *ptr1 < *ptr2
   */
  int (*compare)(void *ptr1, void *ptr2);


} heap;

void *get(heap *h, int i);
void *set(heap *h, int i, void *ptr);
int parent(int i);
int left(int i);
int right(int i);
void max_heapify(heap *h, int i);
void build_max_heap(heap *h);
void heapsort(heap *h);



/*
  in CLRS, arrays begin their indexing at 1. For Binary heaps, this makes the algorithms look a bit nicer, so we shall use their indexing, with getters and setters to update the array.
*/

inline void *get(heap *h, int i){ return h->array[i-1];}
inline void *set(heap *h, int i, void *ptr){ return (h->array[i-1]) = ptr;}


/* the data in a binary heap represents a complete binary tree. */

inline int parent(int i){ return i/2;}
inline int left(int i){ return 2*i;}
inline int right(int i){ return 2*i + 1;}

/*
  In a max binary heap, the max property is array[parent(i)] >= array[i]

  when called, max_heapify assumes that the binary trees rooted at left(i)
  and right(i) are max heaps, but array[i] might be smaller than its children.

  max_heapify lets the value at array[i] float down, so that the subtree rooted
  at index i obeys the max heap property.

*/

void max_heapify(heap *h, int i)
{
  int l = left(i);
  int r = right(i);

  int largest;
  void *temp;

  /* determine which is larger out of A[i], A[l], A[r].  */
  if ((l <= h->heap_size) && ( (*h->compare)( get(h,i), get(h,l) ) ) )
    largest = l;
  else largest = i;

  if ((r <= h->heap_size)  && ( (*h->compare)( get(h,largest), get(h,r) ) ) )
    largest = r;


  /* swap A[i] and A[largest] */
  if (largest != i)
    {
      temp = get(h,largest);
      set(h, largest, get(h,i));
      set(h, i, temp);
      max_heapify(h,largest);
    }
}

/*
  the build max heap procedure should be passed a heap data structure with:
    the data contained in h.array.
    the array length h.length.
    h.heap_size = 0
    h.compare the comparison procedure pointer.
 */

void build_max_heap(heap *h)
{
  int i;

  h->heap_size = h->length;

  for (i = h->length/2; i >= 1;i--)
    max_heapify(h,i);
}

/*
  the build max heap procedure should be passed a heap data structure with:
  the data contained in h.array.
  the array length h.length.
  h.heap_size = 0
  h.compare the comparison procedure pointer.
*/
void heapsort(heap *h)
{
  int i;
  void *temp;
  build_max_heap(h);
  for (i = h->length; i >= 2; i--)
    {
      temp = get(h,1);
      set(h,1,get(h,i));
      set(h,i,temp);
      h->heap_size--;
      max_heapify(h,1);
    }
}
