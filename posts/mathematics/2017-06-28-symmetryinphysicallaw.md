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
This is a complicated formula, so let us look at it when $n = d = 1$. In this case,
$$
\phi_{I1} = \frac{\partial \phi_I}{\partial x} - u_{I1} \frac{\partial f}{\partial x} + u_1 \left( \frac{\partial \phi_I}{\partial u} - u_{I1} \frac{\partial f}{\partial u} \right) + u_{11} \left( \frac{\partial \phi_I}{\partial u_1} - u_{I1} \frac{\partial f}{\partial u_1} \right) + \dots
$$
If we suppose that both $f$ and $\phi$ only depend on $x,u$, then we get
$$
\phi_1 = \frac{\partial \phi}{\partial x} - u_1 \frac{\partial f}{\partial x} + u_1 \left( \frac{\partial \phi}{\partial u} - u_1 \frac{\partial f}{\partial u} \right)
$$
$$
\phi_{11} = \frac{\partial \phi_1}{\partial x} - u_{11} \frac{\partial f}{\partial x} + u_1 \left( \frac{\partial \phi_1}{\partial u} - u_{11} \frac{\partial f}{\partial u} \right) + u_{11} \left( \frac{\partial \phi_1}{\partial u_1} - u_{11} \frac{\partial f}{\partial u_1}\right)
$$
expanding out these equations gives
$$
\phi_1 = \frac{\partial \phi}{\partial x} - u_1 \frac{\partial f}{\partial x} + u_1 \frac{\partial \phi}{\partial u} - u_1^2 \frac{\partial f}{\partial u}
$$
$$
\phi_{11} = \frac{\partial^2 \phi}{\partial x^2} - u_1 \frac{\partial^2 f}{\partial x^2} + 2 u_1 \frac{\partial^2 \phi}{\partial x \partial u} - 2 u_1^2 \frac{\partial^2 f}{\partial x \partial u} - 2 u_{11} \frac{\partial f}{\partial x} + u_1^2 \frac{\partial^2 \phi}{\partial u^2} - u_1^3 \frac{\partial^2 f}{\partial u^2} - 3 u_{11} u_1 \frac{\partial f}{\partial u} + u_{11} \frac{\partial \phi}{\partial u}
$$
As you can see, these computations are quite tedious.

### Symmetry groups for Partial Differential Equations

Suppose that $M$ is a manifold and we have a smooth hypersurface $H \subset M$ defined by $F(m) = 0$. A vector field $X$ preserves $H$ if and only if $X(F) \lvert_H = 0$. Since partial differential equations are submanifolds of jet bundles, we can apply this idea to compute the symmetry groups for partial differential equations. This is best demonstrated via an example. Consider the partial differential equation $u_{xx} = 0$ which corresponds to a free particle in 1-dimensional space. We can lift the vector field
$$
X = f \frac{\partial}{\partial x} + \phi \frac{\partial}{\partial u}
$$
to the second jet bundle using the formulas from the previous section. Preserving the submanifold $u_{xx} = 0$ means that we need $0 = \phi_{11} \lvert_{u_{xx} = 0}$. Expanding this out means that
$$
\frac{\partial^2 \phi}{\partial x^2} - u_1 \frac{\partial^2 f}{\partial x^2} + 2 u_1 \frac{\partial^2 \phi}{\partial x \partial u} - 2 u_1^2 \frac{\partial^2 f}{\partial x \partial u}  + u_1^2 \frac{\partial^2 \phi}{\partial u^2} - u_1^3 \frac{\partial^2 f}{\partial u^2} = 0
$$
Since this equation must hold for all $u_1$, we get the following four partial differential equations:
$$
\frac{\partial^2 \phi}{\partial x^2} = 0
$$
$$
\frac{\partial^2 f}{\partial u^2} = 0
$$
$$
\frac{\partial^2 f}{\partial x^2} = 2 \frac{\partial^2 \phi}{\partial x \partial u}
$$
$$
\frac{\partial^2 \phi}{\partial u^2} = 2 \frac{\partial^2 f}{\partial x \partial u}
$$
