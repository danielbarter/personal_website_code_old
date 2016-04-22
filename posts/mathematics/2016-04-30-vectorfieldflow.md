---
title: vector field flow
date: 2016-04-30
---

# Vector Field Flow

In the [last post](2016-03-27-thejacobianmatrix.html), we finally explained how to 
differentiate a smooth map between manifolds, justifying the phrase *a manifolds is a 
space on which one can do calculus*. We have only scratched the surface. There is much 
more to say about manifolds. Before we can go deeper, we need a better understanding 
of vector fields. Let $X$ be a manifold. Recall that a vector field is a section of 
the [tangent bundle](2016-02-28-thetangentbundle.html) $TX$. If $x^1,\dots,x^d$ are 
coordinates on $U \subseteq X$, then the vector fields on $U$ look like
$$f^i \frac{\partial}{\partial x^i}$$
(we are using the [Einstein summation 
convention](https://en.wikipedia.org/wiki/Einstein_notation)). One way to construct 
vector fields on $X$ is by describing them on coordinate patches and checking that 
they change coordinates correctly. For example, consider the coordinates $\theta : S^1 
\backslash \{ (1,0) \} \to (0,2 \pi)$ and $\phi : S^1 \backslash \{ (-1,0) \} \to 
(-\pi,\pi)$. 

![](/img/2016-04-30-circlecoordinates.PNG)

Then $d \phi / d \theta = 1$ so $d / d 
\theta = d / d \phi$ where both vector fields are defined. Therefore we have a 
globally defined vector field which we call $d / d \theta$. If you need many 
coordinate charts to cover your manifold, then constructing vector fields in this way 
can be very time consuming. 


### Local group actions

Consider the manifold $\mathbb{R}$. The addition map $\mathbb{R} \times \mathbb{R} 
\to \mathbb{R}, (x,y) \mapsto x + y$ is smooth. That means that $\mathbb{R}$ is a [Lie 
group](https://en.wikipedia.org/wiki/Lie_group). Lie groups are the most important 
objects in differential geometry and we will study them in general later, but for now 
let us just focus on the real line. If $X$ is a manifold, we can talk about smooth 
[group actions](https://en.wikipedia.org/wiki/Group_action) $\mathbb{R} \times X \to 
X$. Remember that group actions satisfy the following laws:
$$s \cdot (t \cdot x) = (s + t) \cdot x \qquad 0 \cdot x = x$$
Often in differential geometry, asking for group actions defined for all $t \in 
\mathbb{R}$ is too much. Instead, we talk about local group actions 
$(-\epsilon,\epsilon) \times X \to X$ which are defined for $t$ in an open 
neighbourhood of the identity. We still require the same laws as a total group action, 
but only when the equations make sense. Every local group action of $\mathbb{R}$ on 
$X$ gives a vector field defined by $x \mapsto t \cdot x$. 

For example, consider the action $\mathbb{R} \times S^1 \to S^1$ defined by $t \cdot 
(\cos \theta, \sin \theta) = (\cos (\theta + t),\sin(\theta + t))$. In coordinates, 
the action is given by $t \cdot \theta = \theta + t$. Since
$$\frac{d}{dt}_{t=0} (\theta + t) = 1$$ it follows that the vector field 
corresponding to this action is $d/d\theta$. Therefore, we have constructed 
$d/d\theta$ globally by defining a group action rather than by patching local vector 
fields together.

### Every vector field comes from a local group action

Constructing vector fields from local group actions is nice. The amazing fact is that 
every vector field can be constructed in this way. This is our second example of an 
integrability result (the first example was [the inverse function 
theorem](2016-03-27-thejacobianmatrix.html)). Let $V$ be a vector field on the 
manifold $X$. For each $p \in X$, we want to construct a curve $\gamma_p(t) \in X$ 
defined for $t \in (-\epsilon,\epsilon)$ such that
$$\gamma_p'(t) = V(\gamma_p(t)) \qquad \gamma_p(0) = p$$
Choose a coordinate chart $x^1,\dots,x^d$ around $p$ such that $p = (0,\dots,0)$. If 
we write $V = f^i \frac{\partial}{\partial x^i}$, then we are faced with the following 
initial value problem:
$${\bf x}'(t) = {\bf f}({\bf x}(t)) \qquad {\bf x}(0) = 0$$
Since $f$ is smooth, the [Picard-Lindelof 
theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem) from 
functional analysis tells us that there is a unique solution defined for $t \in 
(-\epsilon,\epsilon)$. These curves give us a map $(-\epsilon,\epsilon) \times X \to 
X$ defined by $(t,x) \mapsto \gamma_x(t)$. By definition, $0 \cdot x = \gamma_x(0) = 
x$. Also, since solutions are unique, we must have 
$$\gamma_{\gamma_x(s)}(t) = \gamma_x(t+s)$$ 
which translates to $t \cdot (s \cdot x) = (t+s) \cdot x$. This local group action is 
often called the flow of $V$. We shall often use the notation $L_{t,V}(x) = t \cdot 
x$. In words, $L_{t,V}(x)$ flows the point $x$ along the vector field $V$ for $t$ 
seconds.

### Lie Derivatives

Now that we know every vector field comes from a local group action of $\mathbb{R}$, 
we can start doing some tricky things with vector fields. Let $X$ be a manifold, $V$ a 
vector field and $f : X \to \mathbb{R}$ a smooth function. Then
$$V(f) = \lim_{t \to 0} \frac{L_{t,V}^* f -f}{t}$$
where $L_{t,V}^* f(x) = f(L_{t,V}(x)) = f(t \cdot x)$. This formula is not new. We 
already discussed it in the [tangent spaces](2016-02-07-tangentspaces.html) post. 
Motivated by this, we can do something which is new. Let $U,V$ be vector fields. Then 
define 
$$\mathcal{L}_V U = \lim_{t \to 0} \frac{U - L_{t,V}'(U) }{t}$$
This is a vector field on $X$ called the Lie derivative of $U$ along $V$. We can 
compute $\mathcal{L}_V U$ as follows:
$$(\mathcal{L}_V U)_x(f) = \lim_{t \to 0} \frac{U_x(f) - L'_{t,V}(U_{L_{-t,V}x})(f)}{t} 
= \lim_{t \to 0} \frac{U_x(f)-U_{L_{-t,V}x}L^*_{t,V} f}{t} = $$
$$ \lim_{t \to 0} \frac{U_x(f)-U_{L_{-t,V}x}(f) + U_{L_{-t,V}x}(f) - 
U_{L_{-t,V}x}L^*_{t,V} f}{t} = \lim_{t \to 0} \frac{Uf(x) - L_{-t,V}^* Uf(x)}{t} + 
\lim_{t \to 0} \frac{U_{L_{-t,V}x}(f - L_{t,V}^*f)}{t} = V_xUf - U_x Vf$$
More cleanly, $\mathcal{L}_V U = VU - UV = [V,U]$. This makes sense because the 
commutator of two derivations is a derivation. We call $[V,U]$ the Lie bracket. If 
$x^1,\dots,x^d$ are coordinates on $X$ and
$$V = f^i \frac{\partial}{\partial x^i} \qquad U = g^j \frac{\partial}{\partial x^j}$$
then
$$ [V,U] = \left( f^i \frac{\partial g^k}{\partial x^i} - g^j \frac{\partial 
f^k}{\partial x^j} \right) \frac{\partial}{\partial x^k} $$

### What does the Lie bracket mean?

It is tempting to say things like *$[V,U]$ is the rate of change of $U$ in the 
direction of $V$*. This is not correct. The vector $[V,U]_x$ is not determined by 
$V_x$ and $U$. You need to know both $V$ and $U$ in an open neighbourhood of $x$. 
Infact, without further structure, there is no way to define the rate of change of 
$U$ along $V$ in a coordinate indipendent way. What $[V,U]$ really measures is the 
obstruction to the local group actions for $V$ and $U$ commuting with each other. I am 
not sure how to phrase this precisely using currently available tools, but it will 
become clear once we start thinking more seriously about Lie groups.

### Frobenius\'s Theorem

Let $X$ be a manifold and $E \subseteq TX$ a rank $r$ subbundle of the tangent bundle. 
We call the coordinate chart $x^1,\dots,x^d$ on $U$ adapted to $E$ if $\partial / 
\partial x_1, \dots, \partial / \partial x_r$ are a basis for $E$. The Frobenius 
theorem says that we can cover $X$ with coordinate patches adapted to $E$ if and only 
if $E$ is closed under the Lie bracket. This is the third integrability result we have 
encountered! The Frobenius theorem will be important later, but its role in this post 
is to demonstrate that the Lie bracket contains interesting geometric information 
about $X$. The proof is by induction on $r$. 

Suppose $r = 1$. Then $E \subseteq TX$ is a line bundle. Fix $p \in X$. Then we can 
choose coordinates $x^1,\dots,x^d$ around $p \in U \subseteq X$ such that $E \lvert_U$ 
is spanned by the nowhere vanishing vector field $V$. Consider the local action $a : 
\mathbb{R} \times U \dashrightarrow U$ generated by $V$ (we use the dashed arrow to 
indicate that $a$ is only defined in an open neighbourhood of $\{ 0 \} \times U$). The 
jacobian $a'_{(0,0)}$ has $V_p \not= 0$ in the first column and a $d \times d$ 
identity matrix in the last $d$ columns. By permuting the $x^i$, we can assume that 
the first $d$ columns of $a'_{(0,0)}$ are invertible. The inverse function theorem 
implies that $t,x_1,\dots,x_{d-1}$ are coordinates in a small neighbourhood of $p$ 
via the map $(t,x_1,\dots,x_{d-1}) \mapsto a(t,x_1,\dots,x_{d-1},0)$. Then $V = 
\partial / \partial t$ in this coordinate chart. Since our choice of $p$ was 
arbitrary, we can cover $X$ with charts adapted to $E$.
