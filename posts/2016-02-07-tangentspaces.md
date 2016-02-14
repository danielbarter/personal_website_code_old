---
title: tangent spaces
date:  2016-02-07
---

#Tangent spaces

In [the last post](2016-01-31-whatisamanifold.html), we defined manifolds. In 
this post we shall start building the infrastructure required to do calculus on 
manifolds. 

###Not sheaves again\.\.\.\.

In the last post, we defined the sheaf of observables on a topological space $X$: For each open set $U \subseteq X$, define $\mathcal{O}_X(U)$ to be the 
[algebra](https://en.wikipedia.org/wiki/Algebra_over_a_field) of continuous functions $U \to \mathbb{R}$. If $U \subseteq V$ are open sets, then restriction gives us an algebra 
homomorphism $\mathcal{O}_X(V) \to \mathcal{O}_X(U)$. Sheaves might seem pointless at this point, but they are one of the most important organizational tools in geometry, so it is 
important for us to write down a precise definition which we can refer to later. We will break the definition into two parts. Let $X$ be a topological space. A *presheaf* 
$\mathcal{F}$ on $X$ consists of the following data:

1. for each open set $U \subseteq X$, $\mathcal{F}(U)$ is a **set** 
2. for each inclusion of open sets $U \subseteq V$, we have a **function** $\mathcal{F}(U \subseteq V) : \mathcal{F}(V) \to \mathcal{F}(U)$ such that
    - $\mathcal{F}(U \subseteq U)$ is the **identity function**
    - $\mathcal{F}(W \subseteq U) \circ \mathcal{F}(U \subseteq V) = \mathcal{F}(W \subseteq V)$

In the language of [category theory](https://en.wikipedia.org/wiki/Category_theory), a presheaf is just a contravariant functor from the category of open sets in $X$, into the 
category of sets. If $s \in \mathcal{F}(V)$, then we shall write $s\lvert_U = \mathcal{F}(U \subseteq V)(s)$ and call $s \lvert_U$ the restriction of $s$ to $U$. The two conditions 
above state that $s \lvert_V = s$ and $(s \lvert_U) \lvert_W = s \lvert_W$, which are true for $\mathcal{O}_X$. We have really defined a presheaf of sets. To get the definition for a 
presheaf of vector spaces, make the following replacements:

- **set** $\longrightarrow$ **vector space**,
- **function** $\longrightarrow$ **linear transformation** 
- **identity function** $\longrightarrow$ **identity transformation**

We can define a presheaf of algebras, a presheaf of groups or more generally, a presheaf in any category. The gadget $\mathcal{O}_X$ is a presheaf of algebras. We have also seen 
another presheaf. Let $X$ be a manifold. define $\mathcal{C}_X(U)$ to be the algebra of smooth functions $U \to \mathbb{R}$ (why can we add and multiply smooth functions?). In 
mathematics, the objects you study always have morphisms between them. For sets, there are functions, for vector spaces, there are linear transformations. Presheaves are no 
exception. If $\mathcal{F},\mathcal{G}$ are presheaves on $X$, then a morphism $\alpha : \mathcal{F} \to \mathcal{G}$ of presheaves consists of 

1. For each open subset $U \subseteq X$, a **function** $\alpha_U : \mathcal{F}(U) \to \mathcal{G}(U)$ such that
    - the following square commutes: $$\require{AMScd}
                                       \begin{CD}
                                       \mathcal{F}(V) @>{\alpha_V}>> \mathcal{G}(V);\\
                                       @VVV @VVV \\
                                       \mathcal{F}(U) @>{\alpha_U}>> \mathcal{G}(U);
                                       \end{CD}$$ 

The vertical maps are just the restriction maps. In the language of category theory, a morphism of presheaves is just a natural transformation. We have a morphism of presheaves 
$\mathcal{C}_X \to \mathcal{O}_X$. This is just a fancy way of saying that every smooth function is also a continuous function. Now we can define what a sheaf is. Given a presheaf 
$\mathcal{F}$ on $X$ and an open covering $V = \cup_{i} U_i$ of the open set $V$, we have the following function:
$$\mathcal{F}(V) \to \left\{ (s_i) \in \prod_i \mathcal{F}(U_i) : s_i \lvert_{U_i \cap U_j} = s_j \lvert_{U_i \cap U_j} \right\} \qquad s \mapsto (s \lvert_{U_i})$$
We call $\mathcal{F}$ a *sheaf* if this function is bijective for every open cover $V = \cup_i U_i$. When you unravel the definitions, this means two things: Firstly, if two 
sections $s,t \in \mathcal{F}(V)$ are equal locally, then they are equal globally and if you have a bunch of compatible local sections, they glue to give a unique global section. If 
you have understood the definitions, it is routine to check that both $\mathcal{O}_X$ and $\mathcal{C}_X$ are sheaves. You just need to unravel the definitions. Also, a morphism of 
sheaves is just a morphism of the underlying presheaves. At this point, I could give a lot of contrived examples to try and explain these definitions, but that would be a mistake. As 
we progress deeper into differential geometry, we will see many many examples of sheaves arise organically. There is a fair amount more to say about abstract sheaves, but we shall 
develop the theory as it is needed. 

###The stalks of a sheaf

Before we can start talking about the tangent bundle, we need one more abstract definition from sheaf theory. Let $X$ be a space and $\mathcal{F}$ a presheaf on $X$. Fix $p \in X$. 
We define the stalk $\mathcal{F}_p$ as follows:
$$ \mathcal{F}_p = \cup_{p \in U} \mathcal{F}(U) / \sim $$
where $f \sim g$ if the elements $f$ and $g$ agree after restriction to some small neighborhood of $p$ (you should check that this is an [equivalence 
relation](https://en.wikipedia.org/wiki/Equivalence_relation)). Elements of the stalk $\mathcal{F}_p$ are called $germs$. If $f \in \mathcal{F}(U)$, and $p \in U$, then we write 
$f_p$ for the germ of $f$ at $p$. If $\mathcal{F}$ is a sheaf of vector spaces, or algebras, or groups, then the stalks inherit the same 
structure (you should check this!) If you know about [colimits](https://en.wikipedia.org/wiki/Limit_%28category_theory%29), then a more precise definition of the stalk is 
$$ \mathcal{F}_p = {\rm colim}_{p \in U} \mathcal{F}(U)$$
this is just a fancy way of encoding the definition I gave above.

###Tangent spaces! 

Now that we have developed the relevant abstraction, we can finally start doing some real mathematics! I don\'t expect that you have completely absorbed everything I said about sheaf 
theory, but whenever I use the word sheaf, germ or stalk, you should refer back to the definitions given in the previous two sections.

Everyone who has taken multi-variable calculus has some idea what a tangent plane is. Take for example $S^2 = \{ (x,y,z) : x^2 + y^2 + z^2 = 1 \}$. The tangent plane at a point 
$(a,b,c) \in S^2$ is the plane which *touches* the sphere at (a,b,c) but does not cut the sphere:

![](/img/2016-02-07-spheretangentplane.PNG)

It is defined inside $\mathbb{R}^3$ by the equation $ax + by + cz = 1$. The tangent plane is an example of a tangent space. There is a simpler example. Take the equation $y = f(x)$. 
This defines a graph inside $\mathbb{R}^2$. The tangent line at $x = a$ looks like:

![](/img/2016-02-07-tangentlinegraph.PNG)

The equation for the tangent line is $y = f(a) + f'(a) x$. Now take a manifold $X$. We want to define the tangent space at $x \in X$. There seems to be a problem: Our manifold $X$ 
does not live inside Euclidean space, so we can\'t write down a formula which defines the tangent space. We can solve this problem by stepping back and thinking about what the 
tangent space at $x \in X$ really is. It should encode all the *directions* in which we can move if we are standing at the point $x \in X$. If $X$ is embedded in euclidean space 
$\mathbb{R}^d$, then it encodes all the *directions* which we can face when standing on $X$. This suggests a possible definition (which is wrong): A tangent vector at $x 
\in X$ is the germ of a smooth map $\gamma : (-\epsilon,\epsilon) \to X$ such that $\gamma(0) = x$. This captures all the *directions* we can move at $x$, but something is wrong. 
Consider the functions 
$$\gamma_n(t) = (t,t^n) \qquad n \geq 2$$
none of these functions agree on any open neighborhood of $0$ in $t$-space, so by our definition, they all define different tangent vectors at $0 \in \mathbb{R}^2$. However, suppose 
we graph the functions for $t \in (-2^{-16},2^{-16})$ using a computer. Then they all look exactly the same as $(t,0)$. For my intuitive definition of *direction*, it shouldn\'t 
matter if you zoom in. You should be able to distinguish directions regardless of your magnification. This suggests that $(t,0)$ and $(t,t^2)$ should define the same direction at $0 
\in \mathbb{R}^2$. Now graph $(t,t)$ on a computer for $t \in (-2^{-16},2^{-16})$. It looks very different than $(t,0)$, regardless of how much you magnify! Therefore $(t,t)$ should 
define a different direction to $(t,0)$ at the point $0 \in \mathbb{R}^2$. Let us update the definition: Tangent vectors at $x \in X$ are represented by germs of curves $\gamma : 
(-\epsilon,\epsilon) \to X$ with $\gamma(0) = x$. Two such germs $\gamma,\delta$ represent the same tangent vector if $\gamma'(0) = \delta'(0)$. In differential geometry, whenever 
you define something, you need to check that it does not depend on your choice of coordinates. In this case, the chain rule implies that if $\gamma'(0) = \delta'(0)$ in some 
coordinate system, then the equation is true in any coordinate system (you should check this!) Therefore our definition of tangent vector makes sense: It does not depend on our 
choice of coordinates. Let\'s explore the definition for our running example $\gamma_n(t) = (t,t^n)$. For $n \not= 1$ we have that $\gamma_n'(0) = (1,0)$, but when $n=1$ we have 
$\gamma_1'(0) = (1,1)$. Note that the exact vectors you get here depend on your choice of coordinate system, but whether they are equal or not is coordinate independent. 

We have defined the tangent space as a set: tangent vectors are represented by germs of curves, and two germs define the same tangent vector if they agree to first order (thanks to 
the chain rule, this doesn\'t depend on the choice of coordinates). We are missing some structure though. If you take a manifold inside euclidean space like the sphere, the tangent 
space is a linear space! Can you add tangent vectors represented by curves in a coordinate independent way? The answer is yes, but we shall see this in a slightly round about way. 
Recall that $\mathcal{C}_X$ is the sheaf of smooth functions on $X$. Given a tangent vector represented by $\gamma$ at $x \in X$, we can define a function $D : \mathcal{C}_{X,x} \to 
\mathbb{R}$ by the formula
$$D(f) = \lim_{t \to 0} \frac{f(\gamma(t))-f(x)}{t}$$
for this to make sense, there is a lot to check. Firstly, we need to check that it only depends on the germ of $f$ and the germ of $\gamma$. This follows because $f$ and $\gamma$ 
appear inside the limit. Secondly we need to check that the formula only depends on $\gamma$ as a tangent vector. This follows from the chain rule. We call $D$ a differential 
operator because 

- $D$ is linear over $\mathbb{R}$
- $D$ satisfies the product rule: $D(fg) = f(x) D(g) + g(x) D(f)$

We have a function
$$T_x X \to \left\{ \text{Differential operators $\mathcal{C}_{X,x} \to \mathbb{R}$} \right\}$$ 
where by $T_xX$ we mean the set of tangent vectors represented by germs of curves. This function is bijective! Here is the proof. The domain, codomain and map depend only on a small 
open neighborhood around $x$. Therefore, after choosing coordinates, we can assume that $X = \mathbb{R}^d = \mathbb{R}\{e_1,\dots,e_d\}$ and $x = 0$. Elements of the left hand side 
look like
$$ \gamma(t) = (a_1,\dots,a_d) t + O(t^2)$$
$$ \delta(t) = (b_1,\dots,b_d) t + O(t^2)$$
The curves $\gamma$ and $\delta$ represent the same tangent vector iff $(a_1,\dots,a_d) = (b_1,\dots,b_d)$. Let $D : \mathcal{C}_{\mathbb{R}^d,0} \to \mathbb{R}$ be a differential 
operator and fix $f \in \mathcal{C}_{\mathbb{R}^d,0}$. There is a Taylor expansion 
$$ f = a_1 x_1 + \dots + a_d x_d + \sum_{i \leq j} O(x_i x_j)$$
which implies that 
$$D(f) = a_1 D(x_1) + \dots + a_d D(x_d)$$
Write $D_i$ for the image of the tangent vector $t e_i$. Then $D_i(f) = a_i$. This implies that
$$ D = D(x_1) D_1 + D(x_2) D_2 + \dots + D(x_d) D_d. $$
It is easy to see that the codomain is a vector space. We have just proved that the operators $D_i$ span. They are linearly independent because $D_i(x_j) = \delta_{ij}$. It follows 
from the chain rule that $$ (a_1,\dots,a_d) t \mapsto \sum_i a_i D_i $$
this completes the proof. We call the image of a tangent vector $V$, the directional derivative along $V$. At this point, we should stop and slightly update our intuitive definition 
of the tangent space at $x \in X$. It encodes all the *directions* you could face and also the possible *speeds* in which you could move. Given a coordinate chart $y_1,\dots,y_d$ 
around $x \in X$, we get a basis
$$ T_xX = \mathbb{R} \left\{ \frac{\partial}{\partial y_1} \lvert_x, \dots, \frac{\partial}{\partial y_d} \lvert_x \right\} $$
where $\partial / \partial y_i \lvert_x$ takes $f$, differentiates with respect to $y_i$ and then evaluates at $x$. 

###Exercises

1. We can describe tangent vectors in two ways: they can be presented by germs of curves or they can be presented by differential operators. We will be switching between these two 
   perspectives often. You should study the above proof until the translation becomes transparent. Maybe try and rewrite the proof in your own words!
2. On a 1-dimensional manifold, what is the change of basis matrix from $\partial / \partial x \lvert_p$ to $\partial / \partial y \lvert_p$ 
3. On the upper half plane $\mathbb{H}^2 = \{ (a,b) : b > 0 \}$ we have two coordinate charts $(x,y)$ and $(r,\theta)$. They are related by $x = r \cos \theta$ and $y = r \sin 
   \theta$. At a point $p \in \mathbb{H}^2$, we have two bases for the tangent space: $\partial / \partial x \lvert_p, \partial / \partial y \lvert_p$ and $\partial / \partial r 
   \lvert_p, \partial / \partial \theta \lvert_p$. Write down the change of basis matrix.
4. Can you describe the change of basis matrix from $\partial / \partial x_1 \lvert_p, \dots, \partial / \partial x_d \lvert_p$ to $\partial / \partial y_1 \lvert_p, 
   \dots, \partial / \partial y_d \lvert_p$?
5. **(harder)** The chain rule implies that $\gamma'(0) = \delta'(0)$ is independent of coordinates. Prove that $\gamma^{(i)}(0) = \delta^{(i)}(0)$ for all $i \leq n$ is also 
   independent of coordinates. 
