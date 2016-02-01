---
title: what is a manifold
date: 2016-01-31
---

#What is a manifold?

*A Manifold is a space on which one can do calculus.* This is what I usually say when asked about manifolds. In this post, I want to explain what this phrase means.

###What is a space?

Most people have some idea what *space* is. We live inside it after all. That said, it is very hard to give a precise definition of the term *space*. In mathematics, instead of 
trying to define space, we just try and describe some of its properties. The first property: **A space has a set whose elements we call points**. For example, we could talk about a space 
with points $\{ {\rm apples}, {\rm oranges} \}$ or the space with points $\{ z \in \mathbb{C} : \lvert z \lvert = 1 \}$. The first space may seem a little strange, but the second one 
should be more familiar. It is the circle, a 1 dimensional space:

![](/img/2016-01-31-circle.PNG)

There is not much that you can do mathematically with just a set of points. We need to describe our spaces more precisely. There are many ways to do this. If you are a probability 
theorist, you could interpret your points as possible outcomes of an experiment and equip the set of points with a probability measure. If you are an algebraic topologist, you could 
write down a [simplicial set](https://en.wikipedia.org/wiki/Simplicial_set) whose connected components are the points in your space. If you like algebraic geometry, you could write down a 
system of polynomial equations whose solutions are the points in your space. In order to describe spaces on which we can do calculus, we need to introduce *observables*.

###Observables

The primary way in which humans understand the objects around them is by interpreting the light which bounces off them. If you stand still and look at a stationary object, your brain 
associates a color (which we identify with its frequency as an electromagnetic wave) to each point on the surface of the object. If we think of the surface of our object as a space, 
then color defines a partial real valued function on this space (it is only a partial function because we can\'t see the back of the object!) The second property of spaces: **A 
space has an algebra of observables which are partial functions from the set of points into a [field](https://en.wikipedia.org/wiki/Field_%28mathematics%29)**. By *algebra*, all I 
mean is that you can add observables and multiply observables. Often the field is just the real numbers. In many branches of mathematics, 
the set of points is suppressed and all focus is directed at the algebra of observables. It is important to note that every observable is a partial function from points into the real 
numbers but not every partial function from the points to the real numbers is an observable. Usually observables are required to have nice properties which allow us to study them 
mathematically. For example, in algebraic geometry, all the observables are required to be polynomial functions and in differential geometry all the observables are required to be 
smooth functions. We shall always require our observables to be [continuous](https://en.wikipedia.org/wiki/Continuous_function). For this to even make sense, our set of points 
needs to be equipped with a [topology](https://en.wikipedia.org/wiki/Topological_space). From now on, whenever we talk about the set of points of a space, it comes equipped with a 
topology and whenever we talk about observables, they are continuous.

###The sheaf of observables?!????

Mathematicians often like to invent fancy words when they are talking or writing. These fancy words are what allow us to keep all the mathematics inside our head organized. This is a 
form of [abstraction](https://en.wikipedia.org/wiki/Abstraction_%28computer_science%29), and it one of the reasons why mathematics seems so formidable to the uninitiated. The sheaf 
of observables is an example of this. Take a space and write $X$ for the set of points. If $U \subseteq X$ is an open set then we define $\mathcal{O}_X(U)$ to be the algebra of 
continuous functions $U \to \mathbb{R}$. We call $\mathcal{O}_X(U)$ the observables defined on $U$. The gadget $\mathcal{O}_X$ is called the *sheaf of observables*. It is kind of 
like a function because it takes open subsets of $X$ to algebras but there is more structure. If $U \subseteq V$ are open sets in $X$, then we have an algebra homomorphism 
$\mathcal{O}_X(V) \to \mathcal{O}_X(U)$ defined by restriction. If you want to be fancy, you can say that $\mathcal{O}_X$ is a [contravariant 
functor](https://en.wikipedia.org/wiki/Functor) from the category of open sets in $X$ into the category of commutative algebras.


###Manifolds, Finally!

Now we can finally explain what a manifold is. Take a space $X$ (we are going to start committing the standard abuse of notation which identifies a manifold with its set of points). 
We call $X$ an $n$ dimensional manifold if:

1. each point $x \in X$ has an open neighborhood $x \in U \subseteq X$ with $n$ observables $x_1,\dots,x_n$ such that $(x_1,\dots,x_n) : U \to \mathbb{R}^n$ is injective with image 
an open subset of $\mathbb{R}^n$. We call $x_1,\dots,x_n$ coordinates on $U$.
2. If $x_1,\dots,x_n$ are coordinates on $U$, $y_1,\dots,y_n$ are coordinates on $V$ and $U \cap V \not= \emptyset$ then $x_i(y_1,\dots,y_n)$ and $y_j(x_1,\dots,x_n)$ are smooth 
functions.

![](/img/2016-01-31-changingcoordinates.PNG)

If $f:X \to \mathbb{R}$ is a function, then we say that $f$ is smooth if $f(x_1,\dots,x_n) : U \to \mathbb{R}$ is smooth for every choice of coordinate chart. Since changing 
coordinates is smooth, in order to check that $f$ is smooth, you only need to check that $f(x_1,\dots,x_n)$ is smooth in one set of coordinates around each point. 

###Examples

Manifolds are everywhere, so lets see some examples.
 
1. Take the circle $S^1$ which is depicted above. Write $N = (0,1)$ and $S = (0,-1)$. Then define 
$$\alpha : S^1 \backslash \{ N \} \to (\pi/2,5 \pi/2)$$
$$\beta : S^1 \backslash \{ S \} \to (-\pi/2,3\pi/2)$$
to be the functions which take a point on the circle to the corresponding angle. Then
$$\alpha = \beta + 2 \pi$$
so $\alpha$ is a smooth function of $\beta$.
2. Let $V$ be a vector space over $\mathbb{R}$. Choose a basis $x_1,\dots,x_n$ for $V^*$. Then $x_1,\dots,x_n$ is a coordinate chart which covers $V$. We call $\{x_i\}$ a linear 
coordinate chart. 
3. Let $V$ be a 3-dimensional vector space and let $\mathbb{P}(V)$ be the set of lines in $V$ which pass through the origin. Let $X_0,X_1,X_2$ be a basis for $V^*$. The functions 
$X_i$ are not well defined on $\mathbb{P}(V)$, but the ratios $X_i/X_j$ are. The functions $X_1/X_0, X_2/X_0$ are a coordinate chart on $\{L : X_0(L) \not= 0 \}$. Note that even 
though $X_0$ is not a well defined function on $\mathbb{P}(V)$, the condition $X_0(L) = 0$ is well defined. Similarly, $X_0/X_1, X_2/X_1$ are coordinates on $\{ L : X_1(L) \not= 
0\}$ and $X_0/X_2, X_1/X_2$ are coordinates on $\{L : X_2(L) \not= 0 \}$. Therefore we can cover $\mathbb{P}(V)$ with three coordinate charts. Changing coordinates is easy:
$$ X_i/X_j = \frac{1}{X_j/X_i}$$
![](/img/2016-01-31-projectivespace.PNG)

###Exercises

I will always try and include some exercises in these posts.

1. Let $L$ be the set of all lines in $\mathbb{R}^3$ (not just those passing through the origin). Prove that $L$ is a manifold.
2. For any vector space $V$, prove that $\mathbb{P}(V)$ is a manifold.
3. **(harder)** Prove that every manifold has a well defined dimension. [hint](https://en.wikipedia.org/wiki/Singular_homology).
4. **(harder)** Prove that the only two 1-dimensional manifolds are $\mathbb{R}$ and $S^1$. 

In later posts we will see many more examples. We have defined manifolds and seen our first example (the circle), but we still haven\'t 
explained why we can do calculus on a manifold. I will explain this in the next post about the tangent bundle.
