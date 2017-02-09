---
title: ch1
---

# CLRS Chapter 1

**1.1-1.** Alphabetizing student exam papers prior to recording grades into the grade book, where the students appear in alphabetical order. 


**1.1-2.** Heap usage. Maximum stack depth.

**1.1-3.** A *linked list* consists of a collection of pairs $(d,p)$ where $d$ is a piece of data and $p$ is a pointer to the next pair. For example, we might have
$$ l \to (d_1,p_1) \quad p_1 \to (d_2,p_2) \quad p_2 \to (d_3,0) $$
One strength of linked lists is that we don\'t need to store the nodes in adjacent heap locations which is useful when adding elements to the list. One disadvantage is that if you have the pointer $l$ and you want to access the last element of the list, you need to traverse every node of the list.

**1.1-4.** Both the travelling salesman and shortest parth problem take a graph as input and return paths in the input graph. The travelling salesman problem involves finding the shortest path which visits each vertex and the shortest path problem involves finding the shortest path between two specified verticies.

**1.1-5.** In any problem where loss is proportional to runtime, only the best solution will do. On the otherhand, if loss does not depend on runtime, then finding the fastest algorithm is not as important.

**1.2-1.** Face recognition in photo sharing software. The software should automatically recognise faces in images for the user to tag which makes sharing easier. 

**1.2-2.** We have $8 n^2 > 64 n \log_2 n$ when $n > 42$.

**1.2-3.** We have $2^n > 100 n^2$ when $n > 15$.

**1.1.** First we roughly convert the time units into microseconds. Also, our logarithms are base 10 and we discard the non leading terms in the base 10 expansion.

```{.algorithm}
| time (ms)  |  10^6       |  10^7       |  10^9       |  10^{10}       |  10^{12}       |  10^{13}       |  10^{15}       |
|------------|-------------|-------------|-------------|----------------|----------------|----------------|----------------|
|  \log n    |  10^{10^6}  |  10^{10^7}  | $10^{10^9}  |  10^{10^{10}}  |  10^{10^{12}}  |  10^{10^{13}}  |  10^{10^{15}}  |
|  \sqrt{n}  |  10^{12}    |  10^{14}    | $10^{18}    |  10^{20}       |  10^{24}       |  10^{26}       |  10^{30}       |
|  n         |  10^{6}     |  10^{7}     | $10^{9}     |  10^{10}       |  10^{12}       |  10^{13}       |  10^{15}       |
|  n \log n  |  10^5       |  10^6       | $10^8       |  10^9          |  10^{11}       |  10^{12}       |  10^{14}       |
|  n^2       |  10^3       |  10^3       | $10^4       |  10^5          |  10^6          |  10^6          |  10^7          |
|  n^3       |  10^2       |  10^2       | $10^3       |  10^3          |  10^4          |  10^4          |  10^5          |
|  10^n      |  6          |  7          |  9          |  10            |  12            |  13            |  15            |
|  n!        |  10         |  11         |  13         |  14            |  15            |  16            |  17            |
```
