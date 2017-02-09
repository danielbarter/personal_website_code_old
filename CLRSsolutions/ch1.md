---
title: ch1
---

# Solutions for CLRS Introduction to Algorithms Chapter 1

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
