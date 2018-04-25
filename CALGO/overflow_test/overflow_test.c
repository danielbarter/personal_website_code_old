#include <limits.h>


char *add_overflow_flag_data = "\x48\x89\xf0\x48\x01\xd0\x0f\x92\x07\xc3"; // explained below

int main (void) {

  long unsigned int (*add_overflow_flag) (int *bp, long unsigned int x, long unsigned int y);       // declaring a function pointer
  add_overflow_flag = (long unsigned int (*) (int *, long unsigned int, long unsigned int)) add_overflow_flag_data; // initializing function pointer
  int b = 0;
  long unsigned int s1 = (*add_overflow_flag)(&b,1,1);  // b will be set to 0
  long unsigned int s2 = (*add_overflow_flag)(&b,3,ULONG_MAX);  // b will be set to 1
  return 0;
}
