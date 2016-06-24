---
title: entropy and fisher information
date: 2016-05-14
---

# Entropy and Fisher Information

*No one really knows what entropy really is\.\.\.\.*

This famous quote is due to Von Neumann. In this dense post, we are going to record 
some of the places where entropy shows up in probability theory and statistics.

### Information

Suppose that we have a device which has a finite set of possible configurations $C$. 
Suppose that we also have a function $X : C \to S$ where $S$ is another finite set. If 
we have no information about the current configuration of the device, then $X$ is a 
random variable with distribution
$$p(s) = \frac{ \lvert X^{-1}(s) \lvert}{\lvert C \lvert}.$$
If we measure the random variable $X$ and we see $s$, then we know that the 
configuration 
must be in the subset $X^{-1}(s)$. If we are encoding the possible configurations in 
binary, then we just learned the value of 
$$\log \lvert C \lvert - \log \lvert X^{-1}(s)  \lvert = \log \frac{1}{p(s)}$$
bits. Motivated by this, we call this number the **information content** of the 
measurement $s$. 

### Source coding theorem

Suppose that $S$ is a finite set and $X_1,X_2,\dots,X_n \in S$ are independent 
identically distributed random variables with distribution $p(s)$. The random variable 
$(X_1,\dots,X_n) \in S^n$ has distribution $p(s_1) p(s_2) \cdots p(s_n)$. We want to 
understand how localized this distribution is. The trick is to apply the weak law of 
large numbers in the following sneaky way:
$$\forall \epsilon > 0 \quad \lim_{n \to \infty} {\bf P}\left( \left\lvert \frac{\log 
p(X_1) \cdots p(X_n) }{n} - {\bf E}(\log p(X)) \right\lvert < \epsilon \right) = 1$$
We define
$$H(X) = \sum_{s \in S} p(s) \log \frac{1}{p(s)} = - {\bf E}(\log p(X))$$
This quantity is called the **entropy** of the random variable $X$. We have
$$\forall \epsilon > 0 \quad \lim_{n \to \infty}  
{\bf P} \left( 2^{-n(H+\epsilon)} < \prod_i p(X_i) < 2^{-n(H-\epsilon)} \right) = 1.$$
If we define
$$A_n^{\epsilon} = \left\{ (s_1,\dots,s_n) \in S^n : 2^{-n(H+\epsilon)} < \prod_i 
p(s_i) < 2^{-n(H-\epsilon)}  \right\}$$
then we have
$$\forall \epsilon > 0 \quad \lim_{n \to \infty} {\bf P}( (X_1,\dots,X_n) \in 
A_n^{\epsilon} 
) = 1$$
We call $A_n^{\epsilon}$ the **typical set**. Its size is less than $2^{n(H+\epsilon)}$. 
Informally, with high probability, we can record the string $(X_1,\dots,X_n)$ in $n(H+\epsilon)$ 
bits. Even more informally, if $\epsilon$ is small and $n$ is large, the set 
$A_n^{\epsilon}$ has $2^{n H}$ elements and each element has probability $2^{-nH}$. 
If we run through the proof again using the central limit theorem instead of the 
weak law of large numbers, we can get quantitative information about the typical set.
 
### Bayesian inference with a large amount of data

Suppose that $S$ is a finite set and $X \in S$ is a random variable. The set of 
possible density functions for $X$ is 
$$\Delta^S = \left\{ (p_s) : \text{each $p_s \geq 0$ and $\sum_s p_s = 1$} \right\}$$
In Bayesian inference, we let the density function of $X$ be another random variable 
$P \in \Delta^S$ which represents our knowledge about the distribution of $X$. Suppose 
that we take $n$ samples from $X$ and $s$ shows up $n q_s$ times. Then
$${\bf P}(q | P = p) = \frac{n!}{\prod_s (nq_s)!} \prod_s p_s^{nq_s}$$
If $n$ is very large, then we can use Stirling\'s formula
$$ \log (x!) = x \log x - x$$
which gives 
$$\log {\bf P}(q | P = p) = -n \left( \sum_s q_s \log \frac{q_s}{p_s} \right).$$
Define
$$D(q || p) = H(p \to q) = \sum_{s} q_s \log \frac{q_s}{p_s}.$$
This quantity is called the **relative entropy** or **KL-divergence**. From Bayes 
theorem, we have
$${\bf P}(P = p | q) \propto {\bf P}(q | P = p) {\bf P}(P = p) = e^{-n H(p \to q)} 
{\bf P}(P = p)$$
As a function of $p$, $H(p \to q)$ is non negative, convex and minimized when $p = q$. 
Therefore, the posterior distribution is maximized when $p = q$.

### The relative source coding theorem

The KL-divergence also shows up in the relative source coding theorem. Assume that $x 
\in S$ is a random variable with true distribution $p$. Furthermore, suppose that we 
think the distribution of $x$ is $q$. Let $x^1,\dots,x^N$ be independent samples from 
$p$ where $N$ is large. By the weak law of large numbers
$$\log p \left( x^1,\dots,x^N \right) = \sum_i \log p \left( x^i \right) \approx - NH(p)$$
so the true probability is
$$p \left( x^1,\dots,x^N \right) = 2^{- N H(p)}.$$
On the other hand,
$$\log q \left( x^1,\dots,x^N \right) = \sum_i \log q \left( x^i \right) \approx - N {\bf E}(q(x)) = - N H(p,q)$$
so we compute the probability
$$q \left( x^1, \dots, x^N \right) = 2^{-N H(p,q)}.$$
We call $H(p,q)$ the **cross entropy**. We have
$$\frac{q \left(x^1,\dots,x^N \right)}{ p \left( x^1,\dots,x^N \right)} = 
2^{-N(H(p,q) - H(q))} = 2^{-N D(p || q)}.$$


