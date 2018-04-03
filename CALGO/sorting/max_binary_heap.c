typedef struct {
  /* array is an array of pointers */
  void **array;


  /* length of array */
  long int length;

  /* how many elements in the heap are sorted */
  long int heap_size;

  /* function pointer to procedure for comparing keys */
  int (*compare) (void *ptr1, void *ptr2);

} max_binary_heap;

/*
  In CLRS, arrays are indexed from 1 upto length.
  We want to use this convention here because it simplifies the tree ops.
  To do this, we use getters and setters.
*/

inline void *get(max_binary_heap *h, int i);
inline void *set(max_binary_heap *h,int i,void *ptr);

inline void *get(max_binary_heap *h, int i)
{
  return *((h->array) + i - 1);
}

inline void *set(max_binary_heap *h,int i,void *ptr)
{
  return *((h->array) + i - 1) = ptr;
}


