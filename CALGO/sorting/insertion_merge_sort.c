

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
void merge ( list *list, int low, int middle, int high);
void merge_sort_sub(list *l,int low,int high);
void merge_sort(list *l);



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



void merge ( list *list, int low, int middle, int high)
/*

  list is a pointer to a list structure.
  low, mid and high are indices with low <= mid < high
  the procedure assumes that l->ptr[low,mid] and l->ptr[mid+1,high] are sorted.
  It merges them so that l->ptr[low,high] is sorted.

*/

{
  int l1 = middle - low + 1;   /* length of first subarray */
  int l2 = high - middle;      /* length of second subarray */


  /*
    allocating some temporary arrays on the stack.
    In the unboxed version, we used an infinity token.
    In this case we can't do that because the infinity token is different for each
    data type.
  */
  void *l[l1];
  void *r[l2];

  int i;  /* index for L */
  int j;  /* index for R */
  int k;  /* index for list */


  /* initializing L */
  for (i = 0; i < l1; i++)
    l[i] = list->ptr[low+i];


  /* initializing R */
  for (j = 0; j < l2; j++)
    r[j] = list->ptr[middle + 1 + j];

  i = j = 0;

  for (k = low; k <= high; k++)
    {
      if (i == l1 || j == l2)
        /* once we reach the end of either array, we break out of the loop */
        break;
      else
        {
          /* since the compare function computes <, we need to negate to get >= */
          if (! (*list->compare)(r[j],l[i]))
            {
              list->ptr[k] = l[i];
              i = i + 1;
            }
          else
            {
              list->ptr[k] = r[j];
              j = j + 1;
            }
        }
    }

  /* fill the list with the remaining elements */
  if (i == l1)
    {
      for (;k <= high; k++)
        {
          list->ptr[k] = r[j];
          j = j + 1;
        }
    }
  else
    {
      for (;k <= high; k++)
        {
          list->ptr[k] = l[i];
          i = i + 1;
        }
    }

}

void merge_sort_sub(list *l,int low,int high)
{
  int mid;

  if (low < high)
    {
      mid = (low + high) / 2;  /* integer division rounds down */
      merge_sort_sub(l,low,mid);
      merge_sort_sub(l,mid+1,high);
      merge(l,low,mid,high);
    }
}


void merge_sort(list *l)
{

  /* arguments two and three for merge_sort_sub must be indices for the array */
  merge_sort_sub(l,0,l->length-1);
}
