---
title: classical mechanics and differential geometry
date: 2016-09-12
---

# Classical Mechanics and Differential Geometry

Recall Newton\'s second law which describes the motion of a particle in the presence of a conservative force field:
$$m \frac{d^2 x}{dt^2} + \nabla V(x) = 0$$
where $m$ is mass the mass of the particle, $x \in \mathbb{R}^3$ is the position of the particle and $V$ is the potential energy function. Netwon\'s second law specifies a set of curves in $\mathbb{R}^3$. In this post, we are going to describe the same set of curves in a coordinate indipendent way. 

### The Euler-Lagrange equations

Let $M$ be a manifold and $L : TM \to \mathbb{R}$ a function which we will call the Lagrangian. Define $\Omega(a,b;M)$ to be the set of paths from $a$ to $b$ in $M$. We define the action functional $S : \Omega(a,b;M) \to \mathbb{R}$ by the equation
$$S(x) = \int L\left( x,\frac{dx}{dt} \right) dt.$$
It is natural to ask which curves are local minima for the action functional. This is a local condition on the curve: If $x$ is a local minima, then any small section of $x$ is also a local minima for its corresponding action functional. Therefore, we can compute in local coordinates what it means for $x$ to be a local minima of the action functional. Let $x(s,t)$ be a curve in $\Omega(a,b;M)$ which equals $x$ when $s=0$. It follows from the chain rule that
$$\frac{d}{ds} S(x) = \int \frac{\partial L}{\partial x^i} \frac{\partial x^i}{\partial s} dt + 
\int \frac{\partial L}{\partial v^i} \frac{\partial^2 x^i}{\partial t \partial s} dt$$
where $x^i$ are coordinates on $M$ and $v^i$ are the corresponding coordinates on the fiber of $TM$. Using integration by parts and the fact that $x(t_0,s) =a, x(t_1,s)=b$, the second integral equals
$$\left[ \frac{\partial L}{\partial v^i} \frac{\partial x^i}{\partial s} \right]^{t_1}_{t_0} - \int \frac{d}{dt} \frac{\partial L}{\partial v^i} \frac{\partial x^i}{\partial s} dt = - \int \frac{d}{dt} \frac{\partial L}{\partial v^i} \frac{\partial x^i}{\partial s} dt.$$
This implies that
$$\frac{d}{ds} S(x) = \int \left(\frac{\partial L}{\partial x^i} - \frac{d}{dt} \frac{\partial L}{\partial v^i} \right) \frac{\partial x^i}{\partial s} dt.$$
Since our choice of path $x(s,t)$ in $\Omega(a,b;M)$ was arbitrary, evaluating at $s=0$ gives
$$ \left\langle \frac{\partial L}{\partial x^i} - \frac{d}{dt} \frac{\partial L}{\partial v^i},y \right\rangle_{L^2}=0 \; \text{for all loops $y$}$$
which implies that
$$\frac{\partial L}{\partial x^i} = \frac{d}{dt} \frac{\partial L}{\partial v^i} \; \text{for each $i$}.$$
These are the Euler-Lagrange equations. If we use the Newtonian Lagrangian
$$L = \frac{1}{2} m (v^1 v^1 + v^2 v^2 + v^3 v^3) - V(x^1,x^2,x^3)$$
then the Euler-Lagrange equations simplify to Newton\'s second law.

### Classical Mechanics on a Riemannian Manifold

Let $(M,g)$ be a Riemannian manifold and $V : M \to \mathbb{R}$ a function. We can generalize the Newtonian Lagrangian to this case:
$$L = \frac{1}{2} m g(v,v) - V(x)$$
We call $V(x)$ the potential energy and $\frac{1}{2} m g(v,v)$ the kinetic energy. Let $x^i$ be coordinates on $M$ and $v^i$ the corresponding coordinates on the fibers of $TM$. If $g = g_{ij} dx^i \otimes dx^j$ then $g(v,v) = g_{ij} v^i v^j$ which implies
$$\frac{\partial L}{\partial v^i} = m g_{ij} v^j.$$
Using the Riemannian metric g, we can identify $TM$ and $T^*M$ via the isomorphism $v \mapsto g(-,v)$. In coordinates, it sends the vector $v^j$ to $p_i = g_{ij} v^j$. Therefore we can write the Euler Lagrange equations as
$$m \frac{d p_i}{dt} = - \frac{\partial V}{\partial x^i}.$$
From the equation $v^i = g^{ij} p_j$ we have that
$$ \frac{d x^i}{dt} = g^{ij} p_j$$
where $g^{ij}$ is the induced metric on $T^*M$. Therefore, on the cotangent bundle, the Euler-Lagrange equations specify the flow curves of the vector field 
$$\left( g^{ij}p_j, - \frac{\partial V}{\partial x^i} \right).$$

### The Symplectic Structure on the Cotangent Bundle