### Parametric inference and Fisher information

Once again, suppose that $S$ is a finite set and $X \in S$ is a random variable. 
Suppose that $p(s,\theta)$ is a family of density functions for $X$ parameterized by 
$\theta \in \Theta$ where $\Theta$ is a manifold. If $f : \Theta \to \mathbb{R}$ is a 
smooth function, an unbiased estimator for $f$ is a function $e : S \to \Theta$ such 
that 
$${\bf E}(f(e(X))) = f(\theta).$$
Unpacking this equation, we get
$$\sum_{s \in S}(f(e(s)) - f(\theta))p(s,\theta) = 0.$$
If we take the exterior derivative, then
$$-\sum_s p(s,\theta) df + \sum_s (f(e(s))-f(\theta)) d p(s,\theta) = 0$$ 
which implies that
$$\sum_s (f(e(s))-f(\theta)) d \log p(s,\theta) \cdot p(s,\theta) = df.$$
Using the Cauchy-Schwartz inequality and ${\bf E}(d \log p(s,\theta)) = 0$, we have
$${\bf V}(f(e(X)) {\bf V}(d \log p(s,\theta)) \geq df \otimes df.$$
Let us define $g = {\bf E}(d \log p(s,\theta) \otimes d \log p(s,\theta)) = {\bf 
V}(d \log p(s,\theta))$. This 
symmetric 2-tensor is positive definite and in many cases, non-degenerate. We call it 
the **Fisher information metric**. In terms of $g$, we have
$${\bf V}(f(e(X))) \geq \frac{df \otimes df}{g}$$
for all tangent vectors in $T_{\theta} \Theta$. This is called the Cramer-Rao 
inequality. Let us inspect $g$ in the coordinate chart $\theta^1,\dots,\theta^d$. We 
have
$$g = {\bf E}\left( \frac{\partial \log p(s,\theta)}{\partial \theta^i} 
\frac{\partial \log p(s,\theta)}{\partial \theta^j} \right) d \theta^i \otimes 
d\theta^j.$$
The equation ${\bf E}(d \log p(s,\theta))=0$ implies that
$${\bf E} \left( \frac{\partial \log p(s,\theta)}{\partial \theta^i} \right) = \sum_s 
\frac{\partial \log p(s,\theta)}{\partial \theta^i} p(s,\theta) = 0.$$
If we take the exterior derivative, then we get
$$g = -{\bf E}\left( \frac{\partial^2 \log p(s,\theta)}{\partial \theta^i \partial 
\theta^j} \right) d \theta^i \otimes d\theta^j.$$
This gives us a coordinate independent formula for the expectation of the Hessian of 
$\log p(s,\theta)$. If we take a Taylor expansion for $\log p(s,\theta)$ and apply 
${\bf E}$ to each side, then we get
 $$\sum_s \log \frac{p(s,\theta)}{p(s,\theta + tV)} 
p(s,\theta) = \frac{1}{2} g(tV,tV)$$ 
for small $t$. Once again, we see the relative entropy appearing and the 
Fisher information measures how the relative entropy changes for small motions in the 
parameter space.

### Jeffrey\'s Prior

The Fisher information naturally appears when you are interested in the variance of 
unbiased estimators in parametric inference. It is also important in Bayesian 
inference. We can use it to produce a distribution on $\Theta$ which is independent 
of coordinate system. This distribution is called **Jeffery\'s prior**. 

Why is this important? Sometimes, you 
end up in a situation where you want to do Bayesian inference, but you don\'t have a 
prior distribution. In situations like this, people will often choose a uniform prior 
distribution on the parameters. This is ambiguous, because the phrase *uniform prior* 
depends on how you coordinatized your parameters. A prior which is uniform in one 
coordinate system will probably not be uniform in a different coordinate system. 
Jeffery\'s prior is an unambiguous prior which you can use in this situation.



Suppose that the parameter space $\Theta$ is oriented and $d$-dimensional. The Fisher 
metric $g$ induces a metric on the line bundle $\wedge^d T\Theta$. The formula is
$$g(V_1 \wedge \dots \wedge V_d, W_1 \wedge \dots \wedge W_d) = \det(g(V_i,W_j))$$
Since $\Theta$ is oriented, the line bundle $\wedge^d T \Theta$ is trivial and we can 
define a global section $E$ by the formula $g(E,E) = 1$. Choose coordinates 
$\theta^1,\dots,\theta^d$ on $\Theta$. Then
$$g \left( \frac{\partial}{\partial \theta^1} \wedge \cdots \wedge 
\frac{\partial}{\partial \theta^d},\frac{\partial}{\partial \theta^1} \wedge \cdots 
\wedge \frac{\partial}{\partial \theta^d}  \right) = \det(g_{ij})$$
Therefore
$$E = \frac{1}{\sqrt{\det(g_{ij})}} \frac{\partial}{\partial \theta^1} \wedge \cdots
\wedge \frac{\partial}{\partial \theta^d}$$
The dual section of $\wedge^d T^* \Theta$ is given in coordinates by
$$J = \sqrt{\det(g_{ij})} d \theta^1 \wedge \dots \wedge d \theta^d.$$
If we normalize $J$ so that $\int_{\Theta} J = 1$, then we get Jeffery\'s Prior.
