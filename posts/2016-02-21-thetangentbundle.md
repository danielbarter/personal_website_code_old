---
title: the tangent bundle
date: 2016-02-31
---

#The tangent bundle

In [the last post](2016-02-07-tangentspaces.html), we defined the tangent space to a 
manifold at a point. That was the first step towards doing calculus on a manifold. In 
this post, we shall take the second step which is *bundling* the tangent spaces up 
into a single geometric object called the tangent bundle. We shall describe the 
tangent bundle in several different ways: As a vector bundle, as a locally free sheaf 
and as a sheaf of differential operators. Along the way we will see some more 
definitions from abstract sheaf theory.

###Vector bundles

Let $X$ be a manifold. Informally speaking, a vector bundle over $X$ is a family 
of vector spaces parameterized smoothly by the points in $X$. This colloquial language 
does not suggest a definition. Here is a potential definition (which is incorrect): A 
vector bundle over $X$ consists of a manifold $E$ and a smooth map $\pi : E \to X$ 
such that each fiber $\pi^{-1}(x) = \{ v \in E : \pi(v) = x\}$ is a vector space. The 
main problem with this definition is that we are not forcing the vector space 
structure on the fibers to vary smoothly as we move around in $X$. A second problem is 
that from this definition, there is no obvious way to describe a specific vector 
bundle structure. It should be easy to describe a vector bundle you are working with to your 
friends (assuming that you can describe the base manifold to them). Before we give the 
correct definition, we need some new terminology. Suppose 
that $\pi : E \to X$ is a smooth map. A vector bundle chart on $E$ consists of an open 
subset $U \subseteq X$ and a 
[diffeomorphism](https://en.wikipedia.org/wiki/Diffeomorphism)
$\pi^{-1}(U) = U \times \mathbb{R}^r$. Now we can give the correct definition: A 
vector bundle over $X$ consists of a manifold $E$ and a smooth map $\pi : E \to X$ 
such that 

- we can cover $E$ using vector bundle charts 
- given two vector bundle charts $\pi^{-1}(U) = U \times \mathbb{R}^r$ and 
$\pi^{-1}(V) = V \times \mathbb{R}^r$, if $U \cap V$ is nonempty, then the change of 
coordinates from $\pi^{-1}(U)$ to $\pi^{-1}(V)$ is given by
$$(x,v) \mapsto (x,\phi(x)v)$$
where $\phi : U \cap V \to {\rm GL}_r(\mathbb{R})$ is a smooth map (this just means 
that each matrix entry is a smooth function of $x \in U \cap V$)

Let $X$ be a manifold. As a set, the tangent bundle is defined by
$$TX = \coprod_{x \in X}T_x X$$
Write $\pi : TX \to X$ for the projection map which sends $T_xX$ to $x$. Assume that 
$x_1,\dots,x_d$ are coordinates on $U \subseteq X$. Then we have a bundle chart
$$ \pi^{-1}(U) \ni \left( x, \sum a_i \frac{\partial}{\partial x_i} \lvert_x \right) 
\mapsto 
(x,(a_i)) \in U \times \mathbb{R}^d$$ 
Suppose that $y_1,\dots,y_d$ are coordinates on $V \subseteq X$. Then 
$$\frac{\partial}{\partial x_j}\lvert_x = \sum_i \frac{\partial y_i}{\partial x_j}(x) 
\frac{\partial}{\partial y_i} \lvert_x$$
Therefore the change of coordinates from $U$ to $V$, $\phi : U \cap V \to {\rm 
GL}_d(\mathbb{R})$ is given by
$$\phi(x) = \left( \frac{\partial y_i}{\partial x_j}(x) \right)$$
Maybe you are worried that we did not prove that $TX$ was a manifold before we prove 
that it was a vector bundle. Everything is OK, because the vector bundle charts we 
have described on $TX$ are also plain old coordinates.
