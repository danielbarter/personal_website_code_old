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


