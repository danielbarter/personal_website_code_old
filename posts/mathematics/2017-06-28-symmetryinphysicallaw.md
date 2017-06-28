---
title: symmetry in physical law
date: 2017-06-28
---

# Symmetry in Physical Law

Symmetry plays an important role in physics. In order to make things precise, we need language for talking about the symmetry groups of differential equations. In this post, we shall develop this language and look at some simple examples.


### Jet Bundles

To keep things simple, we work locally. Consider a manifold $N^n$ with coordinates $x^i$ and a manifold $D^d$ with coordinates $u^{\alpha}$. We call $x^i$ the **independent** variables and $u^{\alpha}$ the **dependent** variables. We want to study maps $N \to D$. The graphs of such maps are $n$-dimensional closed submanifolds of $N \times D$ which has coordinates $x^i,u^{\alpha}$. Another name for the product manifold $N \times D$ is the $0$-jet bundle. We construct the $p$-jet bundle locally as follows: It has coordinates $x^i,u_I^{\alpha}$ where $I$ is a weakly increasing sequence in $\{1,2,\dots,n\}$ with length $0 \leq l \leq p$. If $I = i_1 \leq i_2 \leq \dots \leq i_q$, the coordinate $u_I^{\alpha}$ is supposed to record the partial derivative
$$\frac{\partial^q u^{\alpha}}{\partial x^{i_1} \partial x^{i_2} \cdots \partial x^{i_q}}.$$
For example, take $n = 1, d = 2$. Then the coordinates on the second jet bundle are $$x,u,v,u_x,v_x,u_{xx},v_{xx}.$$ If we take $n = 2, d = 1$, the coordinates on the second jet bundle are 
$$x,y,u,u_x,u_y,u_{xx},u_{xy},u_{yy}.$$
Every map $f : N \to D$ induces an $n$-dimensional submanifold $G_f = (x^i,f_I^{\alpha}(x^i))$ in the jet bundle. The $1$-form
$$\theta_I^{\alpha} = d u^{\alpha}_I - u^{\alpha}_{I i} d x^i$$
vanishes on the submanifold $G_f$ for every $f$. We call $\theta_I^{\alpha}$ a **contact ideal**.

### Lifting infinitesimal symmetries to the jet bundle

Suppose that we have a vector field
$$X = f^i \frac{\partial}{\partial x^i} + \phi_I^{\alpha} \frac{\partial}{\partial u^{\alpha}_I}$$
on the jet bundle. We want this infinitesimal symmetry to send the graph $G_a$ into a graph $G_b$. If $V$ is a tangent vector to $G_a$, then we have
$$\theta_I^{\alpha} (t \cdot V) = \theta_I^{\alpha}(V) + t \mathcal{L}_X \theta_I^{\alpha} (V) + \frac{t^2}{2} \mathcal{L}_X \mathcal{L}_X \theta_I^{\alpha}(V) + \dots$$
which will vanish if $\mathcal{L}_X \theta_I^{\alpha}$ is a smooth linear combination of the contact forms. We have
$$\mathcal{L}_X \theta_I^{\alpha} = d \phi_I^{\alpha} - \phi^{\alpha}_{I i} d x^i - u^{\alpha}_{I i} d f^i.$$
If you expand out the exterior derivatives and use the equation $du_I^{\alpha} = \theta_I^{\alpha} + u_{I i}^{\alpha} dx^i$, then you get the equation
$$
\phi^{\alpha}_{I i} = \frac{\partial \phi_I^{\alpha}}{\partial x^i} - u^{\alpha}_{I j} \frac{\partial f^j}{\partial x^i} + u^{\beta}_{K i} \left( \frac{\partial \phi^{\alpha}_I}{\partial u^{\beta}_K} - u_{I j}^{\alpha} \frac{ \partial f^j}{ \partial u^{\beta}_K} \right)
$$

