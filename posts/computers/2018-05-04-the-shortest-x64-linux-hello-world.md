---
title: the shortest x64 linux hello world
date: 2018-05-04
---

# The Shortest x64 Linux Hello World

The first program that you write in a new language is Hello, world! In C, it looks like this:
```{.c}
#include <stdio.h>

int main (void) {
  puts("Hello, world!");
  return 0;
}
```
On my machine, using gcc to compile, this code produces an executable that is 8376 bytes long! There is a shorter way. When Linux loads an executable, it is expected to be an [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) file. Roughly speaking, ELF files consist of a list of objects organized into sections like `.text` which contains code objects and `.data` which contains data objects. To print \"Hello, world!\", we need two objects: the code which executes a print system call and the string \"Hello, world!\". We can write an assembly program that specifies exactly these objects:
```{.asm}
  .intel_syntax noprefix        # specify the assembly language


  .text                         # start of text section


  .globl _start                 # _start object metadata
  .type _start, @function       # _start object metadata
_start:
  mov rax, 1
  mov rdi, 1
  lea rsi, string_1
  mov rdx, 14
  syscall                       # sys_write(1,string_1,14);
  mov rax, 60
  mov rdi, 0
  syscall                       # sys_exit(0);
  .size _start, .-_start        # _start object metadata. '.' evaluates to current location


  .data                         # start of data section


  .globl string_1               # string_1 object metadata
  .type string_1, @object       # string_1 object metadata
string_1:
  .string "Hello, world!\n"
  .size string_1, 14           	# string_1 object metadata
```
This code specifies exactly two objects, `_start`, a code object which executes a write system call and then an exit system call and `string_1` which contains the string to print. If we run `as hello.s -o hello.o; ld hello.o -o hello.elf`, the resulting executable behaves exactly how it should and it is only 936 bytes long, about a 10th of the size! It is probably possible to go smaller, but by doing so, you would need to start omitting meta data about the objects in the ELF file which makes it harder to the operating system to organize the program correctly in memory.
