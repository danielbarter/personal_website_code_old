

typedef struct
{
  /* array of pointers */
  void **ptr;

  /*
    we had to pass the array length to the unboxed procedures.
    Here we can wrap it up in the data structure.
   */
  int length;

  /*
    given two elements of the list, we need to compare them.
    (*compare)(ptr1,ptr2) returns 1 if *ptr1 < *ptr2
   */
  int (*compare)(void *ptr1, void *ptr2);
} list;

void insertion_sort (list *l);

void insertion_sort (list *l)
{
  int j;            /* index of the next element to be inserted */
  int i;            /* index for looping through the sorted part of array */
  void *element;    /* next element to be inserted */

  for (j = 1; j < l->length; j++)
    {
      element = l->ptr[j];     /* store the element to be inserted */
      i = j - 1;               /* store the top index of the already sorted part */
      while ( (i>= 0) && (*l->compare)(element, l->ptr[i]))
        /*
          loop through the already sorted part
          searching for where element needs to be inserted.
          At the same time, we also move the parts bigger than element one
          spot to the right.
         */
        {
          l->ptr[i+1] = l->ptr[i];
          i = i - 1;
        }
      l->ptr[i+1] = element;      /* slot element in */
    }
}
