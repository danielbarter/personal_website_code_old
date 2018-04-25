---
title: checking for integer overflow
date: 2018-04-25
---

# Checking for Integer Overflow

When you are doing integer arithmetic on a computer, you need to worry about [integer overflow](https://en.wikipedia.org/wiki/Integer_overflow). If `x,y,z` are unsigned 64-bit integer variables, and we evaluate `z = x + y`, then integer overflow occurs exactly when `z < x`, so we can check for overflow using an `if` statement. This approach is nice because you don\'t leave the world of C, so it is machine independent. If you are mindful of your hardware, then this approach is a little unsatisfying. For example, in the `x86_64` architecture, there is the `CF` flag which is set to `1` when an overflow occurs. Rather than comparing `z` and `x`, we could instead directly read the `CF` flag. You can do this with the following confusing code:
```{.c}
#include <limits.h>


char *add_overflow_flag_data = "\x48\x89\xf0\x48\x01\xd0\x0f\x92\x07\xc3"; // explained below

int main (void) {

  long unsigned int (*add_overflow_flag) (int *bp, long unsigned int x, long unsigned int y);       // declaring a function pointer
  add_overflow_flag = (long unsigned int (*) (int *, long unsigned int, long unsigned int)) add_overflow_flag_data; // initializing function pointer
  int b = 0;
  long unsigned int s1 = (*add_overflow_flag)(&b,1,1);  // b will be set to 0, s1 to 2
  long unsigned int s2 = (*add_overflow_flag)(&b,3,ULONG_MAX);  // b will be set to 1, s2 to 2
  return 0;
}
```
This code declares the function pointer `add_overflow_flag` and then makes it point to the string which we called `add_overflow_flag_data`. This binary string is generated from the following assembly code:
```{.asm}
add_overflow_flag:
  mov rax, rsi                  ; move x to the return register
  add rax, rdx                  ; add y to the return register
  setb [rdi]                    ; set b to CF
  ret
```
If we run
```{.bash}
nasm -f elf64 add_overflow_flag.asm
objdump -M intel -S add_overflow_flag.o
```
then the output is
```{.algorithm}
0000000000000000 <add_overflow_flag>:
   0:	48 89 f0             	mov    rax,rsi
   3:	48 01 d0             	add    rax,rdx
   6:	0f 92 07             	setb   BYTE PTR [rdi]
   9:	c3                   	ret
```
which is exactly the string `add_overflow_flag_data`. 
