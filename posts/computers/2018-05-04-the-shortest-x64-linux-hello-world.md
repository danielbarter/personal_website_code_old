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
On my machine, using gcc to compile, this code produces an executable that is 8376 bytes long! Most of those bytes are part of the C runtime and there is a lot of useful functionality there, but there is a shorter way. When Linux loads an executable, it is expected to be an [ELF](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) file. Roughly speaking, ELF files consist of a list of objects organized into sections like `.text` which contains code objects and `.data` which contains data objects. To print \"Hello, world!\", we need two objects: the code which executes a print system call and the string \"Hello, world!\". We can write an assembly program that specifies exactly these objects:
```{.asm}
  .intel_syntax noprefix        # specify the assembly language


  .text                         # start of text section


  .globl _start                 # _start object metadata
  .type _start, @function       # _start object metadata
_start:
  mov rax, 1
  mov rdi, 1
  lea rsi, hello_string
  mov rdx, 14
  syscall                       # sys_write(1,string_1,14);
  mov rax, 60
  mov rdi, 0
  syscall                       # sys_exit(0);
  .size _start, .-_start        # _start object metadata. '.' evaluates to current location


  .data                         # start of data section


  .globl hello_string           # string_1 object metadata
  .type hello_string, @object   # string_1 object metadata
hello_string:
  .string "Hello, world!\n"
  .size hello_string, 14        # string_1 object metadata
```
This code specifies exactly two objects, `_start`, a code object which executes a write system call and then an exit system call and `hello_string` which contains the string to print. If we run `as hello.s -o hello.o; ld hello.o -o hello.elf`, the resulting executable behaves exactly how it should and it is only 936 bytes long, about a 10th of the size! 

### splitting things up
If you are writing a lot of assembly, it is useful to split your objects among several different files. Instead of a single file for our hello world program, we could split it into two different files:
```{.asm}
  .file "print.s"
  .intel_syntax noprefix

  .text

  .globl _start
  .type _start, @function
_start:
  mov rax, 1
  mov rdi, 1
  lea rsi, hello_string
  mov rdx, 14
  syscall
  mov rax, 60
  mov rdi, 0
  syscall
  .size _start, .-_start
```
and
```{.asm}
  .file "string.s"
  .intel_syntax noprefix

  .data

  .globl hello_string
  .type hello_string, @object
hello_string:
  .string "Hello, world!\n"
  .size hello_string, 14
```
We can produce exactly the same executable as before if we run `as print.s -o print.o; as string.s -o string.o; ld *.o -o hello.elf`. 

### Linking your assembly into a C file

Maybe we still want to print hello world in the smallest way possible, but we don\'t want to throw away the C runtime. In that case, we want to run our assembly from inside a C program. Given the following three files:
```{.asm}
  .file "print.s"
  .intel_syntax noprefix

  .text

  .globl print
  .type print, @function
print:
  mov rax, 1
  mov rdi, 1
  lea rsi, hello_string
  mov rdx, 14
  syscall
  mov rax, 60
  mov rdi, 0
  syscall
  .size print, .-print

```
```{.asm}
  .file "string.s"
  .intel_syntax noprefix

  .data

  .globl hello_string
  .type hello_string, @object
hello_string:
  .string "Hello, world!\n"
  .size hello_string, 14
```
```{.c}
// main.c
void print(void);

int main (void) {
  print();
}
```
If we run `gcc -no-pie main.c print.s string.s -o main.elf`, then we get an executable which still has the C runtime, but prints hello world in the smallest possible way. The flag `-no-pie` is required because by default, gcc produces position indipendent code, but we need to place our assembly objects somewhere in memory!
