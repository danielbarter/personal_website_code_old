---
title: what is a manifold
date: 2016-01-31
---

#What is a manifold?

*A Manifold is a space on which one can do calculus.* This is what I usually say when asked what a manifold is. In this post, I want to explain what this phrase means.

###What is a space?

Most people have some idea what *space* is. We live inside it after all. That said, it is very hard to give a precise definition of the term *space*. In mathematics, instead of 
trying to define space, we just try and describe some of its properties. The first property: **A space has a set whose elements we call points**. For example, we could talk about a space 
with points $\{ {\rm apples}, {\rm oranges} \}$ or the space with points $\{ z \in \mathbb{C} : \lvert z \lvert = 1 \}$. The first space may seem a little strange, but the second one 
should be more familiar. It is the circle, a 1 dimensional space:

![](/img/2016-01-31-circle.PNG)

There is not much that you can do mathematically with just a set of points. We need to describe our spaces more precisely. There are many ways to do this. If you are a probability 
theorist, you could interpret your points as possible outcomes of an experiment and equip the space with a probability measure. If you are an algebraic topologist, you could write 
down a [simplicial set](https://en.wikipedia.org/wiki/Simplicial_set) whose connected components are the points in your space. If you like algebraic geometry, you could write down a 
system of polynomial equations whose solutions are the points in your space. Inorder to describe spaces on which we can do calculus, we need to introduce *observables*.

###Observables

The primary way in which humans understand the objects around them is by interpreting the light which bounces off them. If you stand still and look at a stationary object, your brain 
associates a color (which we identify with its frequency as an electromagnetic wave) to each point on the surface of the object. If we think of the surface of our object as a space, 
then color defines a partial real valued function on this space (it is only a partial function because we can\'t see the back of the object!) The second property of spaces: **A 
space has an algebra of observables which are partial functions from the set of points into a field**. Often the field is just the real numbers. In many branches of mathematics, the 
set of points is suppressed and all focus is directed at the algebra of observables. It is important to note that every observable is a function from points into the real numbers but 
not every function from the points to the real numbers is an observable. Usually observables are required to have nice properties which allow us to study them mathematically. For 
example, in algebraic geometry, all the observables are required to be polynomial functions and in differential geometry all the observables are required to be smooth functions.
