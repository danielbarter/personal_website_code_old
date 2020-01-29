---
title: haskell profiling cheatsheet
date: 2020-01-29
---

# Haskell + Stack Profiling Cheatsheet

Sometimes the Haskell programs we write don\'t run well. GHC provides tools for diagnosing and fixing performance issues. It is not always obvious how to use them in conjunction with the stack build system. This post is a collection of recipes for doing that. 


### Heap Profiling 

In the STG language (which is the final stage of Haskell compilation before assembly generation), every time a let expression is evaluated, the runtime creates a thunk on the heap. If we are not careful, this can lead to large unevaluated computations being stored on the heap and bad memory performance. Rather than staring at the OS process monitor, we can ask the Haskell runtime system to produce a heap profile which can be turned into a graph:

```{.bash}
stack clean
stack build --profile

#move to where stack stores the binaries
cd ./.stack-work/install/<arch>/<hash>/<version>/bin

./executable arg1 arg2 ... +RTS -hc -p
hp2ps -c executable.hp
```
Here are two examples of these heap profiles:

![](../../img/bad_heap_good_heap_small.jpg)

The first program demonstrates the classic Haskell space leak. It consumes more than 1GB of memory. It reads a million integers from a file, adds them up and then prints the sum. Because we never scrutinize the sum during the loop, we end up with a linked list containing the million numbers on the heap.
```{.haskell}
main :: IO ()
main = do
  contents <- getContents
  print (sumFile contents)
  where sumFile = foldl (+) 0  . map read . words
```
We can fix this by using `foldl'` which is strict in its accumulation argument:
```{.haskell}
main :: IO ()
main = do
  contents <- getContents
  print (sumFile contents)
  where sumFile = foldl' (+) 0  . map read . words
```
This version only uses 100kB of memory. As can be seen from the heap profile, while this program is running, the GHC runtime is furiously garbage collecting.

### Core

Haskell is a large language. Sometimes you need to understand what your code is actually doing. Since Haskell doesn\'t map cleanly onto assembly, it has a non trivial runtime system. The assembly produced by GHC is not easy to understand unless you have a good understanding of the runtime system. Rather than reading the generated assembly or using GDB/LLVM, we can read either the intermediate Core language or the STG language. Both languages have similar semantics, but Core has the advantage that types have not been erased. We can generate the Core files as follows:

```{.bash}
stack clean
stack build --ghc-options \
"-ddump-simpl -ddump-to-file"

cd ./.stack-work/dist/<arch>/<cabal>/build/proj-name/proj-name-tmp/src
```
The core files have the prefix `.dump-simpl`. The produced core files contain a large amount of information. As a first pass, it is better to use the flag `-dsuppress-all` to produce a more readable core file. Internally, GHC generates lots of new identifiers. The flag `-dsuppress-uniques` makes the identifiers match up better with the source code, but it can make binding ambiguous (which is why it isn\'t included in the suppress all flag)
```{.bash}
stack clean
stack build --ghc-options \
"-ddump-simpl -ddump-to-file -dsuppress-all -dsuppress-uniques"

cd ./.stack-work/dist/<arch>/<cabal>/build/proj-name/proj-name-tmp/src
```
Here are some examples:
```{.haskell}
f :: Int -> Int
f x = x + 1


========================== Tidy Core ==========================

-- RHS size: {terms: 8, types: 3, coercions: 0, joins: 0/0}
f
f = \ x -> case x of { I# x1 -> I# (+# x1 1#) }

```
As we expect, `f` compiles to a function with one argument that unpacks a boxed up integer and increments it by 1. Things get more interesting when we start using more exotic Haskell features:

```{.haskell}
f :: (Num a) => a -> a
f x = x + 1

========================== Tidy Core ==========================

-- RHS size: {terms: 1, types: 0, coercions: 0, joins: 0/0}
f1
f1 = 1

-- RHS size: {terms: 9, types: 7, coercions: 0, joins: 0/0}
f
f = \ @ a $dNum x -> + $dNum x (fromInteger $dNum f1)
```
Now `f` compiles to a function with three arguments, the type, the class dictionary which stores all the functions declared in Num instances and the argument `x` which appears in the original Haskell code. This is how polymorphism works in Haskell under the hood and lets us understand the kind of overhead it introduces.
