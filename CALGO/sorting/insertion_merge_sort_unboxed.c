void insertion_sort_unboxed ( int *array, int length );
void merge_unboxed ( int *array, int low, int middle, int high);
void merge_sort_sub_unboxed(int *array,int low,int high);
void merge_sort_unboxed(int *array, int length);





void insertion_sort_unboxed ( int *array, int length )

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

void merge_unboxed ( int *array, int low, int middle, int high)
/*

  array is a pointer to the first element of the array.
  low, mid and high are indices in the array with low <= mid < high
  the procedure assumes that array[low,mid] and array[mid+1,high] are sorted.
  It merges them so that array[low,high] is sorted.

*/

{
  int l1 = middle - low + 1;   /* length of first subarray */
  int l2 = high - middle;      /* length of second subarray */


  /*
    allocating some temporary arrays on the stack.
    this is going to limit the size the array which this procedure can work with.
    If high - low is too large, we are going to overflow the stack.

    Also, L and R are one entry bigger than the corresponding sub arrays.
    This is because we put a very large token at the end to help us in the following computation.
   */
  int l[l1+1];
  int r[l2+1];

  int i;  /* index for L */
  int j;  /* index for R */
  int k;  /* index for array */


  /* initializing L */
  for (i = 0; i < l1; i++)
    l[i] = array[low+i];

  l[l1] = INT_MAX;

  /* initializing R */
  for (j = 0; j < l2; j++)
    r[j] = array[middle + 1 + j];

  r[l2] = INT_MAX;

  i = j = 0;

  for (k = low; k <= high; k++)
    {
      if (l[i] <= r[j])
        {
          array[k] = l[i];
          i = i + 1;
        }
      else
        {
          array[k] = r[j];
          j = j + 1;
        }
    }
}


void merge_sort_sub_unboxed(int *array,int low,int high)
{
  int mid;

  if (low < high)
    {
      mid = (low + high) / 2;  /* integer division rounds down */
      merge_sort_sub_unboxed(array,low,mid);
      merge_sort_sub_unboxed(array,mid+1,high);
      merge_unboxed(array,low,mid,high);
    }
}

void merge_sort_unboxed(int *array, int length)
{

  /* arguments two and three for merge_sort_sub must be indices for the array */ 
  merge_sort_sub_unboxed(array,0,length-1);
}
