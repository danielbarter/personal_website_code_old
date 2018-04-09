/* system includes */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#include "max_binary_heap.c"

void print_heap(heap *h);
int int_compare_32bit(void *ptr1, void *ptr2);
void test_build_max_heap(int array_length, int max_value);
void test_mergesort(int array_length, int max_value);


/* for all the testing, we will work with boxed 32 bit integers */

int main(void)
{
  srand(time(NULL));  /*   initialize the seed for the pseudorandom generator   */


  test_build_max_heap(0,100);
  test_build_max_heap(1,100);
  test_build_max_heap(10,100);
  test_build_max_heap(50,10);

  test_expressionsmergesort(0,100);
  test_mergesort(1,100);
  test_mergesort(10,100);
  test_mergesort(50,10);
  return 0;
}


void print_heap(heap *h)
{
  int i;

  printf("array length: %d\n",h->length);
  printf("heap size: %d\n",h->heap_size);

  printf("array values: ");
  for(i = 0; i < h->length;i++)
    printf("%d ",* (int *) h->array[i]);

}

void test_build_max_heap(int array_length, int max_value)
{
  int values[array_length];
  void *pointers[array_length];
  int i;

  for (i=0; i<array_length;i++)
    values[i] = rand() % max_value;


  for(i=0; i<array_length;i++)
    pointers[i] = values + i;

  heap h = {.array = pointers,
            .length = array_length,
            .heap_size = 0,
            .compare = &int_compare_32bit};

  printf("\n\n");
  printf("heap init..............\n");
  print_heap(&h);
  printf("\n\napplying build max heap procedure............\n\n");
  build_max_heap(&h);
  printf("resulting heap:\n");
  print_heap(&h);
  printf("\n\n");
}

void test_mergesort(int array_length, int max_value)
{
  int values[array_length];
  void *pointers[array_length];
  int i;

  for (i=0; i<array_length;i++)
    values[i] = rand() % max_value;


  for(i=0; i<array_length;i++)
    pointers[i] = values + i;

  heap h = {.array = pointers,
            .length = array_length,
            .heap_size = 0,
            .compare = &int_compare_32bit};

  printf("\n\n");
  printf("heap init..............\n");
  print_heap(&h);
  printf("\n\napplying heapsort............\n\n");
  heapsort(&h);
  printf("resulting heap:\n");
  print_heap(&h);
  printf("\n\n");
}


int int_compare_32bit(void *ptr1, void *ptr2)
{
  return *((int *) ptr1) < *((int *) ptr2);
}
