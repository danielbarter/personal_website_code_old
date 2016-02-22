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

If the fibers are dimension $r$, we call $E$ a vector bundle of rank $r$. Let $X$ be a 
manifold. As a set, the tangent bundle is defined by
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
have described on $TX$ are also plain old coordinate charts. We have defined a new 
type of mathematical object, so we need to define the morphisms. If $E,F$ are vector 
bundles over $X$ then a map of vector bundles $f : E \to F$ is a smooth map such that 

- $\pi_F \circ f = \pi_E$ (i.e $f$ maps fibers into fibers)
- $f$ is linear on the fibers.

###Gluing Data

Suppose that $\pi : E \to X$ is a vector bundle. Let $X = \cup_{\alpha} U_{\alpha}$ be 
an open cover such that each $\pi^{-1}(U_{\alpha})$ is a bundle chart on $E$. Write 
$\phi_{\beta\alpha} : U_{\alpha} \cap U_{\beta} \to {\rm GL}_r(\mathbb{R})$ for the 
change of coordinates from $\pi^{-1}(U_{\alpha})$ to $\pi^{-1}(U_{\beta})$. Then we 
have

- $\phi_{\alpha\alpha} = {\rm id}$
- $\phi_{\gamma\beta} \phi_{\beta\alpha} = \phi_{\gamma\alpha}$ on $U_{\alpha} \cap 
U_{\beta} \cap U_{\gamma}$. 

We call $(\phi_{\beta\alpha}, U_{\alpha})$ gluing data for the vector bundle $E$. From 
the gluing data we can reconstruct $E$: The gluing data tells us where the vector 
bundle charts are and how to change coordinates between them. We can also describe 
vector bundle maps interms of gluing data. Suppose that we have two vector bundles $E$ 
and $F$ described by gluing data $(\phi_{\beta\alpha},U_{\alpha})$ and 
$(\psi_{\beta\alpha},U_{\alpha})$. Then a vector bundle morphism $f : E \to F$ 
consists of maps $f_{\alpha} : U_{\alpha} \to {\rm Mat}_{s \times r}(\mathbb{R})$ 
such that
$$\psi_{\beta\alpha} f_{\alpha} = f_{\beta} \phi_{\beta\alpha}$$
on $U_{\alpha} \cap U_{\beta}$. 

This definition is not without flaws. Suppose we write 
$U_{\alpha} = \cup_p V_{\alpha, p}$. Then we get new gluing data  
$(\phi_{\beta,q,\alpha,p}, V_{\alpha,p})$ defined by 

- $\phi_{\alpha,q,\alpha,p} = {\rm id}$
- $\phi_{\beta,q,\alpha,p} = \phi_{\beta,\alpha} \lvert_{V_{\beta,q} \cap 
V_{\alpha,p}}$. 

This gluing data describes the same vector bundle as 
$(\phi_{\beta\alpha}, U_{\alpha})$, despite being defined over a different open cover 
of $X$. Eventually, when we talk about sheaf cohomology, we will fix this problem, but 
for now we shall just work with the imperfect definition. In practice, this does not 
cause problems. If $U \subseteq X$ is a
[contractible](https://en.wikipedia.org/wiki/Contractible_space) coordinate chart, 
then $\pi^{-1}(U)$ is a 
vector bundle chart on $E$. This is because every vector bundle over $\mathbb{R}^d$ is 
trivial. Therefore, with suitable choices of coordinates on the base, we get gluing 
data for every vector bundle with the same open cover.

###An Example

We have seen that every manifold $X$ has a tangent bundle $TX$ and written down its 
gluing data. Let us work through another example to demonstrate how one works with 
vector bundles. Consider $\mathbb{RP}^1$, the set of 1-dimensional subspaces of 
$\mathbb{R}^2$. We write $[a:b]$ for the line spanned by $(a,b)$. If $X,Y$ are linear 
coordinates on $\mathbb{R}^2$, then $X/Y$ and $Y/X$ are smooth partial functions on 
$\mathbb{RP}^1$. In high school mathematics, the function $Y/X$ is often called the 
gradient. We shall write $m = Y/X$. We also write $n = X/Y$. Then $m = 1/n$ were both 
functions are defined. Infact, 
if we set
$$ {\rm D}(X) = \{ L \in \mathbb{RP}^1 : X(L) \not= 0 \}$$
$$ {\rm D}(Y) = \{ L \in \mathbb{RP}^1 : Y(L) \not= 0 \}$$
then $\mathbb{RP}^1 = {\rm D}(X) \cup {\rm D}(Y)$, $m = Y/X$ is a coordinate on ${\rm 
D}(X)$ and $n = X/Y$ is a coordinate on ${\rm D}(Y)$. Define
$$ L = \{ (p,L) \in \mathbb{R}^2 \times \mathbb{RP}^1 : p \in L \} $$
Then $L$ is a rank $1$ vector bundle (or a line bundle) over $\mathbb{RP}^1$. Write 
$\pi : L \to \mathbb{RP}^1$ for the obvious projection. We have bundle coordinates
$$ (\lambda,m) \mapsto ( (\lambda,\lambda m),[1:m]) \quad \text{over ${\rm D}(X)$}$$
$$ (\lambda,n) \mapsto ( (\lambda n,\lambda),[n:1]) \quad \text{over ${\rm D}(Y)$} $$
The change of coordinates map is
$$(\lambda,m) \mapsto ((\lambda,\lambda m),[1:m]) = ((\lambda m \frac{1}{m}, \lambda 
m), [1/m:1]) \mapsto (m \lambda, 1/m)$$
Therefore the change of coordinate map from $D(X)$ to $D(Y)$ is $Y/X : D(X) \cap D(Y) 
\to \mathbb{R}^{\times}$. We don\'t need to worry about the cocycle condition because 
there are only two coordinate charts. We call $L$ the *tautological line bundle* over 
$\mathbb{RP}^1$.


###Exercises

1. **(Harder)** Prove that every vector bundle over $\mathbb{R}^d$ is trivial.
