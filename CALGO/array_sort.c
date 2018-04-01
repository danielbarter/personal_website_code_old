#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void insertion_sort ( int *array, int length );
void test_sort (  void (*sort_pointer) (int *array, int length), int array_test_size, int max_size );
void print_array(int * array, int length);


int main(void)
{
  srand(time(NULL));  /*   initialize the seed for the pseudorandom generator   */

  printf("testing insertion sort: \n\n");
  test_sort(&insertion_sort,0,100);
  test_sort(&insertion_sort,1,100);
  test_sort(&insertion_sort,10,100);
  printf("\n");
  return 0;
}


void test_sort (  void (*sort_pointer) (int *array, int length), int array_test_size, int max_size )

/*

  http://fuckingfunctionpointers.com/

  sort_pointer is a pointer to the sorting procedure
  array_test_size is the size of the array to test with
  the entries of the test array are reduced modulo max_size

*/

{
  int test[array_test_size];  /* dynamically allocated arrays yew */

  int i;                      /* index for initializing the test arrays */



  /* initializing the test array with random data */
  for (i = 0; i < array_test_size; i++)
    {
      test[i] = rand() % max_size;
    }

  /* printing the test array */
  printf("test array with %d elements in range [0,%d]: ",array_test_size,max_size);
  print_array(test, array_test_size);

  printf("\n");
  printf("applying procedure....... \n");
  (*sort_pointer)(test,array_test_size);

  /* printing the sorted array */
  printf("sorted array: ");
  print_array(test,array_test_size);
  printf("\n\n");

}

void print_array(int *array, int length)
{
  int i;
  for (i = 0; i < length; i++)
    {
      printf("%d ",array[i]);
    }
}



void insertion_sort ( int *array, int length )

/*

  array is a pointer to the first element of the array
  length is the length of the array

*/

{
  int j;      /* index of the next element to be inserted */
  int i;      /* index for looping through the sorted part of array */
  int key;    /* next element to be inserted */

  for (j = 1; j < length; j++)
    {
      key = array[j];
      i = j - 1;
      while ( (i >= 0) && (array[i] > key) )
        {
          array[i+1] = array[i];
          i = i - 1;
        }
      array[i+1] = key;
    }
}
