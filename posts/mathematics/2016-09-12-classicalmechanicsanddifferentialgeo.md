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

