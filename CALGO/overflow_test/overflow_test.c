#include <limits.h>


char *add_overflow_flag_data = "\x48\x89\xf0\x48\x01\xd0\x0f\x92\x07\xc3";

int main (void) {

  long unsigned int (*add_overflow_flag) (int *bp, long unsigned int x, long unsigned int y);
  add_overflow_flag = (long unsigned int (*) (int *, long unsigned int, long unsigned int)) add_overflow_flag_data;
  int b = 0;
  (*add_overflow_flag)(&b,1,1);
  (*add_overflow_flag)(&b,3,ULONG_MAX);
  return 0;
}

